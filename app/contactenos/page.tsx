import type { Metadata } from "next";
import Link from "next/link";
import { getWhatsAppUrl } from "../../lib/site";

export const metadata: Metadata = {
  title:
    "Contáctenos | Innovad Perú - Soluciones tecnológicas para empresas e instituciones",
  description:
    "Contacte a Innovad en Perú para una evaluación tecnológica, automatización de procesos, desarrollo de software a medida y sistemas empresariales para su organización.",
};

export default function ContactenosPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col gap-10 px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      {/* Hero interno */}
      <header className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-10 text-white shadow-xl sm:px-10 sm:py-12">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
            Contacto
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Contáctenos
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            Si su organización necesita optimizar procesos o implementar
            soluciones tecnológicas, nuestro equipo está listo para ayudar.
            Contáctenos para una evaluación tecnológica.
          </p>
        </div>
      </header>

      {/* Bloque de contacto */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
          Formas de contacto
        </h2>
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              Correo
            </h3>
            <a
              href="mailto:contacto@innovad.pe"
              className="mt-1 block text-sm font-medium text-slate-900 hover:underline"
            >
              contacto@innovad.pe
            </a>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              WhatsApp empresarial
            </h3>
            <a
              href={getWhatsAppUrl()}
              className="mt-1 block text-sm font-medium text-slate-900 hover:underline"
            >
              980378479
            </a>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              Sitio web
            </h3>
            <a
              href="https://www.innovad.pe"
              className="mt-1 block text-sm font-medium text-slate-900 hover:underline"
            >
              www.innovad.pe
            </a>
          </div>
        </div>

        <div className="mt-8">
          <a
            href={getWhatsAppUrl()}
            className="inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_45px_rgba(56,189,248,0.45)] transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400 sm:w-auto"
          >
            Hablar por WhatsApp
          </a>
        </div>

        <p className="mt-8 text-sm font-medium text-slate-800">
          La tecnología no debe complicar los procesos. Debe hacerlos más
          rápidos, simples y eficientes.
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">
          INNOVAD — Soluciones tecnológicas para organizaciones que buscan
          avanzar.
        </p>
      </section>

      {/* Mensaje de confianza */}
      <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-6 text-center">
        <p className="text-sm text-slate-700">
          Respondemos consultas con prontitud. Si prefiere, escríbanos por
          WhatsApp para una respuesta más rápida.
        </p>
        <Link
          href="/servicios"
          className="mt-4 inline-block text-sm font-medium text-sky-700 underline-offset-4 hover:underline"
        >
          Ver nuestros servicios
        </Link>
      </div>
    </div>
  );
}
