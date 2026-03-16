import type { Metadata } from "next";
import Link from "next/link";
import { PageSection } from "../../components/PageSection";

export const metadata: Metadata = {
  title:
    "Chatbot para empresas en Perú | Innovad - Automatización de atención y procesos",
  description:
    "Implementamos chatbots empresariales en Perú para automatizar la atención al cliente, consultas frecuentes y procesos internos. Soluciones de chatbot a medida para empresas e instituciones.",
};

export default function ChatbotEmpresasPeruPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <header className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-10 text-white shadow-xl sm:px-10 sm:py-12">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
            Chatbots para empresas en Perú
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Chatbot para empresas en Perú para automatizar la atención y los
            procesos
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            En Innovad diseñamos e implementamos chatbots para empresas en Perú
            que permiten automatizar la atención al cliente, responder consultas
            frecuentes y optimizar procesos internos, integrándose con los
            canales que su organización ya utiliza.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contactenos"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
            >
              Solicitar propuesta de chatbot
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center rounded-full border border-sky-300/70 bg-slate-900/20 px-6 py-3 text-sm font-semibold text-sky-100 shadow-md transition duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-slate-900/60"
            >
              Ver otros servicios
            </Link>
          </div>
        </div>
      </header>

      <PageSection
        id="beneficios"
        eyebrow="Beneficios"
        title="Beneficios de un chatbot para empresas en Perú"
        tone="muted"
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <p className="mb-4 text-sm text-slate-700">
            Un chatbot bien diseñado permite que las empresas en Perú atiendan a
            sus clientes y usuarios las 24 horas del día, sin depender
            exclusivamente de personal humano. Además de responder preguntas
            frecuentes, un chatbot empresarial puede guiar a los usuarios en
            procesos específicos, registrar solicitudes y derivar casos
            complejos al equipo adecuado.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Atención inmediata y disponible 24/7
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Sus clientes pueden recibir respuestas inmediatas a sus
                consultas, incluso fuera del horario laboral, mejorando la
                experiencia de atención y reduciendo tiempos de espera.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Automatización de consultas frecuentes
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Un alto porcentaje de las consultas que recibe una empresa son
                repetitivas. El chatbot puede responderlas de manera automática,
                liberando tiempo del equipo para tareas de mayor valor.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Integración con procesos empresariales
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Un chatbot puede integrarse con sistemas empresariales para
                registrar tickets, actualizar estados de solicitudes,
                agendar citas o consultar información relevante en tiempo real.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Enfoque en empresas e instituciones peruanas
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Diseñamos chatbots considerando el contexto de empresas en Perú,
                tanto del sector público como del sector privado, alineando el
                lenguaje y los flujos a la realidad local.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection
        id="implementacion"
        eyebrow="Implementación"
        title="Cómo implementamos un chatbot empresarial en su organización"
        tone="default"
      >
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm sm:p-8 lg:p-10">
          <p>
            En Innovad seguimos una metodología estructurada para implementar
            chatbots en empresas peruanas. El objetivo es que el chatbot no sea
            solo una herramienta aislada, sino una pieza integrada en la
            estrategia de atención y automatización de la organización.
          </p>
          <h2 className="text-base font-semibold text-slate-900">
            1. Diagnóstico de necesidades
          </h2>
          <p>
            Analizamos los procesos de atención al cliente, los canales
            utilizados (como WhatsApp, web, redes internas) y los tipos de
            consultas que recibe su organización. Con esta información
            identificamos los puntos donde un chatbot puede aportar mayor valor
            y definimos los primeros flujos de conversación.
          </p>
          <h2 className="text-base font-semibold text-slate-900">
            2. Diseño de flujos y experiencia de usuario
          </h2>
          <p>
            Diseñamos los flujos conversacionales pensando en la claridad para
            el usuario y en la eficiencia para la empresa. Definimos mensajes,
            opciones guiadas, validaciones y derivaciones a otros canales de
            atención cuando es necesario.
          </p>
          <h2 className="text-base font-semibold text-slate-900">
            3. Integración con sistemas empresariales
          </h2>
          <p>
            Cuando la organización cuenta con sistemas empresariales, el
            chatbot puede conectarse a ellos para consultar y registrar
            información. Esto es clave para automatizar procesos como
            seguimiento de solicitudes, reservas, trámites o consultas de
            estado.
          </p>
          <h2 className="text-base font-semibold text-slate-900">
            4. Pruebas, ajuste y acompañamiento
          </h2>
          <p>
            Realizamos pruebas con usuarios internos, ajustamos los flujos y
            dejamos capacidades instaladas para que el chatbot pueda seguir
            mejorando con el tiempo. Acompañamos a su equipo en la operación
            diaria y en la revisión de métricas.
          </p>
        </div>
      </PageSection>

      <PageSection
        id="faq"
        eyebrow="Preguntas frecuentes"
        title="Preguntas frecuentes sobre chatbots para empresas en Perú"
        tone="muted"
      >
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm sm:p-8 lg:p-10">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              ¿En qué tipos de empresas es recomendable implementar un chatbot?
            </h3>
            <p className="mt-2">
              Un chatbot es recomendable para empresas e instituciones que
              reciben un volumen importante de consultas repetitivas o que
              necesitan ofrecer atención fuera del horario laboral. Puede ser
              útil en entidades públicas, universidades, empresas de servicios,
              comercios y organizaciones que busquen mejorar la experiencia de
              atención al usuario.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              ¿El chatbot reemplaza al equipo de atención al cliente?
            </h3>
            <p className="mt-2">
              El objetivo del chatbot no es reemplazar al equipo humano, sino
              complementar su trabajo. El chatbot atiende las consultas
              frecuentes y más simples, mientras que el equipo se enfoca en los
              casos que requieren criterio especializado o seguimiento más
              cercano.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              ¿Pueden integrarse los chatbots con WhatsApp u otros canales?
            </h3>
            <p className="mt-2">
              Sí. Podemos integrar los chatbots con canales como WhatsApp,
              sitios web o plataformas internas, según la estrategia de
              comunicación de su organización y las herramientas que ya
              utiliza.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection
        id="cta"
        eyebrow="Siguiente paso"
        title="Conversemos sobre un chatbot para su empresa en Perú"
        tone="default"
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm sm:p-8 lg:p-10">
          <p>
            Si su empresa en Perú está evaluando implementar un chatbot para
            mejorar la atención al cliente o automatizar procesos internos,
            podemos ayudarlo a definir el alcance y la mejor estrategia
            tecnológica.
          </p>
          <p className="mt-3">
            Contáctenos para una conversación inicial sin compromiso. Podemos
            revisar la situación actual de su organización y proponer un
            enfoque gradual que genere resultados visibles en poco tiempo.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contactenos"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.4)] transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
            >
              Contactar a Innovad
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center rounded-full border border-sky-300/70 bg-slate-50 px-6 py-3 text-sm font-semibold text-sky-700 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-white"
            >
              Ver servicios de automatización
            </Link>
            <Link
              href="/automatizacion-procesos-empresas"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-white"
            >
              Ver automatización de procesos
            </Link>
          </div>
        </div>
      </PageSection>
    </div>
  );
}

