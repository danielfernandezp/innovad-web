import Link from "next/link";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/experiencia", label: "Experiencia" },
  { href: "/contactenos", label: "Contáctenos" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-sm font-semibold text-white">
            IN
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-[0.18em] text-slate-900">
              INNOVAD
            </span>
            <span className="text-xs text-slate-500">
              Soluciones tecnológicas
            </span>
          </div>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

