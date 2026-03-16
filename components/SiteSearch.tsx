"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { searchSite, type SearchEntry } from "../lib/search-index";

function SearchResultRow({
  entry,
  onSelect,
}: {
  entry: SearchEntry;
  onSelect: () => void;
}) {
  const pathname = usePathname();
  const isCurrentPage = pathname === entry.path;
  const href = entry.sectionId
    ? `${entry.path}#${entry.sectionId}`
    : entry.path;

  const content = (
    <>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-slate-100 truncate">
          {entry.title}
        </p>
        <p className="text-xs text-slate-400 mt-0.5 line-clamp-2">
          {entry.description}
        </p>
      </div>
      <span className="flex-shrink-0 text-[10px] font-medium uppercase tracking-wider text-sky-400">
        {entry.path === "/" ? "Inicio" : entry.path === "/servicios" ? "Servicios" : entry.path === "/experiencia" ? "Experiencia" : "Contacto"}
      </span>
    </>
  );

  if (isCurrentPage && entry.sectionId) {
    return (
      <button
        type="button"
        onClick={() => {
          const el = document.getElementById(entry.sectionId!);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          onSelect();
        }}
        className="w-full flex items-start gap-3 rounded-xl bg-slate-900/70 px-3 py-2.5 text-left ring-1 ring-slate-700 transition duration-200 hover:bg-slate-800 hover:ring-slate-600"
      >
        {content}
      </button>
    );
  }

  return (
    <Link
      href={href}
      onClick={onSelect}
      className="flex items-start gap-3 rounded-xl bg-slate-900/70 px-3 py-2.5 ring-1 ring-slate-700 transition duration-200 hover:bg-slate-800 hover:ring-slate-600"
    >
      {content}
    </Link>
  );
}

export function SiteSearch() {
  const [query, setQuery] = useState("");
  const pathname = usePathname();

  const results = useMemo(() => searchSite(query), [query]);

  const handleNavigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (results.length > 0) {
      const first = results[0];
      if (pathname === first.path && first.sectionId) {
        handleNavigateToSection(first.sectionId);
      } else {
        window.location.href = first.sectionId
          ? `${first.path}#${first.sectionId}`
          : first.path;
      }
    }
  };

  return (
    <section className="mt-6" aria-label="Buscador del sitio">
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-800/40 bg-slate-950/60 px-4 py-3 shadow-[0_18px_45px_rgba(15,23,42,0.8)] backdrop-blur-md sm:px-5 sm:py-4">
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-3 text-sm text-slate-200"
        >
          <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-slate-900/70 text-sky-400">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-4 w-4"
            >
              <path
                d="M11 5a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm6.5 12.5L17 17"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar servicios, procesos o soluciones…"
              className="w-full bg-transparent text-sm text-slate-50 placeholder:text-slate-500 focus:outline-none"
              aria-label="Buscar contenido en el sitio"
              autoComplete="off"
            />
          </div>
          <button
            type="submit"
            className="hidden rounded-full bg-sky-500 px-3 py-1.5 text-xs font-semibold text-slate-950 shadow-sm transition duration-200 hover:bg-sky-400 sm:inline-flex"
          >
            Buscar
          </button>
        </form>

        {query.trim().length >= 2 && (
          <div className="mt-3 space-y-1.5">
            {results.length > 0 ? (
              results.map((entry) => (
                <SearchResultRow
                  key={entry.id}
                  entry={entry}
                  onSelect={() => setQuery("")}
                />
              ))
            ) : (
              <p className="px-2 py-3 text-xs text-slate-500">
                No se encontraron resultados. Pruebe con otras palabras.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
