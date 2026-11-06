import { motion } from "framer-motion";
import { CheckCheck, Star } from "lucide-react";
import Reveal from "./Reveal";
import { testimonials } from "../data/content";
import { DEFAULT_MESSAGE, waLink } from "../utils/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
      ))}
    </div>
  );
}

const distribution = [
  { stars: 5, percent: 96 },
  { stars: 4, percent: 4 },
];

export default function Testimonials() {
  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-gradient-to-b from-cream-100 via-terra-100/40 to-cream-50 py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute right-[-10%] top-40 h-[26rem] w-[26rem] rounded-full bg-terra-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-script text-3xl text-terra-500">
            quem recebeu, se apaixonou
          </span>
          <h2 className="mt-2 font-display text-4xl font-semibold leading-tight text-bark-900 sm:text-5xl">
            Mensagens que chegam{" "}
            <span className="italic text-terra-600">direto do coração</span>
          </h2>
          <p className="mt-4 text-lg text-bark-500">
            Recados reais de clientes que encomendaram e voltaram para contar
            como foi receber sua peça.
          </p>
        </Reveal>

        {/* Resumo da avaliação */}
        <Reveal delay={0.1} className="mx-auto mt-12 max-w-xl">
          <div className="flex flex-col items-center gap-6 rounded-[2rem] border border-cream-200 bg-white/80 px-8 py-8 shadow-soft backdrop-blur sm:flex-row sm:gap-10">
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.2 }}
                className="font-display text-6xl font-bold text-bark-900"
              >
                4.9
              </motion.div>
              <div className="mt-1 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                  >
                    <Star className="h-5 w-5 fill-gold-400 text-gold-400" />
                  </motion.span>
                ))}
              </div>
              <p className="mt-2 text-xs font-extrabold uppercase tracking-widest text-bark-400">
                +400 avaliações
              </p>
            </div>
            <div className="w-full flex-1 space-y-3">
              {distribution.map((row, i) => (
                <div key={row.stars} className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-sm font-extrabold text-bark-700">
                    {row.stars}
                    <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
                  </span>
                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-cream-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${row.percent}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        delay: 0.4 + i * 0.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-gold-400 to-terra-400"
                    />
                  </div>
                  <span className="w-10 text-right text-sm font-bold text-bark-500">
                    {row.percent}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Cards estilo conversa de WhatsApp */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: (i % 3) * 0.14,
                type: "spring",
                stiffness: 120,
                damping: 16,
              }}
              whileHover={{ y: -6 }}
              className="flex flex-col rounded-[1.6rem] border border-cream-200 bg-[#ECE5DD] p-4 shadow-soft"
            >
              {/* Cabeçalho do chat */}
              <div className="flex items-center gap-3 rounded-t-[1.2rem] border-b border-bark-900/5 bg-white/60 px-3 py-2.5 backdrop-blur">
                <img
                  src={t.avatar}
                  alt={`Foto de ${t.name}`}
                  loading="lazy"
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
                />
                <div className="flex-1">
                  <p className="text-sm font-extrabold text-bark-900">
                    {t.name}
                  </p>
                  <p className="flex items-center gap-1 text-xs font-bold text-wpp-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-wpp-500" />
                    online
                  </p>
                </div>
                <WhatsAppIcon className="h-4 w-4 text-bark-400/50" />
              </div>

              {/* Balão da mensagem */}
              <div className="flex flex-1 flex-col pt-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 8 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + (i % 3) * 0.14 }}
                  className="relative max-w-[95%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 shadow-sm"
                >
                  <span className="absolute -left-1.5 top-0 h-3 w-3 bg-white [clip-path:polygon(100%_0,0_0,100%_100%)]" />
                  <p className="text-sm leading-relaxed text-bark-700">
                    {t.text}
                  </p>
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <Stars count={t.stars} />
                    <span className="flex items-center gap-1 text-[11px] font-bold text-bark-400">
                      {t.time}
                      <CheckCheck className="h-3.5 w-3.5 text-sky-500" />
                    </span>
                  </div>
                </motion.div>

                <div className="mt-auto pt-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-wpp-500/10 px-3 py-1.5 text-xs font-extrabold text-wpp-700">
                    <CheckCheck className="h-3.5 w-3.5" />
                    Encomendou: {t.piece}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-14 text-center">
          <p className="mb-6 font-script text-2xl text-bark-400">
            Quer ser a próxima mensagem bonita por aqui?
          </p>
          <motion.a
            href={waLink(DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 rounded-full bg-wpp-500 px-9 py-4 text-base font-extrabold text-white shadow-xl shadow-wpp-500/35 transition-colors hover:bg-wpp-600"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Fazer meu pedido agora
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
