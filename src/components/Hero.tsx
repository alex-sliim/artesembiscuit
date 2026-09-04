import { useScrollY, whatsappLink } from "../hooks";
import { ArrowIcon, HeartIcon, StarIcon, WhatsAppIcon } from "./Icons";

export default function Hero() {
  const y = useScrollY();

  return (
    <section id="inicio" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 lg:pb-24">
      {/* Fundo decorativo com paralaxe */}
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-blush-200/60 blur-3xl"
        style={{ transform: `translateY(${y * 0.15}px)` }}
      />
      <div
        className="pointer-events-none absolute -right-40 top-40 h-[30rem] w-[30rem] rounded-full bg-mint-200/60 blur-3xl"
        style={{ transform: `translateY(${y * -0.1}px)` }}
      />
      <div
        className="pointer-events-none absolute left-1/2 bottom-0 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-300/30 blur-3xl"
        style={{ transform: `translate(-50%, ${y * 0.08}px)` }}
      />

      {/* Elementos flutuantes */}
      <span className="pointer-events-none absolute left-[8%] top-[22%] hidden animate-float text-blush-300 lg:block">
        <HeartIcon className="h-8 w-8" />
      </span>
      <span className="pointer-events-none absolute right-[12%] top-[18%] hidden animate-float-slow text-gold-400 lg:block">
        <StarIcon className="h-6 w-6" />
      </span>
      <span className="pointer-events-none absolute left-[42%] bottom-[12%] hidden animate-float text-mint-400 lg:block" style={{ animationDelay: "1.5s" }}>
        <HeartIcon className="h-5 w-5" />
      </span>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
        <div className="max-w-xl">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-gold-300/70 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-gold-500 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
            100% artesanal · Feito com amor
          </span>

          <h1 className="reveal mt-6 font-serif text-5xl leading-[1.05] text-cocoa-900 sm:text-6xl lg:text-7xl" style={{ transitionDelay: "100ms" }}>
            Cada peça conta <br />
            <em className="font-medium italic text-blush-500">uma história</em> <br />
            feita à mão.
          </h1>

          <p className="reveal mt-6 text-lg leading-relaxed text-cocoa-700/85" style={{ transitionDelay: "200ms" }}>
            Lembrancinhas, topos de bolo e miniaturas personalizadas em biscuit, modeladas com delicadeza para
            transformar seus momentos especiais em memórias que duram para sempre.
          </p>

          <div className="reveal mt-9 flex flex-col gap-4 sm:flex-row" style={{ transitionDelay: "300ms" }}>
            <a
              href="https://wa.me/c/556293066194"
              target="_blank"
              rel="noreferrer"
              className="btn-shine group inline-flex items-center justify-center gap-2 rounded-full bg-blush-500 px-7 py-4 font-semibold text-white shadow-xl shadow-blush-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blush-400 hover:shadow-2xl hover:shadow-blush-500/40"
            >
              Ver Catálogo
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={whatsappLink("Olá! Vim pelo site e gostaria de solicitar um orçamento personalizado.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cocoa-800/15 bg-white/70 px-7 py-4 font-semibold text-cocoa-800 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-mint-400 hover:bg-mint-100 hover:shadow-lg"
            >
              <WhatsAppIcon className="h-5 w-5 text-mint-400" />
              Solicitar Orçamento Personalizado
            </a>
          </div>

          <div className="reveal mt-10 flex flex-wrap items-center gap-6 text-sm text-cocoa-700/80" style={{ transitionDelay: "400ms" }}>
            <div className="flex items-center gap-2">
              <div className="flex text-gold-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <span className="font-semibold text-cocoa-800">5.0</span> · +800 avaliações
            </div>
            <div className="hidden h-4 w-px bg-cocoa-700/20 sm:block" />
            <span>+3.500 peças entregues com carinho</span>
          </div>
        </div>

        {/* Imagem hero */}
        <div className="reveal reveal-scale relative mx-auto w-full max-w-md lg:max-w-none" style={{ transitionDelay: "200ms" }}>
          <div className="absolute inset-0 -rotate-6 rounded-[2.5rem] bg-gradient-to-br from-blush-200 via-cream-200 to-mint-200 transition-transform duration-700" />
          <div className="absolute -inset-3 animate-spin-slow rounded-[3rem] border border-dashed border-gold-400/50" />
          <div
            className="relative overflow-hidden rounded-[2.5rem] shadow-2xl shadow-cocoa-800/20"
            style={{ transform: `translateY(${y * -0.05}px)` }}
          >
            <img
              src="/images/hero.jpg"
              alt="Topo de bolo de casamento em biscuit com flores delicadas"
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1500ms] hover:scale-105"
              loading="eager"
            />
          </div>

          {/* Cards flutuantes */}
          <div className="absolute -left-6 bottom-12 hidden animate-float rounded-2xl bg-white/90 px-4 py-3 shadow-xl shadow-cocoa-800/10 backdrop-blur sm:block">
            <p className="text-[11px] uppercase tracking-widest text-cocoa-700/60">Personalização</p>
            <p className="font-serif text-2xl font-semibold text-cocoa-900">100% sua</p>
          </div>
          <div className="absolute -right-4 top-10 hidden animate-float-slow rounded-2xl bg-white/90 px-4 py-3 shadow-xl shadow-cocoa-800/10 backdrop-blur sm:block">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blush-100 text-blush-500">
                <HeartIcon className="h-4 w-4" />
              </span>
              <div>
                <p className="text-xs text-cocoa-700/60">Feito com</p>
                <p className="text-sm font-bold text-cocoa-900">amor de verdade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
