import type { Metadata } from "next";
import Link from "next/link";
import { PageSection } from "../../components/PageSection";

export const metadata: Metadata = {
  title:
    "Automatización de procesos empresariales | Innovad Perú - Optimización y eficiencia",
  description:
    "Automatizamos procesos empresariales en Perú para reducir tiempos operativos, eliminar tareas manuales y mejorar el control de la información. Soluciones de automatización a medida para empresas.",
};

export default function AutomatizacionProcesosEmpresasPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <header className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-10 text-white shadow-xl sm:px-10 sm:py-12">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
            Automatización de procesos empresariales
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Automatización de procesos empresariales para compañías en Perú
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            En Innovad ayudamos a empresas en Perú a automatizar procesos
            operativos, administrativos y de atención, reemplazando tareas
            manuales por flujos digitales controlados, medibles y más
            eficientes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contactenos"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
            >
              Solicitar diagnóstico de procesos
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center rounded-full border border-sky-300/70 bg-slate-900/20 px-6 py-3 text-sm font-semibold text-sky-100 shadow-md transition duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-slate-900/60"
            >
              Ver servicios de Innovad
            </Link>
          </div>
        </div>
      </header>

      <PageSection
        id="beneficios"
        eyebrow="Beneficios"
        title="Beneficios de la automatización de procesos empresariales"
        tone="muted"
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <p className="mb-4 text-sm text-slate-700">
            La automatización de procesos empresariales permite que las
            organizaciones reduzcan tiempos, disminuyan errores y tengan una
            mejor trazabilidad de sus operaciones. Esto es especialmente
            relevante para empresas en Perú que gestionan una alta carga
            operativa o requieren control detallado de la información.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Menos tareas manuales
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Procesos que antes requerían digitación manual o múltiples pasos
                pueden automatizarse con sistemas que registran y validan la
                información de forma automática.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Mayor control y trazabilidad
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Los procesos automatizados dejan un registro claro de cada
                etapa, responsable y fecha, facilitando el seguimiento de
                solicitudes y el monitoreo de indicadores.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Mejora en la experiencia del cliente
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Al reducir tiempos de respuesta y errores, los usuarios finales
                perciben un servicio más ágil, claro y confiable.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection
        id="casos"
        eyebrow="Aplicaciones"
        title="Aplicaciones de la automatización en empresas peruanas"
        tone="default"
      >
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm sm:p-8 lg:p-10">
          <p>
            La automatización de procesos empresariales puede aplicarse en
            distintos ámbitos de una organización, desde trámites internos hasta
            atención ciudadana o servicio al cliente. Cada caso se diseña en
            función de la realidad particular de la empresa.
          </p>
          <h2 className="text-base font-semibold text-slate-900">
            Automatización de trámites y solicitudes
          </h2>
          <p>
            Muchas organizaciones en Perú gestionan solicitudes con correos,
            hojas de cálculo o formularios poco integrados. Mediante sistemas
            web a medida, es posible automatizar el registro, la asignación de
            responsables, los plazos y las notificaciones asociadas a cada
            trámite.
          </p>
          <h2 className="text-base font-semibold text-slate-900">
            Integración con sistemas empresariales
          </h2>
          <p>
            Los procesos automatizados pueden conectarse con sistemas
            empresariales existentes para evitar la doble digitación de datos.
            Esto permite que la información fluya entre áreas sin necesidad de
            repetir tareas, reduciendo errores y mejorando la consistencia.
          </p>
          <h2 className="text-base font-semibold text-slate-900">
            Automatización con chatbots y asistentes virtuales
          </h2>
          <p>
            La automatización también puede combinarse con chatbots que reciben
            solicitudes, orientan al usuario y registran información de manera
            guiada. Esta combinación es particularmente útil para empresas que
            reciben un alto volumen de consultas.
          </p>
        </div>
      </PageSection>

      <PageSection
        id="faq"
        eyebrow="Preguntas frecuentes"
        title="Preguntas frecuentes sobre automatización de procesos empresariales"
        tone="muted"
      >
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm sm:p-8 lg:p-10">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              ¿Cómo saber qué procesos conviene automatizar primero?
            </h3>
            <p className="mt-2">
              Generalmente se priorizan los procesos con mayor volumen,
              frecuencia de errores o impacto en la experiencia del usuario.
              Durante el diagnóstico analizamos estos factores y proponemos una
              hoja de ruta gradual para su empresa.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              ¿La automatización implica cambiar todos los sistemas actuales?
            </h3>
            <p className="mt-2">
              No necesariamente. Muchas veces es posible construir soluciones que
              se integren con sistemas ya existentes, respetando las
              inversiones realizadas y enfocándose en los puntos donde se genera
              mayor fricción.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              ¿Es necesaria una gran inversión inicial?
            </h3>
            <p className="mt-2">
              Diseñamos proyectos que puedan implementarse por etapas, de modo
              que la organización vea resultados en plazos razonables y pueda
              continuar avanzando en función de los beneficios obtenidos.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection
        id="cta"
        eyebrow="Siguiente paso"
        title="Solicite un diagnóstico de automatización para su empresa en Perú"
        tone="default"
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm sm:p-8 lg:p-10">
          <p>
            Si su empresa en Perú está experimentando demoras, tareas manuales
            repetitivas o dificultades para seguir el estado de los procesos,
            una iniciativa de automatización puede marcar una diferencia
            significativa.
          </p>
          <p className="mt-3">
            En Innovad podemos analizar la situación actual de su organización,
            identificar oportunidades de mejora y proponer soluciones de
            automatización de procesos empresariales alineadas a sus objetivos.
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
              Ver servicios de software a medida
            </Link>
            <Link
              href="/chatbot-empresas-peru"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-white"
            >
              Ver soluciones de chatbot
            </Link>
          </div>
        </div>
      </PageSection>
    </div>
  );
}

