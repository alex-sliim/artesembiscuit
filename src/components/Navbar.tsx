import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { DEFAULT_MESSAGE, LOGO_URL, waLink } from "../utils/whatsapp";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Criações", href: "#criacoes" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Ateliê", href: "#atelie" },
  { label: "Depoimentos", href: "#depoimentos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream-50/85 shadow-[0_10px_40px_-18px_rgba(78,54,43,0.3)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="group flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-terra-300 blur-md opacity-60 transition-opacity group-hover:opacity-90" />
            <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-md">
              <img
                src={LOGO_URL}
                alt="Logo Artes em Biscuitt"
                className="h-full w-full scale-[1.6] object-cover object-[50%_16%]"
              />
            </div>
          </div>
          <div className="leading-tight">
            <span className="block font-script text-2xl text-terra-600">
              Artes em
            </span>
            <span className="-mt-1 block font-display text-lg font-bold tracking-wide text-bark-900">
              BISCUITT
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-bold text-bark-700 transition-colors hover:text-terra-600"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-terra-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.a
            href={waLink(DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="hidden items-center gap-2 rounded-full bg-wpp-500 px-5 py-2.5 text-sm font-extrabold text-white shadow-lg shadow-wpp-500/30 transition-colors hover:bg-wpp-600 sm:flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Pedir orçamento
          </motion.a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-cream-300 bg-white/70 text-bark-700 shadow-sm lg:hidden"
            aria-label="Abrir menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-cream-200 bg-cream-50/95 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-xl px-4 py-3 font-bold text-bark-700 transition-colors hover:bg-terra-100 hover:text-terra-700"
                >
                  {link.label}
                </motion.a>
              ))}
              <a
                href={waLink(DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-wpp-500 px-5 py-3.5 font-extrabold text-white shadow-lg shadow-wpp-500/30"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Pedir orçamento no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
