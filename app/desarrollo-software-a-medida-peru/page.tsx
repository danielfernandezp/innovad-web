import type { Metadata } from "next";
import Link from "next/link";
import { PageSection } from "../../components/PageSection";

export const metadata: Metadata = {
  title:
    "Desarrollo de software a medida en Perú | Innovad - Sistemas para empresas",
  description:
    "Desarrollamos software a medida en Perú para empresas e instituciones. Sistemas empresariales adaptados a los procesos de negocio, con foco en eficiencia y control de la información.",
};

export default function DesarrolloSoftwareMedidaPeruPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <header className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-10 text-white shadow-xl sm:px-10 sm:py-12">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
            Desarrollo de software a medida en Perú
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Desarrollo de software a medida para empresas en Perú
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            En Innovad diseñamos y desarrollamos software a medida en Perú,
            alineado a los procesos reales de negocio de empresas e
            instituciones, priorizando simplicidad, rendimiento y facilidad de
            uso para los equipos.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contactenos"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
            >
              Solicitar propuesta de software
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
        title="Beneficios del desarrollo de software a medida para empresas peruanas"
        tone="muted"
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <p className="mb-4 text-sm text-slate-700">
            El desarrollo de software a medida permite que los sistemas se
            adapten a los procesos reales de su organización, y no al revés.
            Esto es especialmente importante para empresas en Perú que requieren
            flujos específicos, controles internos y reportes ajustados a su
            realidad operativa.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Alineado a sus procesos
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                El sistema se diseña en función de cómo realmente trabaja su
                organización, evitando ajustes forzados a herramientas genéricas
                que no se adaptan a sus necesidades.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Mayor control sobre la información
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Al construir una solución propia, es posible definir qué
                información se registra, cómo se valida y qué reportes se
                requieren para la toma de decisiones.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Escalabilidad y evolución
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Las soluciones a medida pueden evolucionar a lo largo del
                tiempo, incorporando nuevas funcionalidades y adaptándose a
                cambios en la organización o en la normativa.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection
        id="proceso"
        eyebrow="Proceso"
        title="Nuestro proceso de desarrollo de software a medida en Perú"
        tone="default"
      >
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm sm:p-8 lg:p-10">
          <p>
            Trabajamos con un enfoque estructurado que combina análisis de
            procesos, diseño funcional y desarrollo iterativo. El objetivo es
            construir sistemas que realmente se utilicen y que aporten valor
            tangible a la organización.
          </p>
          <h2 className="text-base font-semibold text-slate-900">
            1. Levantamiento y diagnóstico
          </h2>
          <p>
            Analizamos los procesos actuales, las herramientas utilizadas y las
            principales dificultades que enfrentan los equipos. A partir de
            entrevistas y revisión de documentación, definimos el alcance y los
            objetivos del software.
          </p>
          <h2 className="text-base font-semibold text-slate-900">
            2. Diseño funcional y de experiencia de uso
          </h2>
          <p>
            Definimos la estructura del sistema, los módulos, pantallas
            principales y flujos de interacción. Este diseño se valida con los
            responsables del proceso antes de avanzar al desarrollo.
          </p>
          <h2 className="text-base font-semibold text-slate-900">
            3. Desarrollo, pruebas y ajustes
          </h2>
          <p>
            Construimos el software a medida en etapas, realizando pruebas
            continuas y ajustes sobre la base del uso real. Este enfoque reduce
            riesgos y permite incorporar mejoras durante el proyecto.
          </p>
          <h2 className="text-base font-semibold text-slate-900">
            4. Puesta en producción y acompañamiento
          </h2>
          <p>
            Acompañamos a su organización en la puesta en marcha del sistema,
            capacitación de usuarios y revisión del comportamiento en los
            primeros meses, para asegurar una adopción efectiva.
          </p>
        </div>
      </PageSection>

      <PageSection
        id="faq"
        eyebrow="Preguntas frecuentes"
        title="Preguntas frecuentes sobre desarrollo de software a medida en Perú"
        tone="muted"
      >
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm sm:p-8 lg:p-10">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              ¿En qué se diferencia el software a medida de una solución estándar?
            </h3>
            <p className="mt-2">
              El software a medida se construye específicamente para su
              organización, considerando sus procesos, reglas de negocio y
              necesidades de información. A diferencia de las soluciones
              estándar, no obliga a adaptar sus procesos a una herramienta
              genérica.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              ¿El desarrollo a medida es solo para grandes empresas?
            </h3>
            <p className="mt-2">
              No necesariamente. Existen proyectos de distinta escala que pueden
              adaptarse a organizaciones medianas o pequeñas que requieran
              resolver problemas específicos de gestión, control o
              automatización.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              ¿Pueden integrarse los nuevos sistemas con herramientas existentes?
            </h3>
            <p className="mt-2">
              Sí. Diseñamos el software a medida considerando la integración con
              sistemas empresariales existentes, bases de datos y aplicaciones
              que ya utiliza su organización.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection
        id="cta"
        eyebrow="Siguiente paso"
        title="Conversemos sobre el software que su empresa en Perú necesita"
        tone="default"
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm sm:p-8 lg:p-10">
          <p>
            Si su empresa en Perú requiere un sistema a medida que se adapte a
            sus procesos y no encuentra una solución estándar que encaje, podemos
            ayudarlo a definir y desarrollar el software adecuado.
          </p>
          <p className="mt-3">
            En Innovad combinamos experiencia en desarrollo de sistemas
            empresariales con un enfoque práctico sobre los procesos de negocio,
            para construir soluciones que realmente se utilicen en el día a día.
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

