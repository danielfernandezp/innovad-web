import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  service?: string;
  description?: string;
  conversationSummary?: string;
};

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as LeadPayload;

    const { name, company, phone, email, service, description, conversationSummary } = payload;

    const now = new Date();
    const dateFormatter = new Intl.DateTimeFormat("es-PE", {
      timeZone: "America/Lima",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const formattedDate = dateFormatter.format(now);

    const safe = (value?: string | null) =>
      value === undefined || value === null || value === "" ? "No especificado" : String(value);

    // Mensaje formateado para WhatsApp
    const whatsappMessage = encodeURIComponent(
      `🔔 *Nuevo lead desde chatbot INNOVAD*\n\n` +
      `👤 *Nombre:* ${safe(name)}\n` +
      `🏢 *Empresa/Organización:* ${safe(company)}\n` +
      `📱 *Teléfono:* ${safe(phone)}\n` +
      `📧 *Correo:* ${safe(email)}\n` +
      `🛠️ *Servicio requerido:* ${safe(service)}\n` +
      `📝 *Descripción:* ${safe(description)}\n\n` +
      `💬 *Resumen conversación:*\n${safe(conversationSummary)?.slice(0, 500)}\n\n` +
      `⏰ Fecha: ${formattedDate}`
    );

    const whatsappUrl = `https://wa.me/51980378479?text=${whatsappMessage}`;

    // Si tienes RESEND configurado, también envía email
    const resendApiKey = process.env.RESEND_API_KEY;
    const leadEmail = process.env.LEAD_RECEIVER_EMAIL;

    if (resendApiKey && leadEmail) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "INNOVAD Chatbot <onboarding@resend.dev>",
            to: [leadEmail],
            subject: `Nuevo lead chatbot INNOVAD — ${safe(name)} (${formattedDate})`,
            html: `
              <div style="font-family:system-ui,sans-serif;color:#0f172a;font-size:14px;line-height:1.6;max-width:640px;">
                <h1 style="font-size:20px;margin-bottom:8px;">🔔 Nuevo lead desde chatbot INNOVAD</h1>
                <p style="color:#64748b;margin-bottom:20px;">Recibido el ${formattedDate}</p>
                <table style="border-collapse:collapse;width:100%;">
                  <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;">Nombre</td><td style="padding:8px;border:1px solid #e2e8f0;">${safe(name)}</td></tr>
                  <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;">Empresa</td><td style="padding:8px;border:1px solid #e2e8f0;">${safe(company)}</td></tr>
                  <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;">Teléfono</td><td style="padding:8px;border:1px solid #e2e8f0;">${safe(phone)}</td></tr>
                  <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;">Correo</td><td style="padding:8px;border:1px solid #e2e8f0;">${safe(email)}</td></tr>
                  <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;">Servicio</td><td style="padding:8px;border:1px solid #e2e8f0;">${safe(service)}</td></tr>
                  <tr><td style="padding:8px;border:1px solid #e2e8f0;font-weight:600;background:#f8fafc;">Descripción</td><td style="padding:8px;border:1px solid #e2e8f0;">${safe(description)}</td></tr>
                </table>
                <h2 style="font-size:16px;margin-top:20px;">Resumen de conversación</h2>
                <p style="white-space:pre-line;background:#f8fafc;padding:12px;border-radius:8px;">${safe(conversationSummary)}</p>
                <p style="margin-top:16px;"><a href="${`https://wa.me/51980378479?text=${whatsappMessage}`}" style="background:#22c55e;color:white;padding:10px 20px;border-radius:8px;text-decoration:none;font-weight:600;">Responder por WhatsApp</a></p>
              </div>
            `,
          }),
        });
      } catch (emailErr) {
        console.error("Error enviando email:", emailErr);
        // No falla el request principal si el email falla
      }
    }

    return NextResponse.json({ ok: true, whatsappUrl });
  } catch (error) {
    console.error("Error en /api/lead:", error);
    return NextResponse.json({ ok: false, error: "Error al procesar el lead" }, { status: 500 });
  }
}
