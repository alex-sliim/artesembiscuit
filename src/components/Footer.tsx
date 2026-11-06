import { Heart, Mail, MapPin } from "lucide-react";
import logo from "../assets/artesembiscuitt.png";
import WhatsAppIcon from "./WhatsAppIcon";
import { DEFAULT_MESSAGE, WHATSAPP_DISPLAY, waLink } from "../utils/whatsapp";

const nav = [
  { label: "Início", href: "#inicio" },
  { label: "Criações", href: "#criacoes" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Ateliê", href: "#atelie" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas", href: "#duvidas" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-cream-200 bg-cream-100">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-md">
                <img
                  src={logo}
                  alt="Logo Artes em Biscuitt"
                  className="h-full w-full scale-[1.6] object-cover object-[50%_16%]"
                />
              </div>
              <div className="leading-tight">
                <span className="block font-script text-2xl text-terra-600">
                  Artes em
                </span>
                <span className="-mt-1 block font-display text-lg font-bold tracking-wide text-bark-900">
                  BISCUITT
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-bark-500">
              Porcelana fria artesanal modelada à mão para eternizar seus
              momentos mais especiais. Encomendas personalizadas sob consulta.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-bark-900">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-bold text-bark-500 transition-colors hover:text-terra-600"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold text-bark-900">
              Fale com a gente
            </h4>
            <div className="mt-4 space-y-3">
              <a
                href={waLink(DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm font-bold text-bark-500 transition-colors hover:text-wpp-600"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-wpp-500/15 text-wpp-600">
                  <WhatsAppIcon className="h-4 w-4" />
                </span>
                {WHATSAPP_DISPLAY}
              </a>
              <p className="flex items-center gap-3 text-sm font-bold text-bark-500">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-terra-100 text-terra-600">
                  <MapPin className="h-4 w-4" />
                </span>
                Goiânia e região — GO
              </p>
              <p className="flex items-center gap-3 text-sm font-bold text-bark-500">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-300/20 text-gold-600">
                  <Mail className="h-4 w-4" />
                </span>
                Orçamentos pelo WhatsApp
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream-200 pt-7 sm:flex-row">
          <p className="text-xs font-bold text-bark-400">
            © {new Date().getFullYear()} Artes em Biscuitt — Todos os direitos
            reservados.
          </p>
          <p className="flex items-center gap-1.5 text-xs font-bold text-bark-400">
            Feito à mão, com muito
            <Heart className="h-3.5 w-3.5 fill-terra-500 text-terra-500" />
            em biscuit
          </p>
        </div>
      </div>
    </footer>
  );
}
