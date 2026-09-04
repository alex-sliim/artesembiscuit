import { useState } from "react";
import { cn } from "../utils/cn";
import { whatsappLink } from "../hooks";
import { ChevronIcon, WhatsAppIcon } from "./Icons";

const faqs = [
  {
    q: "O que é biscuit (porcelana fria)? É resistente?",
    a: "O biscuit é uma massa de modelar à base de amido e cola branca que seca ao ar, ficando firme e leve. Utilizamos massas de alta qualidade e vernizes protetores, garantindo peças resistentes que, com os cuidados adequados, duram por muitos e muitos anos.",
  },
  {
    q: "Quais materiais são utilizados? São seguros?",
    a: "Trabalhamos com massas atóxicas, tintas acrílicas e vernizes à base de água. Nossas peças são decorativas e seguras para o convívio, mas não são brinquedos — recomendamos mantê-las fora do alcance de crianças pequenas.",
  },
  {
    q: "Qual o prazo de produção e entrega?",
    a: "Por serem 100% artesanais, o prazo médio de produção é de 15 a 30 dias, variando com a quantidade e complexidade das peças. Para lembrancinhas em grande volume, recomendamos encomendar com pelo menos 45 dias de antecedência. O envio é feito via Correios ou transportadora com rastreio.",
  },
  {
    q: "Posso personalizar completamente a peça?",
    a: "Sim! Essa é a nossa especialidade. Cores, roupas, penteados, acessórios, pets, nomes, datas e frases — tudo pode ser adaptado. Basta enviar fotos e referências que criamos um projeto exclusivo para você.",
  },
  {
    q: "Como funciona o pagamento e existe pedido mínimo?",
    a: "Para iniciar a produção, solicitamos 50% de sinal via Pix ou cartão, e o restante antes do envio. Para lembrancinhas, o pedido mínimo é de 20 unidades. Peças únicas, como topos de bolo e miniaturas, não têm quantidade mínima.",
  },
  {
    q: "Vocês entregam para todo o Brasil?",
    a: "Sim! Enviamos para todo o território nacional com embalagem reforçada e proteção individual para cada peça. O frete é calculado no momento do orçamento de acordo com o seu CEP.",
  },
  {
    q: "Como devo cuidar das peças?",
    a: "Mantenha longe de água, umidade excessiva e sol direto. Para limpar, use apenas um pincel macio ou pano seco. Seguindo essas dicas, sua peça ficará linda por gerações.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <span className="reveal text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">Dúvidas frequentes</span>
          <h2 className="reveal mt-4 font-serif text-4xl leading-tight text-cocoa-900 sm:text-5xl" style={{ transitionDelay: "80ms" }}>
            Tudo o que você precisa saber <em className="italic text-blush-500">antes de encomendar</em>
          </h2>
          <p className="reveal mt-5 text-cocoa-700/85" style={{ transitionDelay: "160ms" }}>
            Não encontrou sua resposta? Fale com a gente — respondemos rapidinho.
          </p>
          <a
            href={whatsappLink("Olá! Tenho uma dúvida sobre as peças em biscuit.")}
            target="_blank"
            rel="noreferrer"
            className="reveal mt-7 inline-flex items-center gap-2 rounded-full border-2 border-mint-300 bg-mint-100 px-6 py-3 font-semibold text-cocoa-800 transition-all duration-300 hover:-translate-y-0.5 hover:bg-mint-200 hover:shadow-lg"
            style={{ transitionDelay: "240ms" }}
          >
            <WhatsAppIcon className="h-5 w-5 text-mint-400" /> Tirar dúvida no WhatsApp
          </a>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={cn(
                  "reveal overflow-hidden rounded-2xl border bg-white transition-all duration-500",
                  isOpen ? "border-blush-200 shadow-xl shadow-blush-500/10" : "border-cream-200 hover:border-blush-200 hover:shadow-md"
                )}
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className={cn("font-serif text-xl font-semibold transition-colors", isOpen ? "text-blush-500" : "text-cocoa-900")}>
                    {f.q}
                  </span>
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-500",
                      isOpen ? "rotate-180 bg-blush-500 text-white" : "bg-cream-100 text-cocoa-800"
                    )}
                  >
                    <ChevronIcon className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 leading-relaxed text-cocoa-700/85">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
