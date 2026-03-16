import type { Metadata } from "next";
import Link from "next/link";
import { PageSection } from "../../components/PageSection";

export const metadata: Metadata = {
  title:
    "Sistemas empresariales para empresas en Perú | Innovad - Gestión y control",
  description:
    "Diseñamos y desarrollamos sistemas empresariales para empresas en Perú que necesitan mejorar su gestión, control de información y trazabilidad de procesos.",
};

export default function SistemasEmpresarialesPeruPage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-4 pb-20 pt-10 sm:px-6 sm:pt-14 lg:px-8">
      <header className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 px-6 py-10 text-white shadow-xl sm:px-10 sm:py-12">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
            Sistemas empresariales en Perú
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
            Sistemas empresariales para mejorar la gestión en empresas peruanas
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-slate-200 sm:text-base">
            En Innovad desarrollamos sistemas empresariales para empresas en
            Perú que requieren una gestión más ordenada de su información,
            procesos y reportes, con soluciones adaptadas a su realidad
            institucional.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contactenos"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
            >
              Solicitar evaluación de sistemas
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center justify-center rounded-full border border-sky-300/70 bg-slate-900/20 px-6 py-3 text-sm font-semibold text-sky-100 shadow-md transition duration-300 hover:-translate-y-0.5 hover:border-sky-200 hover:bg-slate-900/60"
            >
              Ver servicios de Innovad
            </Link>
          </div>
        </div>
      </header>

      <PageSection
        id="beneficios"
        eyebrow="Beneficios"
        title="Beneficios de contar con sistemas empresariales bien diseñados"
        tone="muted"
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
          <p className="mb-4 text-sm text-slate-700">
            Un sistema empresarial adecuado permite que las áreas de la
            organización trabajen de manera coordinada, con información
            consistente y accesible. Esto es clave para tomar decisiones,
            responder auditorías y brindar un mejor servicio a clientes y
            usuarios.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Información centralizada
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                La información relevante se concentra en un sistema confiable,
                evitando la dispersión en hojas de cálculo o herramientas no
                integradas.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Procesos más ordenados
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Los sistemas empresariales ayudan a formalizar y ordenar los
                procesos, reduciendo la dependencia de tareas informales y
                prácticas no documentadas.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <h2 className="text-sm font-semibold text-slate-900">
                Reportes para la gestión
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                Los responsables pueden acceder a reportes y paneles que
                permiten monitorear el desempeño de los procesos y tomar
                decisiones informadas.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection
        id="tipos"
        eyebrow="Tipos de sistemas"
        title="Tipos de sistemas empresariales que desarrollamos en Perú"
        tone="default"
      >
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm sm:p-8 lg:p-10">
          <p>
            Cada organización tiene necesidades distintas. Por ello, los
            sistemas empresariales que desarrollamos se diseñan en función de
            los procesos y objetivos de cada empresa o institución.
          </p>
          <h2 className="text-base font-semibold text-slate-900">
            Sistemas de gestión administrativa
          </h2>
          <p>
            Soluciones para gestionar solicitudes, expedientes, atenciones,
            documentación interna y otros procesos administrativos que requieren
            control y trazabilidad.
          </p>
          <h2 className="text-base font-semibold text-slate-900">
            Sistemas para atención al cliente y usuarios
          </h2>
          <p>
            Plataformas que permiten registrar y hacer seguimiento a casos de
            atención, reclamos, consultas o requerimientos, integradas con otros
            canales como chatbots o formularios web.
          </p>
          <h2 className="text-base font-semibold text-slate-900">
            Sistemas de apoyo a la toma de decisiones
          </h2>
          <p>
            Herramientas que consolidan información de distintos sistemas para
            presentar indicadores, reportes y paneles que facilitan la gestión
            directiva.
          </p>
        </div>
      </PageSection>

      <PageSection
        id="faq"
        eyebrow="Preguntas frecuentes"
        title="Preguntas frecuentes sobre sistemas empresariales en Perú"
        tone="muted"
      >
        <div className="space-y-4 rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm sm:p-8 lg:p-10">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              ¿Qué diferencia hay entre un sistema empresarial a medida y un ERP
              estándar?
            </h3>
            <p className="mt-2">
              Un ERP estándar ofrece módulos genéricos que cubren necesidades
              comunes. Un sistema empresarial a medida se diseña específicamente
              para su organización, enfocándose en los procesos y controles que
              realmente necesita.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              ¿Pueden integrarse los sistemas empresariales con herramientas ya
              existentes?
            </h3>
            <p className="mt-2">
              Sí. Es posible integrar los nuevos sistemas con aplicaciones,
              bases de datos o plataformas que su empresa ya utiliza, evitando
              duplicidad de información y manteniendo un ecosistema coherente.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              ¿Cómo se inicia un proyecto de sistemas empresariales?
            </h3>
            <p className="mt-2">
              El primer paso es una reunión para entender los procesos
              prioritarios, los problemas actuales y los objetivos de gestión.
              A partir de ello planteamos alternativas de solución y una hoja de
              ruta de implementación.
            </p>
          </div>
        </div>
      </PageSection>

      <PageSection
        id="cta"
        eyebrow="Siguiente paso"
        title="Evalúe los sistemas empresariales que su organización en Perú necesita"
        tone="default"
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-700 shadow-sm sm:p-8 lg:p-10">
          <p>
            Si su organización en Perú siente que sus sistemas actuales no
            acompañan los procesos de negocio o no brindan la información
            necesaria para gestionar, es un buen momento para evaluar nuevas
            soluciones empresariales.
          </p>
          <p className="mt-3">
            En Innovad podemos ayudarlo a revisar el estado actual de sus
            sistemas, proponer mejoras y diseñar nuevas herramientas que se
            adapten a su realidad operativa.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contactenos"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.4)] transition duration-300 hover:-translate-y-0.5 hover:bg-sky-400"
            >
              Contactar a Innovad
            </Link>
            <Link
              href="/desarrollo-software-a-medida-peru"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-white"
            >
              Ver desarrollo de software a medida
            </Link>
            <Link
              href="/integracion-sistemas-empresariales"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-white"
            >
              Ver integración de sistemas
            </Link>
          </div>
        </div>
      </PageSection>
    </div>
  );
}

