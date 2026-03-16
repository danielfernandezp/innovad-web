/**
 * Índice de contenido del sitio para búsqueda client-side.
 * Incluye títulos, servicios, beneficios, problemas, metodología, contacto y páginas internas.
 * Sin nombres de instituciones ni ubicaciones; términos generales para coincidencias amplias.
 */

export type SearchEntry = {
  id: string;
  title: string;
  description: string;
  path: string;
  sectionId?: string;
  searchText: string;
};

function buildSearchText(...parts: (string | undefined)[]): string {
  return parts
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

export const SEARCH_INDEX: SearchEntry[] = [
  // Home - Secciones
  {
    id: "home-problemas",
    title: "Problemas que resolvemos",
    description: "Procesos manuales, sistemas lentos, bases de datos desordenadas y más.",
    path: "/",
    sectionId: "problemas",
    searchText: buildSearchText(
      "Problemas que resolvemos",
      "procesos manuales",
      "sistemas lentos",
      "bases de datos",
      "base de datos",
      "datos desordenados",
      "información",
      "gestión de datos",
      "optimización de datos",
      "falta de información",
      "tomar decisiones",
      "Nosotros lo resolvemos"
    ),
  },
  {
    id: "home-servicios",
    title: "Servicios tecnológicos",
    description: "Desarrollo web, sistemas a medida, automatización, gestión de datos, chatbots.",
    path: "/",
    sectionId: "servicios",
    searchText: buildSearchText(
      "Servicios",
      "Desarrollo de software a medida",
      "sistemas de gestión",
      "plataformas administrativas",
      "páginas web profesionales",
      "landing pages",
      "SEO",
      "Optimización y Automatización de Procesos",
      "gestión y optimización de datos",
      "optimización de datos",
      "base de datos",
      "bases de datos",
      "datos",
      "información",
      "Integración y modernización de sistemas",
      "modernización de sistemas",
      "Chatbots",
      "automatización inteligente",
      "asistentes virtuales",
      "aulas virtuales",
      "plataformas educativas"
    ),
  },
  {
    id: "home-beneficios",
    title: "Beneficios de trabajar con INNOVAD",
    description: "Soluciones simples, optimización real, experiencia en proyectos institucionales.",
    path: "/",
    sectionId: "beneficios",
    searchText: buildSearchText(
      "Beneficios",
      "soluciones simples y rápidas",
      "optimización real de procesos",
      "experiencia en proyectos institucionales",
      "acompañamiento técnico"
    ),
  },
  {
    id: "home-experiencia",
    title: "Experiencia",
    description: "Proyectos en sector público y privado. Universidades, empresas, transformación digital.",
    path: "/",
    sectionId: "experiencia",
    searchText: buildSearchText(
      "Experiencia",
      "sector público",
      "sector privado",
      "universidades",
      "empresas privadas",
      "organizaciones",
      "transformación digital",
      "desarrollo de sistemas web",
      "optimización de bases de información",
      "bases de información",
      "datos",
      "análisis y diseño de sistemas",
      "soporte tecnológico"
    ),
  },
  {
    id: "home-metodologia",
    title: "Metodología de trabajo",
    description: "Diagnóstico, diseño, desarrollo e implementación.",
    path: "/",
    sectionId: "metodologia",
    searchText: buildSearchText(
      "Metodología",
      "Diagnóstico del proceso",
      "Diseño de solución",
      "Desarrollo e implementación",
      "Puesta en producción",
      "requerimientos",
      "arquitectura"
    ),
  },
  {
    id: "home-contacto",
    title: "Contacto",
    description: "Evaluación tecnológica, WhatsApp, correo. Solicitar diagnóstico.",
    path: "/",
    sectionId: "contacto",
    searchText: buildSearchText(
      "Contacto",
      "diagnóstico tecnológico",
      "WhatsApp",
      "correo",
      "contacto@innovad.pe",
      "evaluación tecnológica"
    ),
  },
  {
    id: "home-valor",
    title: "Propuesta de valor",
    description: "Reducir tiempos, automatizar procesos, mejorar decisiones.",
    path: "/",
    sectionId: "valor",
    searchText: buildSearchText(
      "Propuesta de valor",
      "Reducir tiempos operativos",
      "Automatizar procesos internos",
      "Mejorar la toma de decisiones",
      "Optimizar el uso de la información",
      "datos",
      "automatización"
    ),
  },
  {
    id: "home-direccion",
    title: "Dirección General",
    description: "Liderazgo institucional de INNOVAD.",
    path: "/",
    sectionId: "direccion",
    searchText: buildSearchText(
      "Dirección General",
      "dirección",
      "liderazgo",
      "INNOVAD"
    ),
  },
  // Página Servicios
  {
    id: "servicios-page",
    title: "Servicios tecnológicos",
    description: "Desarrollo web, automatización, gestión de datos, modernización, chatbots, aulas virtuales.",
    path: "/servicios",
    searchText: buildSearchText(
      "Servicios",
      "Desarrollo de software a medida",
      "soluciones web",
      "Optimización y Automatización de Procesos",
      "Gestión y optimización de datos",
      "base de datos",
      "bases de datos",
      "datos",
      "información",
      "Integración y modernización de sistemas",
      "modernización",
      "Chatbots",
      "automatización inteligente",
      "aulas virtuales",
      "plataformas educativas",
      "procesos",
      "web",
      "software a medida"
    ),
  },
  {
    id: "servicios-desarrollo-web",
    title: "Desarrollo de software a medida",
    description: "Plataformas web, sistemas de gestión, aplicaciones institucionales.",
    path: "/servicios",
    sectionId: "desarrollo-web",
    searchText: buildSearchText(
      "Desarrollo de software a medida",
      "sistemas de gestión",
      "plataformas administrativas",
      "aplicaciones institucionales",
      "web escalable",
      "soluciones web"
    ),
  },
  {
    id: "servicios-paginas-web",
    title: "Páginas web profesionales",
    description: "Sitios corporativos, landing pages, SEO, diseño responsive.",
    path: "/",
    sectionId: "servicios",
    searchText: buildSearchText(
      "Páginas web profesionales",
      "páginas web corporativas",
      "landing pages",
      "SEO",
      "responsive",
      "Google"
    ),
  },
  {
    id: "servicios-automatizacion",
    title: "Optimización y Automatización de Procesos",
    description: "Flujos digitales automatizados que mejoran la productividad.",
    path: "/servicios",
    sectionId: "optimizacion-procesos",
    searchText: buildSearchText(
      "Optimización",
      "Automatización de Procesos",
      "procesos manuales",
      "flujos digitales",
      "productividad",
      "automatización"
    ),
  },
  {
    id: "servicios-bases-datos",
    title: "Gestión y optimización de datos",
    description: "Diseño, modelamiento y optimización de bases de información.",
    path: "/servicios",
    sectionId: "bases-de-datos",
    searchText: buildSearchText(
      "Gestión y optimización de datos",
      "base de datos",
      "bases de datos",
      "datos",
      "información",
      "bases de información",
      "optimización",
      "rendimiento",
      "gestión de datos"
    ),
  },
  {
    id: "servicios-modernizacion",
    title: "Integración y modernización de sistemas",
    description: "Actualización de sistemas existentes para mayor seguridad y escalabilidad.",
    path: "/servicios",
    sectionId: "modernizacion",
    searchText: buildSearchText(
      "Integración",
      "modernización",
      "modernización de sistemas",
      "sistemas existentes",
      "seguridad",
      "escalabilidad",
      "sistemas"
    ),
  },
  {
    id: "servicios-chatbots",
    title: "Chatbots y Automatización Inteligente",
    description: "Asistentes virtuales para atención y consultas frecuentes.",
    path: "/servicios",
    sectionId: "chatbots",
    searchText: buildSearchText(
      "Chatbots",
      "asistentes virtuales",
      "automatización inteligente",
      "consultas frecuentes",
      "soporte"
    ),
  },
  {
    id: "servicios-aulas-virtuales",
    title: "Aulas virtuales y plataformas educativas",
    description: "Plataformas educativas digitales: cursos, contenidos, evaluaciones y seguimiento del aprendizaje.",
    path: "/servicios",
    sectionId: "aulas-virtuales",
    searchText: buildSearchText(
      "Aulas virtuales",
      "plataformas educativas",
      "educación",
      "cursos",
      "contenidos",
      "evaluaciones",
      "aprendizaje",
      "institucional",
      "corporativo"
    ),
  },
  // Página Experiencia
  {
    id: "experiencia-page",
    title: "Experiencia en proyectos tecnológicos",
    description: "Sector público y privado. Desarrollo de sistemas, optimización de datos, transformación digital.",
    path: "/experiencia",
    searchText: buildSearchText(
      "Experiencia",
      "sector público",
      "sector privado",
      "universidades",
      "empresas privadas",
      "proyectos tecnológicos",
      "transformación digital",
      "desarrollo de sistemas web",
      "optimización de bases de información",
      "datos",
      "análisis y diseño de sistemas",
      "soporte tecnológico"
    ),
  },
  // FAQ (Home)
  {
    id: "home-faq",
    title: "Preguntas frecuentes",
    description: "Respuestas sobre desarrollo web, instituciones, chatbots, modernización y plazos.",
    path: "/",
    sectionId: "faq",
    searchText: buildSearchText(
      "Preguntas frecuentes",
      "FAQ",
      "páginas web profesionales",
      "entidades públicas",
      "instituciones",
      "chatbots",
      "modernizar sistemas",
      "base de datos",
      "bases de datos",
      "datos",
      "procesos",
      "cuánto demora",
      "desarrollar sistema web",
      "optimización"
    ),
  },
  // Página Contacto
  {
    id: "contactenos-page",
    title: "Contáctenos",
    description: "Solicitar diagnóstico tecnológico. WhatsApp, correo.",
    path: "/contactenos",
    searchText: buildSearchText(
      "Contáctenos",
      "diagnóstico",
      "WhatsApp",
      "correo",
      "contacto@innovad.pe",
      "evaluación tecnológica"
    ),
  },
];

/** Normaliza texto para búsqueda: minúsculas, sin acentos, sin diacríticos. */
function normalizeForSearch(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

/** Genera variantes singular/plural básicas para una palabra (añade/quita 's' al final). */
function wordVariants(word: string): string[] {
  const w = word.trim();
  if (w.length < 2) return [w];
  const variants = new Set<string>([w]);
  if (w.endsWith("s") && w.length > 2) {
    variants.add(w.slice(0, -1)); // dato <- datos
  } else if (!w.endsWith("s")) {
    variants.add(w + "s"); // datos <- dato
  }
  return Array.from(variants);
}

/**
 * Busca en el índice por palabras. Soporta:
 * - Coincidencias parciales por palabra (substring)
 * - Variantes singular/plural
 * - Varias palabras (todas deben coincidir en el texto o en variantes)
 * Devuelve entradas ordenadas por relevancia (más coincidencias primero).
 */
export function searchSite(query: string): SearchEntry[] {
  const normalized = normalizeForSearch(query.trim());
  if (normalized.length < 2) return [];

  const words = normalized.split(/\s+/).filter((w) => w.length >= 2);
  if (words.length === 0) return [];

  const scored = SEARCH_INDEX.map((entry) => {
    const text = entry.searchText;
    let score = 0;
    for (const word of words) {
      if (text.includes(word)) {
        score += 2;
        continue;
      }
      let foundVariant = false;
      for (const v of wordVariants(word)) {
        if (v !== word && text.includes(v)) {
          score += 2;
          foundVariant = true;
          break;
        }
      }
      if (foundVariant) continue;
      // Coincidencia parcial: palabra dentro de un token o token dentro de la palabra
      const tokens = text.split(/\s+/);
      if (word.length >= 2 && tokens.some((t) => t.includes(word) || word.includes(t))) {
        score += 1;
      }
    }
    return { entry, score };
  });

  return scored
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map(({ entry }) => entry);
}
