import { whatsappLink } from "../hooks";
import { FacebookIcon, HeartIcon, InstagramIcon, WhatsAppIcon } from "./Icons";
import { Logo } from "./Navbar";

const nav = [
  { href: "#sobre", label: "Sobre nós" },
  { href: "#criacoes", label: "Nossas criações" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

const socials = [
  { href: "https://www.instagram.com/artesembiscuitt/", label: "Instagram", Icon: InstagramIcon, hover: "hover:bg-blush-500" },
  { href: "https://www.facebook.com/artesembiscuittfc", label: "Facebook", Icon: FacebookIcon, hover: "hover:bg-[#1877F2]" },
  { href: whatsappLink("Olá! Vim pelo site da Artes em Biscuitt."), label: "WhatsApp", Icon: WhatsAppIcon, hover: "hover:bg-[#25D366]" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-cream-200 bg-white pt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cocoa-700/80">
              Peças artesanais em biscuit modeladas à mão, com personalização total e acabamento impecável. Cada peça
              conta uma história — e a próxima pode ser a sua.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ href, label, Icon, hover }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`flex h-11 w-11 items-center justify-center rounded-full bg-cream-100 text-cocoa-800 transition-all duration-300 hover:-translate-y-1 hover:text-white hover:shadow-lg ${hover}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-cocoa-900">Navegação</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="group inline-flex items-center gap-2 text-cocoa-700/80 transition hover:text-blush-500">
                    <span className="h-px w-0 bg-gold-400 transition-all duration-300 group-hover:w-4" />
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-cocoa-900">Especialidades</h4>
            <ul className="mt-4 space-y-2.5 text-sm text-cocoa-700/80">
              <li>Lembrancinhas de casamento</li>
              <li>Chá de bebê</li>
              <li>Aniversários infantis</li>
              <li>Topos de bolo</li>
              <li>Decoração & colecionáveis</li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg font-semibold text-cocoa-900">Contato</h4>
            <ul className="mt-4 space-y-3 text-sm text-cocoa-700/80">
              <li>
                <a href={whatsappLink("Olá!")} target="_blank" rel="noreferrer" className="transition hover:text-blush-500">
                  (62) 99306-6194
                </a>
              </li>
              <li>
                <a href="mailto:artesembiscuitt01@gmail.com" className="transition hover:text-blush-500">
                  artesembiscuitt01@gmail.com
                </a>
              </li>
              <li>Ateliê em Goiânia – GO<br />Envios para todo o Brasil</li>
              <li>Seg a Sáb · 9h às 18h</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-cream-200 py-7 text-xs text-cocoa-700/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Artes em Biscuitt. Todos os direitos reservados.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition hover:text-blush-500">Política de Privacidade</a>
            <a href="#" className="transition hover:text-blush-500">Termos de Uso</a>
          </div>
          <p className="inline-flex items-center gap-1">
            Feito com <HeartIcon className="h-3.5 w-3.5 animate-pulse text-blush-500" /> e biscuit
          </p>
        </div>
      </div>
    </footer>
  );
}
