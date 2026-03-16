"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/experiencia", label: "Experiencia" },
  { href: "/contactenos", label: "Contáctenos" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-slate-900/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-full px-2 py-1 transition duration-300 hover:bg-slate-900/60"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.5)]">
            IN
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-[0.18em] text-slate-100">
              INNOVAD
            </span>
            <span className="text-xs text-slate-400">
              Soluciones tecnológicas
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1.5 text-slate-300 transition duration-300 hover:bg-slate-800/80 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contactenos"
            className="inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-[0_14px_40px_rgba(56,189,248,0.5)] transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
          >
            Cotizar
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-100 ring-1 ring-slate-700 hover:bg-slate-900 md:hidden"
          aria-label="Abrir menú de navegación"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">Abrir menú</span>
          <div className="flex h-4 w-4 flex-col justify-between">
            <span
              className={`h-[2px] w-full rounded-full bg-slate-100 transition-transform duration-300 ${
                open ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[2px] w-full rounded-full bg-slate-100 transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-[2px] w-full rounded-full bg-slate-100 transition-transform duration-300 ${
                open ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-slate-800/60 bg-slate-950 md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 text-sm font-medium text-slate-200 sm:px-6 lg:px-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 transition duration-300 hover:bg-slate-800"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contactenos"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-[0_14px_40px_rgba(56,189,248,0.5)] transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
              onClick={() => setOpen(false)}
            >
              Cotizar
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

