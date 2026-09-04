import { useCallback, useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { whatsappLink } from "../hooks";
import { ArrowIcon, CloseIcon, WhatsAppIcon, ZoomIcon } from "./Icons";

export const categories = [
  { slug: "casamento", title: "Lembrancinhas de Casamento", desc: "Mimos delicados que eternizam o 'sim' e emocionam cada convidado.", img: "/images/casamento.jpg", tag: "Mais pedido" },
  { slug: "cha-bebe", title: "Chá de Bebê", desc: "Peças fofas em tons suaves para celebrar a chegada mais esperada.", img: "/images/cha-bebe.jpg" },
  { slug: "aniversario", title: "Aniversários", desc: "Personagens e temas encantadores para festas inesquecíveis.", img: "/images/aniversario.jpg" },
  { slug: "decoracao", title: "Decoração", desc: "Arranjos e esculturas que trazem delicadeza e personalidade ao ambiente.", img: "/images/decoracao.jpg" },
  { slug: "topo-bolo", title: "Topos de Bolo", desc: "O toque final que transforma o bolo em protagonista da festa.", img: "/images/topo-bolo.jpg", tag: "Destaque" },
  { slug: "personalizados", title: "Personalizados", desc: "Miniaturas da sua família, do seu pet ou de quem você ama.", img: "/images/personalizados.jpg" },
];

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const next = useCallback(() => setActive((a) => (a === null ? null : (a + 1) % categories.length)), []);
  const prev = useCallback(() => setActive((a) => (a === null ? null : (a - 1 + categories.length) % categories.length)), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <section id="criacoes" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">Nossas criações</span>
          <h2 className="reveal mt-4 font-serif text-4xl leading-tight text-cocoa-900 sm:text-5xl" style={{ transitionDelay: "80ms" }}>
            Presenteie com memórias que <em className="italic text-blush-500">duram para sempre</em>
          </h2>
          <p className="reveal mt-5 text-cocoa-700/85" style={{ transitionDelay: "160ms" }}>
            Explore nossas categorias. Clique em uma peça para ver de pertinho cada detalhe modelado à mão.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c, i) => (
            <article
              key={c.slug}
              className="reveal group relative cursor-pointer overflow-hidden rounded-[1.75rem] bg-white shadow-md shadow-cocoa-800/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blush-500/20"
              style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              onClick={() => setActive(i)}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa-900/70 via-cocoa-900/10 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                {c.tag && (
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-blush-500 backdrop-blur">
                    {c.tag}
                  </span>
                )}
                <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-cocoa-800 opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <ZoomIcon className="h-5 w-5" />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <h3 className="font-serif text-2xl font-semibold">{c.title}</h3>
                  <p className="mt-1 max-h-0 overflow-hidden text-sm text-white/85 opacity-0 transition-all duration-500 group-hover:max-h-20 group-hover:opacity-100">
                    {c.desc}
                  </p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-300">
                    Ver detalhes <ArrowIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="reveal mt-12 text-center">
          <a
            href={whatsappLink("Olá! Gostaria de conhecer o catálogo completo da Artes em Biscuitt.")}
            target="_blank"
            rel="noreferrer"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-cocoa-800 px-8 py-4 font-semibold text-white shadow-xl shadow-cocoa-800/20 transition-all duration-300 hover:-translate-y-1 hover:bg-cocoa-900"
          >
            <WhatsAppIcon className="h-5 w-5" /> Receber catálogo completo no WhatsApp
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <div
        className={cn(
          "fixed inset-0 z-[70] flex items-center justify-center bg-cocoa-900/90 p-4 backdrop-blur-md transition-opacity duration-300",
          active !== null ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={close}
        role="dialog"
        aria-modal="true"
        aria-label="Visualização da peça"
      >
        {active !== null && (
          <div
            className="relative grid w-full max-w-5xl overflow-hidden rounded-3xl bg-cream-50 shadow-2xl animate-[fadeZoom_.4s_ease-out] lg:grid-cols-[1.2fr_1fr]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={categories[active].img}
              src={categories[active].img}
              alt={categories[active].title}
              className="max-h-[50vh] w-full object-cover lg:max-h-[80vh]"
            />
            <div className="flex flex-col justify-center p-7 lg:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">
                {String(active + 1).padStart(2, "0")} / {String(categories.length).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-serif text-3xl font-semibold text-cocoa-900 lg:text-4xl">{categories[active].title}</h3>
              <p className="mt-4 leading-relaxed text-cocoa-700/85">{categories[active].desc}</p>
              <p className="mt-3 text-sm text-cocoa-700/70">
                Cores, tamanhos, nomes e datas são totalmente personalizáveis. Peça um orçamento sem compromisso.
              </p>
              <a
                href={whatsappLink(`Olá! Tenho interesse em: ${categories[active].title}. Pode me passar um orçamento?`)}
                target="_blank"
                rel="noreferrer"
                className="btn-shine mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-blush-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blush-500/30 transition hover:-translate-y-0.5 hover:bg-blush-400"
              >
                <WhatsAppIcon className="h-5 w-5" /> Quero esta peça
              </a>
              <div className="mt-6 flex gap-2">
                <button onClick={prev} className="rounded-full border border-cocoa-800/15 p-2.5 text-cocoa-800 transition hover:bg-blush-100" aria-label="Anterior">
                  <ArrowIcon className="h-5 w-5 rotate-180" />
                </button>
                <button onClick={next} className="rounded-full border border-cocoa-800/15 p-2.5 text-cocoa-800 transition hover:bg-blush-100" aria-label="Próxima">
                  <ArrowIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
            <button
              onClick={close}
              className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-cocoa-800 shadow transition hover:bg-white hover:rotate-90"
              aria-label="Fechar"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
