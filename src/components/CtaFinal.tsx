import { motion } from "framer-motion";
import { Flower2, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";
import { DEFAULT_MESSAGE, WHATSAPP_DISPLAY, waLink } from "../utils/whatsapp";
import { LOGO_URL } from "../utils/whatsapp";

export default function CtaFinal() {
  return (
    <section className="relative px-5 pb-24 pt-6 sm:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-gradient-to-br from-terra-500 via-terra-600 to-bark-700 px-6 py-16 text-center shadow-card sm:py-20">
        {/* Decorações */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border-[3px] border-dashed border-cream-50/20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full border-[3px] border-dashed border-gold-300/30"
        />
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[8%] top-[16%] hidden text-cream-50/50 sm:block"
        >
          <Flower2 className="h-10 w-10" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 12, 0], rotate: [0, -10, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-[18%] right-[9%] hidden text-gold-300/60 sm:block"
        >
          <Sparkles className="h-10 w-10" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto h-24 w-24 overflow-hidden rounded-full border-4 border-cream-50/40 shadow-xl"
        >
          <img
            src={LOGO_URL}
            alt="Artes em Biscuitt"
            className="h-full w-full scale-[1.6] object-cover object-[50%_16%]"
          />
        </motion.div>

        <Reveal>
          <p className="mt-6 font-script text-3xl text-gold-300 sm:text-4xl">
            seu momento merece ser eterno
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-semibold leading-tight text-cream-50 sm:text-5xl">
            Vamos criar juntos uma peça que conta a sua história?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-cream-100/90">
            Orçamento personalizado, atendimento carinhoso e uma peça feita
            especialmente para você. É só chamar:
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-col items-center gap-4">
            <motion.a
              href={waLink(DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-cream-50 px-10 py-5 text-lg font-extrabold text-wpp-600 shadow-2xl transition-shadow hover:shadow-cream-50/30"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-wpp-500/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <WhatsAppIcon className="h-6 w-6" />
              Chamar no WhatsApp
            </motion.a>
            <span className="font-display text-xl font-semibold tracking-wider text-cream-100">
              {WHATSAPP_DISPLAY}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
