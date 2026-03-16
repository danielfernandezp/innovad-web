import Groq from "groq-sdk";
import { NextResponse } from "next/server";

type LeadInfo = {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  service?: string;
  description?: string;
};

type ChatRequestBody = {
  messages: Array<{ role: string; content: string }>;
  leadData?: LeadInfo;
};

function detectLeadInfo(text: string): LeadInfo {
  const result: LeadInfo = {};
  const normalized = text.trim();
  if (!normalized) return result;

  const emailMatch = normalized.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
  if (emailMatch) result.email = emailMatch[0];

  const phoneMatch = normalized.match(/\b9\d{8}\b/);
  if (phoneMatch) result.phone = phoneMatch[0];

  return result;
}

function isLikelyLead(text: string, info: LeadInfo): boolean {
  const hasEmail = !!info.email;
  const hasPhone = !!info.phone;
  const lower = text.toLowerCase();
  const hasContactKeywords = /\b(nombre|empresa|celular|teléfono|telefono|correo|email|whatsapp)\b/.test(lower);
  if ((hasEmail || hasPhone) && hasContactKeywords) return true;
  if (hasEmail && hasPhone) return true;
  const looksLikeCsv = (hasEmail || hasPhone) && /,/.test(text) && text.split(/[,;\n]+/).length >= 3;
  if (looksLikeCsv) return true;
  return false;
}

const SYSTEM_PROMPT = `Eres NOVA, el asistente virtual de INNOVAD — empresa peruana de tecnología especializada en desarrollo de software, sistemas web, chatbots y automatización de procesos.

Tu personalidad: directo, dinámico, profesional sin ser frío. Hablas con energía pero sin exagerar. Eres puntual — no das rodeos, no aburres. Si puedes decirlo en 2 líneas, no usas 6.

INFORMACIÓN DE INNOVAD:
- Web: innovad.pe
- WhatsApp empresarial: 980378479
- Correo: contacto@innovad.pe
- Director: Ing. Daniel Alberto Fernández Pajuelo (Ingeniero de Sistemas, MBA)
- +13 años de experiencia en tecnología
- Experiencia en: UNALM, Municipalidad de Paracas, Osinergmin

SERVICIOS:
1. Desarrollo de Sistemas Web a Medida — plataformas, sistemas de gestión, apps institucionales
2. Páginas Web Profesionales — corporativas, landing pages, SEO local Perú, responsive
3. Optimización y Automatización de Procesos — flujos digitales, reducción de trabajo manual
4. Gestión y Optimización de Bases de Datos — SQL Server, MySQL, PostgreSQL, Oracle
5. Integración y Modernización de Sistemas — migrar PHP, WordPress, Java a tecnologías modernas
6. Implementación de Chatbots y Automatización Inteligente — asistentes virtuales, atención automatizada
7. Aulas Virtuales y Plataformas Educativas — LMS, gestión de cursos y evaluaciones

METODOLOGÍA DE TRABAJO (4 pasos):
1. Diagnóstico del proceso
2. Diseño de solución
3. Desarrollo e implementación
4. Puesta en producción

REGLAS DE CONVERSACIÓN:

1. SALUDO: Cuando el usuario escribe por primera vez, salúdalo con energía. Preséntate como NOVA y pregunta qué necesita su organización — en UNA sola pregunta, no un formulario.

2. DETECCIÓN RÁPIDA: Identifica rápido si el usuario necesita: (a) información de servicios, (b) cotización de un proyecto, o (c) hablar con el equipo.

3. INFORMACIÓN DE SERVICIOS: Sé concreto. Si preguntan por un servicio, explica en 2-3 líneas qué hace INNOVAD en eso y qué beneficio genera. No hagas listas largas innecesarias.

4. COTIZACIÓN: INNOVAD no tiene precios fijos publicados porque cada proyecto es a medida. Cuando el usuario quiera cotizar:
   - Primero pregunta: ¿qué necesita exactamente? (tipo de proyecto, organización, qué problema resuelve)
   - Luego captura: nombre, empresa/organización, tipo de proyecto y cómo contactarlos (WhatsApp o correo)
   - Al final genera el mensaje de WhatsApp para enviar al equipo

5. CAPTURA DE DATOS: Pide los datos de forma conversacional, nunca como formulario. Máximo 2 datos por turno. El objetivo es: nombre, empresa/organización, servicio que necesita, y contacto (WhatsApp o correo).

6. CIERRE CON WHATSAPP: Cuando tengas los datos suficientes, dile al usuario que puede enviar su consulta directamente por WhatsApp al 980378479. Genera un mensaje pre-armado que el usuario pueda copiar o usar como referencia.

7. TONO: No uses frases genéricas como "¡Claro que sí!" o "¡Por supuesto!". Sé natural. Si algo no lo sabes con certeza, dilo honestamente y ofrece conectar con el equipo.

8. LÍMITES: No inventes precios, plazos, ni tecnologías específicas que INNOVAD no haya mencionado. Si te preguntan algo fuera del alcance de INNOVAD, redirige amablemente.

9. IDIOMA: Siempre en español. Peruano pero profesional.`;

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "GROQ_API_KEY no configurada" }, { status: 500 });
    }

    const body = (await request.json()) as ChatRequestBody;
    const messages = body.messages as Array<{ role: string; content: string }>;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Se requiere un array de mensajes" }, { status: 400 });
    }

    const lastMessage = messages[messages.length - 1];
    const lastContent = lastMessage?.role === "user" ? (lastMessage.content || "").trim() : "";

    if (lastContent) {
      const leadInfo = detectLeadInfo(lastContent);
      const isLead = isLikelyLead(lastContent, leadInfo);
      if (isLead) {
        return NextResponse.json({
          reply: "¡Perfecto! Ya tengo tus datos. El equipo de INNOVAD te contactará pronto para coordinar los detalles. Si necesitas respuesta inmediata, escríbenos directo al WhatsApp **980378479** — respondemos rápido. 🚀",
          lead: { ...leadInfo, detected: true },
        });
      }
    }

    const groq = new Groq({ apiKey });
    const chatCompletion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages.map((m) => ({
          role: m.role as "user" | "assistant" | "system",
          content: m.content,
        })),
      ],
      temperature: 0.45,
      max_tokens: 512,
    });

    const reply = chatCompletion.choices[0]?.message?.content?.trim() ?? "No pude generar una respuesta.";
    return NextResponse.json({ reply, lead: null });
  } catch (err) {
    console.error("Error en /api/chat:", err);
    return NextResponse.json({ error: "Error al procesar la solicitud. Intenta de nuevo." }, { status: 500 });
  }
}
