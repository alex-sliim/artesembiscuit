import { motion } from "framer-motion";
import { MessageCircle, Palette, Package, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { DEFAULT_MESSAGE, waLink } from "../utils/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

const steps = [
  {
    icon: MessageCircle,
    title: "Chame no WhatsApp",
    text: "Conte sua ideia: ocasião, tema, cores e tudo o que estiver imaginando para a sua peça.",
  },
  {
    icon: Palette,
    title: "Criamos juntos",
    text: "Definimos referências, cores e cada detalhe da personalização — a peça nasce do seu sonho.",
  },
  {
    icon: Package,
    title: "Produção artesanal",
    text: "Modelamos, pintamos e finalizamos à mão. Você acompanha as etapas e vê sua peça ganhar vida.",
  },
  {
    icon: Sparkles,
    title: "Receba e se encante",
    text: "Retirada ou envio com embalagem superprotegida. Depois é só viver o encantamento.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative overflow-hidden bg-gradient-to-b from-olive-100/60 via-cream-100 to-cream-50 py-20 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-script text-3xl text-olive-500">
            simples, rápido e carinhoso
          </span>
          <h2 className="mt-2 font-display text-4xl font-semibold leading-tight text-bark-900 sm:text-5xl">
            Como funciona a <span className="italic text-olive-600">encomenda</span>
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* Linha conectora (desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="absolute left-[12%] right-[12%] top-9 hidden h-0.5 origin-left bg-gradient-to-r from-olive-300 via-terra-300 to-gold-300 lg:block"
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.08, rotate: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="relative mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-[1.4rem] bg-white shadow-soft ring-1 ring-cream-200"
                >
                  <step.icon className="h-7 w-7 text-terra-500 transition-colors duration-300 group-hover:text-olive-500" />
                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-terra-500 font-display text-sm font-bold text-white shadow-md">
                    {i + 1}
                  </span>
                </motion.div>
                <h3 className="mt-5 font-display text-xl font-semibold text-bark-900">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-bark-500">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <Reveal delay={0.2} className="mt-14 text-center">
          <motion.a
            href={waLink(DEFAULT_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="inline-flex items-center gap-3 rounded-full bg-terra-500 px-9 py-4 text-base font-extrabold text-white shadow-xl shadow-terra-500/30 transition-colors hover:bg-terra-600"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Começar minha encomenda
          </motion.a>
        </Reveal>
      </div>
    </section>
  );
}
