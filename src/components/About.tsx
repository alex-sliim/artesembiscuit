import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Check, Palette, ShieldCheck, Heart, Brush } from "lucide-react";
import Reveal from "./Reveal";

const atelier = "/images/atelier.jpg";

const checkItems = [
  { icon: Palette, text: "Modelagem e pintura 100% manuais" },
  { icon: Check, text: "Materiais atóxicos de alta qualidade" },
  { icon: ShieldCheck, text: "Acabamento com verniz protetor" },
  { icon: Heart, text: "Carinho em cada detalhe, do início ao fim" },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      id="atelie"
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-28"
    >
      <div className="pointer-events-none absolute left-[-12%] top-32 h-[28rem] w-[28rem] rounded-full bg-gold-300/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        {/* Imagem com máscara orgânica */}
        <div className="relative order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: [0, 6, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 rounded-[3rem] bg-terra-100"
            />
            <motion.div
              style={{ y: imgY }}
              className="relative overflow-hidden rounded-[2.6rem] shadow-card"
            >
              <img
                src={atelier}
                alt="Mãos da artesã modelando porcelana fria no ateliê"
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bark-900/25 to-transparent" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-3 -top-6 flex items-center gap-2.5 rounded-2xl bg-white px-4 py-3 shadow-card sm:-right-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-terra-100">
                <Brush className="h-5 w-5 text-terra-600" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-bark-900">
                  Cada peça é única
                </p>
                <p className="text-xs font-bold text-bark-400">
                  nenhuma sai igual à outra
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Texto */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="font-script text-3xl text-terra-500">
              conheça o ateliê
            </span>
            <h2 className="mt-2 font-display text-4xl font-semibold leading-tight text-bark-900 sm:text-5xl">
              A arte nasce das{" "}
              <span className="italic text-terra-600">mãos</span> e do{" "}
              <span className="italic text-gold-500">coração</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-bark-500">
              No <strong className="text-bark-700">Artes em Biscuitt</strong>,
              cada encomenda é tratada como uma história a ser contada. Da
              primeira mexida na massa até a última pincelada, modelamos
              sentimentos em porcelana fria — para que o seu momento mais
              especial vire uma lembrança para a vida inteira.
            </p>
          </Reveal>

          <div className="mt-8 space-y-4">
            {checkItems.map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.1, duration: 0.6 }}
                className="flex items-center gap-4"
              >
                <motion.div
                  whileHover={{ rotate: -8, scale: 1.1 }}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white shadow-soft ring-1 ring-cream-200"
                >
                  <item.icon className="h-5 w-5 text-olive-500" />
                </motion.div>
                <p className="font-bold text-bark-700">{item.text}</p>
              </motion.div>
            ))}
          </div>

          <Reveal delay={0.35}>
            <p className="mt-8 font-script text-2xl text-terra-600">
              "A maior recompensa é ver o sorriso de quem recebe."
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
