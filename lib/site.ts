export const SITE_URL = "https://innovad.pe";

export const WHATSAPP_NUMBER = "51980378479";

export const WHATSAPP_MESSAGE =
  "Hola, me gustaría recibir un diagnóstico tecnológico para mi organización.";

export function getWhatsAppUrl() {
  const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

