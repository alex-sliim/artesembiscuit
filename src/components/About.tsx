import { useScrollY } from "../hooks";
import { CheckIcon, FlowerIcon, HeartIcon, StarIcon } from "./Icons";

const values = [
  { icon: HeartIcon, title: "Carinho em cada detalhe", text: "Cada pétala, cada expressão e cada laço é modelado à mão, sem pressa." },
  { icon: FlowerIcon, title: "Exclusividade", text: "Nenhuma peça é igual à outra. A sua será única no mundo." },
  { icon: StarIcon, title: "Acabamento impecável", text: "Pintura delicada, proporções perfeitas e durabilidade que atravessa gerações." },
];

export default function About() {
  const y = useScrollY();
  return (
    <section id="sobre" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div
        className="pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-mint-100 blur-3xl"
        style={{ transform: `translateY(${(y - 800) * 0.08}px)` }}
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        {/* Imagem */}
        <div className="reveal reveal-left relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem] border-2 border-gold-300/60" />
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-cocoa-800/15">
            <img
              src="/images/artesa.jpg"
              alt="Mãos da artesã modelando uma flor em biscuit"
              className="aspect-[4/5] w-full object-cover transition-transform duration-1000 hover:scale-105 sm:aspect-square lg:aspect-[4/5]"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-8 right-4 rounded-3xl bg-cream-50 p-6 shadow-xl shadow-cocoa-800/10 sm:-right-8">
            <p className="font-serif text-5xl font-semibold text-blush-500">12+</p>
            <p className="mt-1 text-sm text-cocoa-700/80">anos modelando<br />sonhos em biscuit</p>
          </div>
        </div>

        {/* Texto */}
        <div>
          <span className="reveal text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">Sobre nós</span>
          <h2 className="reveal mt-4 font-serif text-4xl leading-tight text-cocoa-900 sm:text-5xl" style={{ transitionDelay: "80ms" }}>
            Arte feita à mão, <em className="italic text-blush-500">com amor de verdade</em>
          </h2>
          <div className="reveal mt-6 space-y-4 leading-relaxed text-cocoa-700/85" style={{ transitionDelay: "160ms" }}>
            <p>
              Tudo começou com um pequeno topo de bolo para o aniversário da minha filha. Ao ver o brilho nos olhos dela,
              descobri que o biscuit era muito mais que uma massa: era uma forma de eternizar sentimentos.
            </p>
            <p>
              Hoje, no ateliê da <strong className="font-semibold text-cocoa-900">Artes em Biscuitt</strong>, cada peça nasce de uma
              conversa. Ouço a sua história, desenho a ideia, modelo com paciência e pinto cada detalhe até que a peça
              conte exatamente o que você quer dizer — sem palavras.
            </p>
          </div>

          <ul className="mt-8 space-y-5">
            {values.map((v, i) => (
              <li key={v.title} className="reveal flex gap-4" style={{ transitionDelay: `${220 + i * 90}ms` }}>
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blush-100 to-mint-100 text-blush-500 shadow-sm">
                  <v.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-cocoa-900">{v.title}</h3>
                  <p className="text-sm text-cocoa-700/80">{v.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="reveal mt-8 flex flex-wrap gap-3" style={{ transitionDelay: "500ms" }}>
            {["Materiais atóxicos", "Durabilidade garantida", "Envio para todo o Brasil"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5 rounded-full bg-cream-100 px-3.5 py-1.5 text-xs font-semibold text-cocoa-700">
                <CheckIcon className="h-3.5 w-3.5 text-mint-400" /> {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
