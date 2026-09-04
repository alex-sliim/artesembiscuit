import { StarIcon } from "./Icons";

const testimonials = [
  {
    name: "Mariana & Lucas",
    role: "Lembrancinhas de casamento",
    photo: "https://i.pravatar.cc/120?img=47",
    text: "As lembrancinhas ficaram tão perfeitas que os convidados não paravam de elogiar! Cada detalhe do nosso vestido e terno foi reproduzido. Choramos ao abrir a caixa.",
  },
  {
    name: "Camila Ferreira",
    role: "Chá de bebê da Alice",
    photo: "https://i.pravatar.cc/120?img=32",
    text: "Encomendei os mimos do chá da minha filha e superou todas as expectativas. Delicado, resistente e entregue antes do prazo. Já estou planejando o topo do primeiro aninho!",
  },
  {
    name: "Roberta Menezes",
    role: "Miniatura da família",
    photo: "https://i.pravatar.cc/120?img=25",
    text: "Presenteei meus pais com uma miniatura da nossa família, incluindo o cachorrinho. A semelhança é impressionante! Foi o presente mais emocionante que já dei.",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="reveal text-xs font-semibold uppercase tracking-[0.3em] text-gold-500">Depoimentos</span>
          <h2 className="reveal mt-4 font-serif text-4xl leading-tight text-cocoa-900 sm:text-5xl" style={{ transitionDelay: "80ms" }}>
            Histórias que <em className="italic text-blush-500">emocionam</em>
          </h2>
          <p className="reveal mt-5 text-cocoa-700/85" style={{ transitionDelay: "160ms" }}>
            Nada nos deixa mais felizes do que fazer parte dos seus momentos especiais.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal group relative flex flex-col rounded-[1.75rem] border border-cream-200 bg-cream-50 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blush-200 hover:shadow-2xl hover:shadow-blush-500/15"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="absolute right-7 top-5 font-serif text-7xl leading-none text-blush-200 transition-colors group-hover:text-blush-300">
                “
              </span>
              <div className="flex text-gold-400" aria-label="5 estrelas">
                {Array.from({ length: 5 }).map((_, j) => (
                  <StarIcon key={j} className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" style={{ transitionDelay: `${j * 40}ms` }} />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 leading-relaxed text-cocoa-700/90">{t.text}</blockquote>
              <figcaption className="mt-7 flex items-center gap-4 border-t border-cream-200 pt-6">
                <img
                  src={t.photo}
                  alt={t.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-blush-200 ring-offset-2 ring-offset-cream-50"
                />
                <div>
                  <p className="font-semibold text-cocoa-900">{t.name}</p>
                  <p className="text-xs text-cocoa-700/60">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
