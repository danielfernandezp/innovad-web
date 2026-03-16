import type { Metadata } from "next";
import Link from "next/link";
import { PageSection } from "../../components/PageSection";

export const metadata: Metadata = {
  title:
    "Experiencia en proyectos tecnológicos en Perú | Innovad - Sector público y privado",
  description:
    "Experiencia de Innovad en proyectos tecnológicos en Perú para el sector público y privado: desarrollo de sistemas web, optimización de datos, automatización de procesos y soporte especializado.",
};

export default function ExperienciaPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      {/* Hero interno */}
      <header className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-10 text-white shadow-xl sm:px-10 sm:py-12">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
            Experiencia
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Experiencia en proyectos tecnológicos para el sector público y privado
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            INNOVAD cuenta con experiencia en proyectos tecnológicos dentro de
            instituciones públicas y organizaciones privadas, desarrollando
            herramientas que mejoran la eficiencia operativa y el control de la
            información.
          </p>
          <Link
            href="/contactenos"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
          >
            Contactar a INNOVAD
          </Link>
        </div>
      </header>

      <PageSection
        id="enfoque"
        eyebrow="Áreas de experiencia"
        title="Especialización en entornos institucionales"
        tone="muted"
      >
        <p className="mb-4 text-slate-600">
          La experiencia de INNOVAD incluye proyectos de tecnología relacionados
          con:
        </p>
        <ul className="grid gap-3 sm:grid-cols-2">
          <li className="flex items-start gap-2 rounded-xl border border-slate-100 bg-white p-3 text-sm text-slate-700 shadow-sm transition duration-300 hover:border-sky-200 hover:shadow-md">
            <span className="mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-600">
              ✓
            </span>
            <span>Desarrollo de sistemas web</span>
          </li>
          <li className="flex items-start gap-2 rounded-xl border border-slate-100 bg-white p-3 text-sm text-slate-700 shadow-sm transition duration-300 hover:border-sky-200 hover:shadow-md">
            <span className="mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-600">
              ✓
            </span>
            <span>Análisis y diseño de sistemas</span>
          </li>
          <li className="flex items-start gap-2 rounded-xl border border-slate-100 bg-white p-3 text-sm text-slate-700 shadow-sm transition duration-300 hover:border-sky-200 hover:shadow-md">
            <span className="mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-600">
              ✓
            </span>
            <span>Optimización de bases de información</span>
          </li>
          <li className="flex items-start gap-2 rounded-xl border border-slate-100 bg-white p-3 text-sm text-slate-700 shadow-sm transition duration-300 hover:border-sky-200 hover:shadow-md">
            <span className="mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-600">
              ✓
            </span>
            <span>Transformación digital de procesos</span>
          </li>
          <li className="flex items-start gap-2 rounded-xl border border-slate-100 bg-white p-3 text-sm text-slate-700 shadow-sm transition duration-300 hover:border-sky-200 hover:shadow-md sm:col-span-2">
            <span className="mt-0.5 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-600">
              ✓
            </span>
            <span>Soporte tecnológico especializado</span>
          </li>
        </ul>
      </PageSection>

      <PageSection
        id="sectores"
        eyebrow="Sectores"
        title="Sectores donde tenemos experiencia"
        tone="default"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-xl">
            <p className="font-semibold text-slate-900">Sector público</p>
            <p className="mt-2 text-sm text-slate-600">
              Proyectos tecnológicos en entornos institucionales.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-xl">
            <p className="font-semibold text-slate-900">Universidades</p>
            <p className="mt-2 text-sm text-slate-600">
              Soluciones para gestión académica y plataformas educativas.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-xl">
            <p className="font-semibold text-slate-900">Empresas privadas</p>
            <p className="mt-2 text-sm text-slate-600">
              Sistemas y automatización para el sector privado.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-xl">
            <p className="font-semibold text-slate-900">Organizaciones en transformación digital</p>
            <p className="mt-2 text-sm text-slate-600">
              Acompañamiento en procesos de modernización.
            </p>
          </div>
        </div>
        <p className="mt-6">
          <Link
            href="/contactenos"
            className="text-sm font-medium text-sky-700 underline-offset-4 hover:underline"
          >
            Contáctenos para conocer cómo podemos apoyar su organización
          </Link>
        </p>
      </PageSection>
    </div>
  );
}
