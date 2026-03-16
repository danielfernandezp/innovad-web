import type { Metadata } from "next";
import Link from "next/link";
import { PageSection } from "../../components/PageSection";

export const metadata: Metadata = {
  title:
    "Servicios tecnológicos para empresas en Perú | Desarrollo web, automatización y software a medida",
  description:
    "Servicios de Innovad para empresas en Perú: desarrollo de sistemas web a medida, automatización de procesos empresariales, administración de bases de datos, modernización de sistemas y chatbots para organizaciones.",
};

export default function ServiciosPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      {/* Hero interno */}
      <header className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-10 text-white shadow-xl sm:px-10 sm:py-12">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
            Servicios
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Servicios tecnológicos para empresas e instituciones en Perú
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Innovad es una empresa de soluciones tecnológicas en Perú enfocada
            en desarrollo de software a medida, automatización de procesos
            empresariales y modernización de sistemas. Combinamos análisis de
            procesos, ingeniería de sistemas y tecnología para crear soluciones
            que generan valor real en las organizaciones del sector público y
            privado.
          </p>
          <Link
            href="/contactenos"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
          >
            Solicitar diagnóstico tecnológico
          </Link>
        </div>
      </header>

      <PageSection
        id="desarrollo-web"
        eyebrow="Servicio"
        title="Desarrollo de Sistemas Web a Medida"
        tone="muted"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:shadow-md sm:p-6">
          <p className="mb-3 text-slate-600">
            Diseñamos y desarrollamos plataformas y sistemas web adaptados a las
            necesidades específicas de empresas e instituciones en Perú.
          </p>
          <ul className="space-y-2">
            <li className="flex items-start gap-2 text-sm text-slate-700">
              <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-600">
                ✓
              </span>
              <span>Sistemas de gestión</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-slate-700">
              <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-600">
                ✓
              </span>
              <span>Plataformas administrativas</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-slate-700">
              <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-600">
                ✓
              </span>
              <span>Aplicaciones institucionales</span>
            </li>
            <li className="flex items-start gap-2 text-sm text-slate-700">
              <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-600">
                ✓
              </span>
              <span>Soluciones web escalables</span>
            </li>
          </ul>
        </div>
      </PageSection>

      <PageSection
        id="optimizacion-procesos"
        eyebrow="Servicio"
        title="Optimización y Automatización de Procesos"
        tone="default"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:shadow-md sm:p-6">
          <p className="text-slate-600">
            Transformamos procesos manuales o ineficientes en flujos digitales
            automatizados que mejoran la productividad y reducen errores
            operativos en empresas peruanas.
          </p>
        </div>
      </PageSection>

      <PageSection
        id="bases-de-datos"
        eyebrow="Servicio"
        title="Gestión y optimización de datos"
        tone="muted"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:shadow-md sm:p-6">
          <p className="text-slate-600">
            Contamos con experiencia en diseño, modelamiento y optimización de
            bases de información para mejorar el rendimiento y la estabilidad de
            los sistemas empresariales. Enfocamos la solución en las necesidades
            de negocio, no en tecnologías concretas.
          </p>
        </div>
      </PageSection>

      <PageSection
        id="modernizacion"
        eyebrow="Servicio"
        title="Integración y modernización de sistemas"
        tone="default"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:shadow-md sm:p-6">
          <p className="text-slate-600">
            Actualizamos y modernizamos sistemas existentes con el objetivo de
            mejorar la seguridad, el rendimiento y la escalabilidad de las
            soluciones tecnológicas.
          </p>
        </div>
      </PageSection>

      <PageSection
        id="chatbots"
        eyebrow="Servicio"
        title="Implementación de Chatbots y Automatización Inteligente"
        tone="muted"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:shadow-md sm:p-6">
          <p className="text-slate-600">
            Desarrollamos asistentes virtuales para mejorar la atención a
            usuarios, gestionar consultas frecuentes y automatizar tareas de
            soporte dentro de organizaciones.
          </p>
        </div>
      </PageSection>

      <PageSection
        id="aulas-virtuales"
        eyebrow="Servicio"
        title="Aulas virtuales y plataformas educativas"
        tone="default"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:shadow-md sm:p-6">
          <p className="text-slate-600">
            Diseño e implementación de plataformas educativas digitales que
            permiten gestionar cursos, contenidos, evaluaciones y seguimiento del
            aprendizaje en entornos institucionales o corporativos.
          </p>
        </div>
      </PageSection>

      {/* CTA final */}
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 px-6 py-10 text-center shadow-sm sm:px-10 sm:py-12">
        <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          ¿Necesita un diagnóstico tecnológico?
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600">
          Podemos analizar su situación y proponer una solución simple y
          eficiente para su organización.
        </p>
        <Link
          href="/contactenos"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
        >
          Solicitar diagnóstico tecnológico
        </Link>
      </section>
    </div>
  );
}
