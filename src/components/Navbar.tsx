import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { useScrollY, whatsappLink } from "../hooks";
import { CloseIcon, FlowerIcon, MenuIcon, WhatsAppIcon } from "./Icons";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#criacoes", label: "Criações" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

export function Logo({ dark = true }: { dark?: boolean }) {
  return (
    <a href="#inicio" className="group flex items-center gap-2.5" aria-label="Artes em Biscuitt - início">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blush-200 to-mint-200 shadow-inner">
        <FlowerIcon className="h-6 w-6 text-blush-500 transition-transform duration-700 ease-out group-hover:rotate-180" />
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-gold-400 animate-pulse" />
      </span>
      <span className="leading-none">
        <span className={cn("block font-serif text-xl font-semibold tracking-wide", dark ? "text-cocoa-900" : "text-white")}>
          Artes em <span className="text-blush-500">Biscuitt</span>
        </span>
        <span className={cn("block text-[10px] uppercase tracking-[0.3em]", dark ? "text-cocoa-700/60" : "text-white/70")}>
          arte feita à mão
        </span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const y = useScrollY();
  const scrolled = y > 40;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cream-50/85 py-2 shadow-[0_8px_30px_-12px_rgba(91,74,68,0.25)] backdrop-blur-xl"
          : "bg-transparent py-4"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Navegação principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-cocoa-700 transition-colors hover:text-blush-500"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={whatsappLink("Olá! Gostaria de solicitar um orçamento personalizado.")}
            target="_blank"
            rel="noreferrer"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-cocoa-800 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cocoa-800/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-cocoa-900 hover:shadow-xl"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Orçamento
          </a>
        </nav>

        <button
          className="rounded-full p-2 text-cocoa-800 transition hover:bg-blush-100 lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col bg-cream-50/95 backdrop-blur-xl transition-all duration-500 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <Logo />
          <button className="rounded-full p-2 text-cocoa-800 hover:bg-blush-100" onClick={() => setOpen(false)} aria-label="Fechar menu">
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-1 flex-col items-center justify-center gap-7">
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 60 + 100}ms` : "0ms" }}
              className={cn(
                "font-serif text-3xl text-cocoa-800 transition-all duration-500 hover:text-blush-500",
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              )}
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappLink("Olá! Gostaria de solicitar um orçamento personalizado.")}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-cocoa-800 px-7 py-3 font-semibold text-white"
          >
            <WhatsAppIcon className="h-5 w-5" /> Solicitar Orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
