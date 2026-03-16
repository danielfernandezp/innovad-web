import Link from "next/link";
import { SITE_URL } from "../lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.5)]">
            IN
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-[0.18em] text-slate-100">
              INNOVAD
            </span>
            <span className="text-[11px] text-slate-400">
              Soluciones tecnológicas para organizaciones que buscan avanzar.
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/servicios"
            className="text-[11px] text-slate-400 transition duration-300 hover:text-slate-100 hover:underline"
          >
            Servicios
          </Link>
          <Link
            href="/experiencia"
            className="text-[11px] text-slate-400 transition duration-300 hover:text-slate-100 hover:underline"
          >
            Experiencia
          </Link>
          <Link
            href="/contactenos"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-3 py-1.5 text-[11px] font-semibold text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.5)] transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
          >
            Contacto
          </Link>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500">
          <Link
            href={SITE_URL}
            className="transition duration-300 hover:text-slate-100 hover:underline"
          >
            www.innovad.pe
          </Link>
          <span className="hidden h-1 w-1 rounded-full bg-slate-700 sm:inline-block" />
          <p>© {new Date().getFullYear()} INNOVAD. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

