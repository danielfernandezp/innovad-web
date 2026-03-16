import { SITE_URL } from "../lib/site";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Innovad",
    url: SITE_URL,
    description:
      "Innovad es una empresa de tecnolog?a en Per? especializada en desarrollo de software a medida, p?ginas web, chatbots y automatizaci?n de procesos para empresas e instituciones del sector p?blico y privado.",
    email: "contacto@innovad.pe",
    telephone: "+51 980 378 479",
    areaServed: {
      "@type": "Country",
      name: "Per?",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "PE",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ProfessionalServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Innovad",
    url: SITE_URL,
    description:
      "Servicios profesionales de desarrollo de software a medida, desarrollo de p?ginas web, automatizaci?n de procesos y chatbots para empresas e instituciones en Per?.",
    areaServed: {
      "@type": "Country",
      name: "Per?",
    },
    serviceType: [
      "Desarrollo de software a medida en Per?",
      "Desarrollo de sistemas web a medida",
      "Desarrollo de p?ginas web en Per?",
      "Optimizaci?n y automatizaci?n de procesos",
      "Administraci?n y optimizaci?n de bases de datos",
      "Migraci?n y modernizaci?n de sistemas",
      "Implementaci?n de chatbots y automatizaci?n inteligente",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
