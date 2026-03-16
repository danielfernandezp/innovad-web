import Link from "next/link";
import { PageSection } from "../components/PageSection";
import { SiteSearch } from "../components/SiteSearch";
import { FaqAccordion } from "../components/FaqAccordion";
import { FaqSchema } from "../components/FaqSchema";
import { getWhatsAppUrl } from "../lib/site";
import { FAQ_ITEMS } from "../lib/faq";

export default function Home() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-4 pb-20 pt-10 sm:px-6 sm:pt-16 lg:px-8">
      <FaqSchema items={FAQ_ITEMS} />
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(circle_at_top,_#1e293b_0,_#020617_38%,_transparent_70%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-40 -z-10 h-72 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25)_0,_transparent_60%)]" />

      {/* Hero */}
      <section className="scroll-mt-24 overflow-hidden rounded-3xl border border-slate-800/40 bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 px-6 py-10 text-white shadow-[0_40px_120px_rgba(15,23,42,0.6)] sm:px-10 sm:py-14">
        <div className="relative z-10 grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-[11px] font-medium tracking-[0.22em] text-sky-300">
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-sky-400" />
              <span>Soluciones tecnológicas</span>
            </div>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.25em] text-slate-400">
              Soluciones tecnológicas en Perú
            </p>
            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Desarrollo de software, páginas web, chatbots y automatización para empresas en Perú
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
              INNOVAD es una empresa de tecnología en Perú especializada en desarrollo de software a medida,
              sistemas web, páginas web profesionales, automatización de procesos y chatbots para entidades
              públicas y empresas privadas.
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-200 sm:text-base">
              Acompañamos a organizaciones peruanas del sector público y privado con soluciones digitales
              diseñadas a la medida, y canales de contacto directos por WhatsApp y correo para iniciar su
              próximo proyecto tecnológico.
            </p>
            <div className="mt-8 flex flex-col gap-4 text-sm sm:flex-row">
              <Link
                href="/contactenos"
                className="inline-flex items-center justify-center rounded-full bg-sky-400 px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(56,189,248,0.35)] transition duration-300 hover:-translate-y-0.5 hover:bg-sky-300 hover:shadow-[0_24px_70px_rgba(56,189,248,0.5)]"
              >
                Solicitar diagnóstico tecnológico
              </Link>
              <Link
                href="/contactenos"
                className="inline-flex items-center justify-center rounded-full border border-sky-300/70 bg-slate-950/20 px-7 py-3 text-sm font-semibold text-sky-100 shadow-[0_10px_35px_rgba(15,23,42,0.9)] transition duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-slate-950/60"
              >
                Cotizar proyecto
              </Link>
            </div>
          </div>
          <div className="relative mt-4 md:mt-0">
            <div className="pointer-events-none absolute -right-10 -top-8 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
            <div className="pointer-events-none absolute -left-8 bottom-0 h-28 w-28 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-950/90 p-5 shadow-[0_24px_70px_rgba(15,23,42,0.9)]">
              <div className="flex items-center justify-between text-xs text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Panel de eficiencia
                </span>
                <span className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] text-slate-400">
                  Procesos optimizados
                </span>
              </div>
              <div className="mt-5 space-y-3 text-xs text-slate-200">
                <div className="flex items-center justify-between rounded-xl bg-slate-900/60 px-3 py-2">
                  <span className="text-slate-300">Tiempos operativos</span>
                  <span className="inline-flex items-center gap-1 text-emerald-400">
                    ↓ 45%
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-slate-900/40 px-3 py-2">
                  <span className="text-slate-300">Procesos automatizados</span>
                  <span className="inline-flex items-center gap-1 text-sky-300">
                    ↑ 60%
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-slate-900/40 px-3 py-2">
                  <span className="text-slate-300">Uso de información</span>
                  <span className="inline-flex items-center gap-1 text-sky-200">
                    ↑ 70%
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-200" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteSearch />

      {/* Mensaje de valor */}
      <PageSection
        id="valor"
        eyebrow="Propuesta de valor"
        title="Tecnología que simplifica la operación de su organización"
        tone="muted"
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <p className="mb-6">
            Las organizaciones en Perú necesitan tecnología que simplifique su operación,
            no que la complique. INNOVAD desarrolla soluciones de software y sistemas web
            a medida que permiten:
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-xl">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-500/10 text-sky-600">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7">
                  <path
                    d="M5 17h14M5 12h9M5 7h6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate-700">
                Reducir tiempos operativos con software a medida
              </p>
            </div>
            <div className="group flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-xl">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-500/10 text-sky-600">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7">
                  <path
                    d="M5 4v5h5M19 20v-5h-5M5 9a7 7 0 0 1 7-7M19 15a7 7 0 0 1-7 7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate-700">
                Automatizar procesos internos en su organización
              </p>
            </div>
            <div className="group flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-xl">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-500/10 text-sky-600">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7">
                  <path
                    d="M5 12h4l2-3 2 6 2-3h4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate-700">
                Mejorar la toma de decisiones con información confiable
              </p>
            </div>
            <div className="group flex flex-col gap-3 rounded-2xl border border-slate-100 bg-slate-50/60 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-xl">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sky-500/10 text-sky-600">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7">
                  <path
                    d="M5 5h14v4H5zM5 11h9v4H5zM5 17h6v2H5z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate-700">
                Optimizar el uso de la información en tiempo real
              </p>
            </div>
          </div>
          <p className="mt-6 font-medium text-slate-800">
            Nuestro objetivo es transformar procesos complejos en sistemas simples, rápidos y eficientes
            para empresas e instituciones en Perú.
          </p>
        </div>
      </PageSection>

      {/* Servicios */}
      <PageSection
        id="servicios"
        eyebrow="Servicios"
        title="Soluciones tecnológicas para cada etapa de sus procesos"
        tone="gradient"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl">
            <div>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    d="M5 19h14M6 16l2-9h8l2 9"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-900">
                Desarrollo de Sistemas Web a Medida en Perú
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Diseño y desarrollo de plataformas y sistemas web adaptados a las necesidades
                de cada organización en Perú.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-slate-600">
                <li>Sistemas de gestión para empresas e instituciones</li>
                <li>Plataformas administrativas y de trámites</li>
                <li>Aplicaciones institucionales para sector público y privado</li>
                <li>Soluciones web escalables para organizaciones peruanas</li>
              </ul>
            </div>
          </div>

          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl">
            <div>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    d="M5 5h14v4H5zM5 11h10v4H5zM5 17h7v2H5z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-900">
                Desarrollo de Páginas Web Profesionales en Perú
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Diseñamos y desarrollamos páginas web modernas, rápidas y optimizadas
                para posicionamiento en Google orientadas al mercado peruano.
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-4 text-sm text-slate-600">
                <li>Páginas web corporativas para empresas en Perú</li>
                <li>Landing pages de venta y generación de leads</li>
                <li>Sitios optimizados para SEO local en Perú</li>
                <li>Diseño responsive para móviles</li>
              </ul>
            </div>
          </div>

          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl">
            <div>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    d="M5 5h6v6H5zM13 5h6v4h-6zM13 11h6v8h-6zM5 13h6v6H5z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-900">
                Optimización y Automatización de Procesos
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Transformamos procesos manuales o ineficientes en flujos
                digitales automatizados que mejoran la productividad.
              </p>
            </div>
          </div>

          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl">
            <div>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    d="M5 5h14v6H5zM5 13h14v6H5z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-900">
                Gestión y optimización de datos
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Diseño, modelamiento y optimización de bases de información para
                mejorar el rendimiento y la estabilidad de los sistemas.
              </p>
            </div>
          </div>

          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl">
            <div>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    d="M6 18h12M7 15l2-9h6l2 9"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-900">
                Integración y modernización de sistemas
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Actualización y modernización de sistemas existentes para mejorar
                seguridad, rendimiento y escalabilidad.
              </p>
            </div>
          </div>

          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl">
            <div>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    d="M5 8h4l2-3 2 6 2-3h4M5 18h14"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-900">
                Implementación de Chatbots y Automatización Inteligente
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Desarrollo de asistentes virtuales para mejorar la atención a
                usuarios y automatizar consultas frecuentes dentro de
                organizaciones.
              </p>
            </div>
          </div>

          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-sm backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl">
            <div>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                  <path
                    d="M12 14l9-5-9-5-9 5 9 5z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.825-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-900">
                Aulas virtuales y plataformas educativas
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Diseño e implementación de plataformas educativas digitales para
                gestionar cursos, contenidos, evaluaciones y seguimiento del
                aprendizaje en entornos institucionales o corporativos.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <Link
            href="/servicios"
            className="text-sm font-medium text-sky-700 underline-offset-4 hover:underline"
          >
            Ver todos los servicios en detalle
          </Link>
        </div>
      </PageSection>

      {/* Beneficios para el cliente */}
      <PageSection
        id="beneficios"
        eyebrow="Beneficios"
        title="¿Por qué trabajar con INNOVAD?"
        tone="default"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="group flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
              <span className="text-lg">✔</span>
            </div>
            <p className="text-sm font-medium text-slate-900">
              Soluciones simples y rápidas
            </p>
          </div>
          <div className="group flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
              <span className="text-lg">✔</span>
            </div>
            <p className="text-sm font-medium text-slate-900">
              Optimización real de procesos
            </p>
          </div>
          <div className="group flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
              <span className="text-lg">✔</span>
            </div>
            <p className="text-sm font-medium text-slate-900">
              Experiencia en proyectos institucionales
            </p>
          </div>
          <div className="group flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
              <span className="text-lg">✔</span>
            </div>
            <p className="text-sm font-medium text-slate-900">
              Acompañamiento técnico
            </p>
          </div>
        </div>
      </PageSection>

      {/* Problemas que resolvemos */}
      <PageSection
        id="problemas"
        eyebrow="Desafíos"
        title="¿Su organización enfrenta estos problemas?"
        tone="muted"
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
              <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7">
                  <path
                    d="M12 3L3 21h18L12 3z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate-700">Procesos manuales</p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
              <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7">
                  <path
                    d="M4 12h9m-6 4h9M7 8h9"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate-700">Sistemas lentos</p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
              <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7">
                  <path
                    d="M5 5h14v4H5zM5 11h7v4H5zM5 17h10v2H5z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate-700">Bases de datos desordenadas</p>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4">
              <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-7 w-7">
                  <path
                    d="M5 12h6l2-3 2 6 2-3h2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
              <p className="text-sm text-slate-700">
                Falta de información para tomar decisiones
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm font-semibold text-slate-900">
            Nosotros lo resolvemos.
          </p>
        </div>
      </PageSection>

      {/* Experiencia */}
      <PageSection
        id="experiencia"
        eyebrow="Experiencia"
        title="Experiencia en proyectos tecnológicos para el sector público y privado"
      >
        <p className="mb-4">
          INNOVAD cuenta con experiencia en proyectos tecnológicos dentro de
          instituciones públicas y organizaciones privadas, con énfasis en:
        </p>
        <ul className="mb-4 grid gap-3 sm:grid-cols-2">
          <li className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-600">
              ✓
            </span>
            <span>Desarrollo de sistemas web</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-600">
              ✓
            </span>
            <span>Análisis y diseño de sistemas</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-600">
              ✓
            </span>
            <span>Optimización de bases de información</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-600">
              ✓
            </span>
            <span>Transformación digital de procesos</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-700">
            <span className="mt-0.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-600">
              ✓
            </span>
            <span>Soporte tecnológico especializado</span>
          </li>
        </ul>
        <p className="mb-3 text-sm font-semibold text-slate-700">
          Sectores donde tenemos experiencia:
        </p>
        <ul className="mb-4 grid gap-2 sm:grid-cols-2">
          <li className="flex items-center gap-2 text-sm text-slate-700">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-600">✓</span>
            <span>Sector público</span>
          </li>
          <li className="flex items-center gap-2 text-sm text-slate-700">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-600">✓</span>
            <span>Universidades</span>
          </li>
          <li className="flex items-center gap-2 text-sm text-slate-700">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-600">✓</span>
            <span>Empresas privadas</span>
          </li>
          <li className="flex items-center gap-2 text-sm text-slate-700">
            <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/10 text-[10px] text-emerald-600">✓</span>
            <span>Organizaciones en transformación digital</span>
          </li>
        </ul>
        <Link
          href="/experiencia"
          className="text-sm font-medium text-sky-700 underline-offset-4 hover:underline"
        >
          Conocer más sobre la experiencia de INNOVAD
        </Link>
      </PageSection>

      {/* Metodología */}
      <PageSection
        id="metodologia"
        eyebrow="Metodología"
        title="Metodología de trabajo de INNOVAD"
        tone="muted"
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <p className="mb-4">
            INNOVAD aplica un enfoque estructurado que permite entregar soluciones
            tecnológicas eficientes y alineadas a los objetivos de cada
            organización.
          </p>
          <ol className="relative mt-6 grid gap-4 md:grid-cols-4">
            <span className="pointer-events-none absolute left-[11px] top-2 hidden h-[calc(100%-1rem)] w-px bg-gradient-to-b from-sky-400 via-sky-300/40 to-transparent md:left-1/2 md:block" />
            <li className="relative flex flex-col gap-2 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl md:text-center">
              <div className="mb-1 flex items-center gap-3 md:flex-col md:items-center">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sm font-semibold text-sky-600 ring-1 ring-sky-500/30">
                  1
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                  Paso 1
                </p>
              </div>
              <p className="text-sm font-semibold text-slate-900">
                Diagnóstico del proceso
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Análisis del problema y levantamiento de requerimientos.
              </p>
            </li>
            <li className="relative flex flex-col gap-2 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl md:text-center">
              <div className="mb-1 flex items-center gap-3 md:flex-col md:items-center">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sm font-semibold text-sky-600 ring-1 ring-sky-500/30">
                  2
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                  Paso 2
                </p>
              </div>
              <p className="text-sm font-semibold text-slate-900">
                Diseño de solución
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Arquitectura tecnológica y definición de funcionalidades.
              </p>
            </li>
            <li className="relative flex flex-col gap-2 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl md:text-center">
              <div className="mb-1 flex items-center gap-3 md:flex-col md:items-center">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sm font-semibold text-sky-600 ring-1 ring-sky-500/30">
                  3
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                  Paso 3
                </p>
              </div>
              <p className="text-sm font-semibold text-slate-900">
                Desarrollo e implementación
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Construcción del sistema con pruebas continuas.
              </p>
            </li>
            <li className="relative flex flex-col gap-2 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl md:text-center">
              <div className="mb-1 flex items-center gap-3 md:flex-col md:items-center">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-sky-500/10 text-sm font-semibold text-sky-600 ring-1 ring-sky-500/30">
                  4
                </span>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                  Paso 4
                </p>
              </div>
              <p className="text-sm font-semibold text-slate-900">
                Puesta en producción
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Implementación final y acompañamiento técnico.
              </p>
            </li>
          </ol>
        </div>
      </PageSection>

      {/* Misión, visión y valores */}
      <PageSection
        id="mision-vision-valores"
        eyebrow="Propósito"
        title="Misión, visión y valores de INNOVAD"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Misión</h3>
              <p className="mt-2 text-sm text-slate-600">
                Desarrollar soluciones tecnológicas innovadoras que permitan a
                las organizaciones optimizar sus procesos, mejorar su eficiencia
                operativa y tomar decisiones basadas en información confiable.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">Visión</h3>
              <p className="mt-2 text-sm text-slate-600">
                Ser una empresa referente en desarrollo de soluciones
                tecnológicas y optimización de procesos en Latinoamérica,
                reconocida por su innovación, eficiencia y compromiso con los
                resultados de nuestros clientes.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Valores</h3>
            <ul className="mt-3 space-y-3 text-sm text-slate-600">
              <li>
                <span className="font-semibold text-slate-900">
                  Innovación.{" "}
                </span>
                Buscamos constantemente nuevas formas de mejorar los procesos
                mediante tecnología.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Eficiencia.{" "}
                </span>
                Diseñamos soluciones simples que generen resultados rápidos y
                medibles.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Compromiso.{" "}
                </span>
                Trabajamos enfocados en los objetivos reales de nuestros
                clientes.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Perseverancia.{" "}
                </span>
                Enfrentamos los desafíos tecnológicos con determinación y
                disciplina.
              </li>
              <li>
                <span className="font-semibold text-slate-900">
                  Integridad.{" "}
                </span>
                Actuamos con transparencia, responsabilidad y ética profesional.
              </li>
            </ul>
          </div>
        </div>
      </PageSection>

      {/* Dirección */}
      <PageSection
        id="direccion"
        eyebrow="Dirección"
        title="Dirección General"
        tone="default"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-lg font-semibold text-slate-900">
            Ing. Daniel Alberto Fernández Pajuelo
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Ingeniero de Sistemas
          </p>
          <p className="mt-0.5 text-sm text-slate-600">
            MBA en Administración de Negocios
          </p>
        </div>
      </PageSection>

      {/* Indicadores de impacto */}
      <PageSection
        id="indicadores"
        eyebrow="Impacto"
        title="Indicadores de impacto"
        tone="gradient"
      >
        <div className="grid gap-5 md:grid-cols-3">
          <div className="group flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-5 text-sm shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                <path
                  d="M5 19h14M7 16V5h3v11m4 0v-7h3v7"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
            <p className="text-2xl font-semibold text-slate-900">
              +13{" "}
              <span className="align-middle text-xs font-normal text-slate-500">
                años
              </span>
            </p>
            <p className="text-slate-600">+13 años de experiencia en tecnología</p>
          </div>
          <div className="group flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-5 text-sm shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                <path
                  d="M5 6h6v5H5zM13 6h6v5h-6zM5 13h6v5H5zM13 13h6v5h-6z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
            <p className="text-lg font-semibold text-slate-900">
              Proyectos en sector público y privado
            </p>
            <p className="text-slate-600">
              Proyectos en sector público y privado
            </p>
          </div>
          <div className="group flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-5 text-sm shadow-sm transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl">
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 text-sky-600">
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
                <path
                  d="M5 19h14M7 16V8l5-3 5 3v8"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </div>
            <p className="text-lg font-semibold text-slate-900">
              Especialización en optimización de procesos
            </p>
            <p className="text-slate-600">
              Especialización en optimización de procesos
            </p>
          </div>
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection
        id="faq"
        eyebrow="Preguntas frecuentes"
        title="Preguntas frecuentes"
        tone="default"
      >
        <FaqAccordion items={FAQ_ITEMS} />
      </PageSection>

      {/* Contacto CTA */}
      <PageSection
        id="contacto"
        eyebrow="Contacto"
        title="Conversemos sobre las necesidades tecnológicas de su organización"
        tone="muted"
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <p className="mb-4">
            Si su organización necesita optimizar procesos o implementar
            soluciones tecnológicas, nuestro equipo está listo para ayudar.
            Contáctenos para una evaluación tecnológica.
          </p>
          <div className="mb-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                Correo
              </p>
              <a
                href="mailto:contacto@innovad.pe"
                className="mt-1 block text-sm font-medium text-slate-900 hover:underline"
              >
                contacto@innovad.pe
              </a>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
                WhatsApp empresarial
              </p>
              <a
                href={getWhatsAppUrl()}
                className="mt-1 block text-sm font-medium text-slate-900 hover:underline"
              >
                980378479
              </a>
            </div>
          </div>
          <div className="mb-6">
            <a
              href={getWhatsAppUrl()}
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(56,189,248,0.45)] transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
            >
              Hablar por WhatsApp
            </a>
          </div>
          <p className="mb-4 text-sm font-medium text-slate-800">
            La tecnología no debe complicar los procesos. Debe hacerlos más
            rápidos, simples y eficientes.
          </p>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
            INNOVAD — Soluciones tecnológicas para organizaciones que buscan
            avanzar.
          </p>
          <p className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate-600">
            <Link href="/servicios" className="font-medium text-sky-700 underline-offset-4 hover:underline">
              Ver servicios
            </Link>
            <Link href="/experiencia" className="font-medium text-sky-700 underline-offset-4 hover:underline">
              Ver experiencia
            </Link>
          </p>
        </div>
      </PageSection>
    </div>
  );
}

