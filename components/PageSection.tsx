import { ReactNode } from "react";

type PageSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  tone?: "default" | "muted" | "gradient";
};

export function PageSection({
  id,
  eyebrow,
  title,
  children,
  tone = "default",
}: PageSectionProps) {
  const toneClasses =
    tone === "muted"
      ? "bg-slate-50 border-t border-slate-100"
      : tone === "gradient"
      ? "bg-gradient-to-b from-slate-50 via-slate-100 to-slate-50 border-t border-slate-100"
      : "bg-white border-t border-slate-100";

  return (
    <section
      id={id}
      className={`scroll-mt-24 py-12 first:border-t-0 sm:py-16 ${toneClasses}`}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div>
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
              {eyebrow}
            </p>
          )}
          <h2 className="mt-2 text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {title}
          </h2>
        </div>
        <div className="text-sm leading-relaxed text-slate-600 sm:text-base">
          {children}
        </div>
      </div>
    </section>
  );
}

