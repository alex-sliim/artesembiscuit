import { useScrollY, whatsappLink } from "../hooks";
import { WhatsAppIcon } from "./Icons";

const steps = [
  { n: "01", title: "Escolha o modelo", text: "Navegue pelo catálogo ou envie sua referência. Vamos conversar sobre o tema, o estilo e a ocasião.", emoji: "🎀" },
  { n: "02", title: "Personalize os detalhes", text: "Cores, nomes, datas, roupas, pets… tudo pode ser adaptado para deixar a peça com a sua cara.", emoji: "🎨" },
  { n: "03", title: "Produção artesanal", text: "Modelagem manual, secagem natural e pintura minuciosa. Você acompanha o processo com fotos.", emoji: "🤲" },
  { n: "04", title: "Receba em casa", text: "Embalagem cuidadosa e envio seguro para todo o Brasil. É só abrir e se emocionar.", emoji: "📦" },
];

export default function HowItWorks() {
  const y = useScrollY();
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-gradient-to-b from-blush-50 via-cream-100 to-cream-50 py-24 lg:py-32">
      <div
        className="pointer-events-none absolute -left-32 bottom-0 h-[26rem] w-[26rem] rounded-full bg-blush-200/50 blur-3xl"
        style={{ transform: `translateY(${(y - 2000) * -0.06}px)` }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">Como funciona</span>
          <h2 className="reveal mt-4 font-serif text-4xl leading-tight text-cocoa-900 sm:text-5xl" style={{ transitionDelay: "80ms" }}>
            Da sua ideia à peça pronta, <em className="italic text-blush-500">em 4 passos</em>
          </h2>
          <p className="reveal mt-5 text-cocoa-700/85" style={{ transitionDelay: "160ms" }}>
            Um processo simples, transparente e cheio de carinho — do primeiro "oi" até o momento de desembrulhar.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* linha conectora */}
          <div className="pointer-events-none absolute left-0 right-0 top-14 hidden h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent lg:block" />
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal group relative rounded-3xl bg-white/80 p-7 shadow-md shadow-cocoa-800/5 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blush-500/15"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative mx-auto flex h-[3.75rem] w-[3.75rem] items-center justify-center rounded-full bg-gradient-to-br from-blush-200 to-mint-200 text-3xl shadow-inner transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                {s.emoji}
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-cocoa-800 font-serif text-xs font-bold text-white">
                  {i + 1}
                </span>
              </div>
              <span className="mt-6 block text-center font-serif text-sm tracking-[0.3em] text-gold-500">{s.n}</span>
              <h3 className="mt-2 text-center font-serif text-2xl font-semibold text-cocoa-900">{s.title}</h3>
              <p className="mt-3 text-center text-sm leading-relaxed text-cocoa-700/80">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="reveal mt-14 text-center">
          <a
            href={whatsappLink("Olá! Quero começar meu pedido personalizado em biscuit.")}
            target="_blank"
            rel="noreferrer"
            className="btn-shine inline-flex items-center gap-2 rounded-full bg-blush-500 px-8 py-4 font-semibold text-white shadow-xl shadow-blush-500/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blush-400"
          >
            <WhatsAppIcon className="h-5 w-5" /> Começar meu pedido
          </a>
        </div>
      </div>
    </section>
  );
}
