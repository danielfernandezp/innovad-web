import type { Metadata } from "next";
import Link from "next/link";
import { PageSection } from "../../components/PageSection";

export const metadata: Metadata = {
  title:
    "Integración de sistemas empresariales | Innovad Perú - Conectamos sus aplicaciones",
  description:
    "Integramos sistemas empresariales para que la información fluya entre áreas y aplicaciones. Proyectos de integración de sistemas para empresas en Perú.",
};

export default function IntegracionSistemasEmpresarialesPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <header className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-10 text-white shadow-xl sm:px-10 sm:py-12">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
            Integración de sistemas empresariales
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Integración de sistemas empresariales para empresas en Perú
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            En Innovad conectamos sistemas empresariales para que la información
            fluya entre áreas y plataformas, reduciendo la doble digitación,
            errores y tiempos operativos en empresas peruanas.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contactenos"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
            >
              Evaluar integración de sistemas
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center rounded-full border border-sky-300/70 bg-slate-900/20 px-6 py-3 text-sm font-semibold text-sky-100 shadow-md transition duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-slate-900/60"
            >
              Ver servicios tecnológicos
            </Link>
          </div>
        </div>
      </header>

      <PageSection
        id="beneficios"
        eyebrow="Beneficios"
        title="Beneficios de integrar sus sistemas empresariales"
        tone="muted"
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <p className="mb-4 text-sm text-slate-700">
            Muchas organizaciones en Perú utilizan múltiples sistemas que no
            están conectados entre sí. La integración de sistemas empresariales
            permite que la información se comparta automáticamente, reduciendo
            la duplicidad de trabajo y mejorando la calidad de los datos.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Menos doble digitación
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Al integrar sistemas, la información se registra una sola vez y
                se comparte con las demás aplicaciones que la necesitan.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Datos más consistentes
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                La integración reduce discrepancias entre reportes y sistemas,
                lo que mejora la confiabilidad de la información para la toma de
                decisiones.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Procesos más ágiles
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Los flujos de trabajo se vuelven más rápidos cuando los sistemas
                se comunican entre sí de manera automática, sin pasos manuales
                innecesarios.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection
        id="enfoque"
        eyebrow="Enfoque"
        title="Nuestro enfoque para proyectos de integración de sistemas"
        tone="default"
      >
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm sm:p-8 lg:p-10">
          <p>
            Los proyectos de integración de sistemas requieren entender tanto la
            tecnología disponible como los procesos de negocio. En Innovad
            equilibramos ambos aspectos para lograr soluciones sostenibles en el
            tiempo.
          </p>
          <h2 className="text-base font-semibold text-slate-900">
            Análisis de sistemas y procesos
          </h2>
          <p>
            Identificamos qué sistemas participan en los procesos clave, qué
            información se comparte entre áreas y cuáles son las principales
            fuentes de error o duplicidad de trabajo.
          </p>
          <h2 className="text-base font-semibold text-slate-900">
            Diseño de interfaces e integraciones
          </h2>
          <p>
            Definimos cómo deben comunicarse los sistemas, qué datos se
            intercambian y con qué frecuencia. Esto puede incluir APIs, servicios
            web, colas de mensajes u otros mecanismos según la arquitectura
            tecnológica de la organización.
          </p>
          <h2 className="text-base font-semibold text-slate-900">
            Implementación gradual y monitoreo
          </h2>
          <p>
            Implementamos las integraciones de forma gradual, monitoreando su
            comportamiento y realizando ajustes para asegurar estabilidad y
            rendimiento adecuados.
          </p>
        </div>
      </PageSection>

      <PageSection
        id="faq"
        eyebrow="Preguntas frecuentes"
        title="Preguntas frecuentes sobre integración de sistemas empresariales"
        tone="muted"
      >
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm sm:p-8 lg:p-10">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              ¿Es posible integrar sistemas antiguos con tecnologías más
              modernas?
            </h3>
            <p className="mt-2">
              En muchos casos sí. Evaluamos las capacidades de los sistemas
              existentes y definimos la mejor forma de conectarlos, ya sea
              mediante APIs, capas intermedias o procesos de sincronización
              específicos.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              ¿Qué tipo de empresas se benefician más de la integración?
            </h3>
            <p className="mt-2">
              Empresas e instituciones que utilizan varias aplicaciones para sus
              procesos y que hoy dependen de exportar e importar datos manualmente
              se benefician especialmente de un proyecto de integración.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              ¿La integración de sistemas afecta la operación diaria?
            </h3>
            <p className="mt-2">
              Planificamos los proyectos para minimizar el impacto en la
              operación, realizando pruebas previas y coordinando con los equipos
              responsables para asegurar una transición ordenada.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection
        id="cta"
        eyebrow="Siguiente paso"
        title="Conecte los sistemas empresariales de su organización en Perú"
        tone="default"
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm sm:p-8 lg:p-10">
          <p>
            Si su organización en Perú utiliza varios sistemas que no se
            comunican entre sí y esto genera trabajo duplicado o información
            inconsistente, un proyecto de integración puede marcar una gran
            diferencia.
          </p>
          <p className="mt-3">
            En Innovad lo ayudamos a evaluar el estado actual de sus sistemas
            empresariales, definir una estrategia de integración y ejecutar las
            acciones necesarias para que la información fluya de manera segura y
            controlada.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contactenos"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.4)] transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
            >
              Contactar a Innovad
            </Link>
            <Link
              href="/sistemas-empresariales-peru"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-white"
            >
              Ver soluciones de sistemas empresariales
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

