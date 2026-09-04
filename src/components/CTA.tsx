import { useScrollY, whatsappLink } from "../hooks";
import { HeartIcon, StarIcon, WhatsAppIcon } from "./Icons";

export default function CTA() {
  const y = useScrollY();
  return (
    <section id="contato" className="relative overflow-hidden px-5 py-20 sm:px-8 lg:py-28">
      <div className="reveal reveal-scale relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blush-400 via-blush-300 to-gold-300 px-6 py-16 text-center shadow-2xl shadow-blush-500/30 sm:px-12 lg:py-24">
        {/* decoração paralaxe */}
        <div
          className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-2xl"
          style={{ transform: `translateY(${(y - 4000) * 0.1}px)` }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-mint-200/40 blur-2xl"
          style={{ transform: `translateY(${(y - 4000) * -0.08}px)` }}
        />
        <span className="pointer-events-none absolute left-[10%] top-[20%] animate-float text-white/50"><HeartIcon className="h-10 w-10" /></span>
        <span className="pointer-events-none absolute right-[12%] top-[25%] animate-float-slow text-white/60"><StarIcon className="h-7 w-7" /></span>
        <span className="pointer-events-none absolute bottom-[18%] left-[22%] animate-float-slow text-white/40" style={{ animationDelay: "2s" }}><StarIcon className="h-5 w-5" /></span>
        <span className="pointer-events-none absolute bottom-[22%] right-[20%] animate-float text-white/50" style={{ animationDelay: "1s" }}><HeartIcon className="h-6 w-6" /></span>

        <div className="relative mx-auto max-w-2xl">
          <span className="inline-block rounded-full bg-white/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-white backdrop-blur">
            Vamos criar juntos?
          </span>
          <h2 className="mt-6 font-serif text-4xl leading-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
            Transforme seu momento especial em <em className="italic">uma obra de arte</em>
          </h2>
          <p className="mt-6 text-lg text-white/90">
            Conte sua história pelo WhatsApp e receba um orçamento personalizado sem compromisso. Atendimento humano,
            rápido e cheio de carinho.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={whatsappLink("Olá! Quero solicitar um orçamento personalizado para minhas peças em biscuit.")}
              target="_blank"
              rel="noreferrer"
              className="btn-shine group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-bold text-cocoa-900 shadow-2xl shadow-cocoa-900/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
            >
              <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366] text-white">
                <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
                <WhatsAppIcon className="relative h-5 w-5" />
              </span>
              Falar no WhatsApp agora
            </a>
            <a
              href="https://wa.me/c/556293066194"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/15 hover:-translate-y-1"
            >
              Ver catálogo
            </a>
          </div>
          <p className="mt-6 text-sm text-white/80">Resposta em até 2 horas em horário comercial · Seg a Sáb, 9h às 18h</p>
        </div>
      </div>
    </section>
  );
}
