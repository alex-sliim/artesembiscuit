export const WHATSAPP_NUMBER = "5562993066194";
export const WHATSAPP_DISPLAY = "(62) 99306-6194";
export const LOGO_URL = "/images/artesembiscuitt.png";

export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Artes em Biscuitt e quero fazer um orçamento personalizado!";
