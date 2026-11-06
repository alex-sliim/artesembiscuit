import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, Flower2, Gift, Heart, Sparkles, Star } from "lucide-react";
import logo from "../assets/artesembiscuitt.png";
import { heroAvatars } from "../data/content";
import { DEFAULT_MESSAGE, waLink } from "../utils/whatsapp";
import WhatsAppIcon from "./WhatsAppIcon";

function CountUp({
  to,
  suffix = "",
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const floatingChips = [
  {
    label: "Topo de bolo",
    icon: Heart,
    className: "left-[-4%] top-[16%] sm:left-[2%]",
    delay: 0,
  },
  {
    label: "Lembrancinhas",
    icon: Gift,
    className: "right-[-2%] top-[8%] sm:right-[4%]",
    delay: 1.2,
  },
  {
    label: "Presentes únicos",
    icon: Sparkles,
    className: "bottom-[18%] right-[0%] sm:right-[6%]",
    delay: 2.1,
  },
];

const stats = [
  { value: 850, suffix: "+", label: "peças criadas à mão" },
  { value: 400, suffix: "+", label: "clientes encantados" },
  { value: 4.9, suffix: "", label: "avaliação média", decimals: 1 },
  { value: 100, suffix: "%", label: "artesanal e único" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const logoX = useTransform(sx, [-1, 1], [-14, 14]);
  const logoY = useTransform(sy, [-1, 1], [-10, 10]);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set(((e.clientX - rect.left) / rect.width) * 2 - 1);
    my.set(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  return (
    <section
      id="inicio"
      ref={sectionRef}
      onMouseMove={handleMouse}
      className="relative overflow-hidden pt-28 sm:pt-32"
    >
      {/* Blobs de fundo */}
      <div className="pointer-events-none absolute -left-40 -top-24 h-[34rem] w-[34rem] rounded-full bg-terra-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-44 top-40 h-[30rem] w-[30rem] rounded-full bg-olive-200/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-gold-300/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pb-24">
        {/* Coluna de texto */}
        <div className="relative z-10 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-terra-200 bg-white/70 px-4 py-2 shadow-sm backdrop-blur lg:mx-0"
          >
            <Sparkles className="h-4 w-4 text-terra-500" />
            <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-terra-700">
              Porcelana fria artesanal
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] text-bark-900 sm:text-6xl lg:text-[4.2rem]"
          >
            Feito à mão,
            <br />
            guardado{" "}
            <span className="relative inline-block">
              <span className="font-script text-[1.25em] text-terra-500">
                para sempre
              </span>
              <svg
                className="absolute -bottom-3 left-0 w-full"
                viewBox="0 0 220 14"
                fill="none"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  d="M4 10 C 60 2, 160 2, 216 8"
                  stroke="var(--color-gold-500)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            no coração
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-bark-500 lg:mx-0"
          >
            Topos de bolo, lembrancinhas e presentes em biscuit modelados um a
            um para eternizar seus momentos mais especiais.{" "}
            <span className="font-bold text-terra-600">
              Peça seu orçamento direto no WhatsApp
            </span>{" "}
            — é rápido, fácil e sem compromisso.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <motion.a
              href={waLink(DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-wpp-500 px-8 py-4 text-base font-extrabold text-white shadow-xl shadow-wpp-500/35 sm:w-auto"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <WhatsAppIcon className="h-5 w-5" />
              Chamar no WhatsApp
            </motion.a>
            <motion.a
              href="#criacoes"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="group flex w-full items-center justify-center gap-2 rounded-full border-2 border-bark-900/15 bg-white/60 px-8 py-4 text-base font-extrabold text-bark-900 backdrop-blur transition-colors hover:border-terra-400 hover:text-terra-600 sm:w-auto"
            >
              Ver criações
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
            </motion.a>
          </motion.div>

          {/* Prova social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-9 flex items-center justify-center gap-4 lg:justify-start"
          >
            <div className="flex -space-x-3">
              {heroAvatars.map((avatar, i) => (
                <motion.img
                  key={avatar}
                  src={avatar}
                  alt="Cliente satisfeita"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    delay: 0.8 + i * 0.12,
                    type: "spring",
                    stiffness: 260,
                    damping: 16,
                  }}
                  className="h-11 w-11 rounded-full border-[3px] border-cream-50 object-cover shadow-md"
                />
              ))}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.3,
                  type: "spring",
                  stiffness: 260,
                  damping: 16,
                }}
                className="flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-cream-50 bg-terra-500 text-xs font-extrabold text-white shadow-md"
              >
                +400
              </motion.div>
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, rotate: -30, scale: 0 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    transition={{ delay: 1 + i * 0.08, type: "spring" }}
                  >
                    <Star className="h-4 w-4 fill-gold-400 text-gold-400" />
                  </motion.span>
                ))}
                <span className="ml-1 text-sm font-extrabold text-bark-900">
                  4.9
                </span>
              </div>
              <p className="text-sm font-bold text-bark-400">
                clientes que amaram suas peças
              </p>
            </div>
          </motion.div>
        </div>

        {/* Coluna visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <motion.div style={{ x: logoX, y: logoY }} className="relative">
            {/* Blob orgânico animado */}
            <motion.div
              animate={{
                borderRadius: [
                  "42% 58% 60% 40% / 45% 42% 58% 55%",
                  "58% 42% 40% 60% / 55% 58% 42% 45%",
                  "42% 58% 60% 40% / 45% 42% 58% 55%",
                ],
                rotate: [0, 8, 0],
              }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-[4%] bg-gradient-to-br from-terra-300 via-terra-200 to-gold-300 opacity-70 blur-[2px]"
            />
            <motion.div
              animate={{
                borderRadius: [
                  "55% 45% 42% 58% / 50% 55% 45% 50%",
                  "45% 55% 58% 42% / 55% 45% 58% 42%",
                  "55% 45% 42% 58% / 50% 55% 45% 50%",
                ],
                rotate: [0, -10, 0],
              }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-[10%] bg-olive-200/70"
            />

            {/* Logo flutuando */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto aspect-square w-[86%]"
            >
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-gold-400/60 animate-spin-slow" />
              <div className="absolute inset-[5%] overflow-hidden rounded-full bg-[#f3efe2] shadow-card ring-4 ring-white">
                <img
                  src={logo}
                  alt="Artes em Biscuitt — artesã modelando porcelana fria"
                  className="h-full w-full scale-[1.08] object-contain"
                />
              </div>
            </motion.div>

            {/* Selo giratório */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-2 left-[6%] flex h-28 w-28 items-center justify-center"
            >
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <defs>
                  <path
                    id="badge-circle"
                    d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <circle cx="50" cy="50" r="49" className="fill-terra-500" />
                <circle cx="50" cy="50" r="27" className="fill-terra-600" />
                <text className="fill-cream-50" fontSize="10.5" fontWeight="800" letterSpacing="2.5">
                  <textPath href="#badge-circle">
                    FEITO À MÃO • COM AMOR • FEITO À MÃO •
                  </textPath>
                </text>
                <Flower2 className="text-cream-50" x="41" y="41" width="18" height="18" />
              </svg>
            </motion.div>

            {/* Chips flutuantes */}
            {floatingChips.map((chip) => (
              <motion.div
                key={chip.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.9 + chip.delay * 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 14,
                }}
                className={`absolute ${chip.className}`}
              >
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: chip.delay,
                  }}
                  className="flex items-center gap-2 rounded-full border border-white/60 bg-white/85 px-4 py-2.5 shadow-soft backdrop-blur-md"
                >
                  <chip.icon className="h-4 w-4 text-terra-500" />
                  <span className="text-sm font-extrabold text-bark-700">
                    {chip.label}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Barra de estatísticas */}
      <div className="relative mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-y-8 rounded-[2rem] border border-cream-200 bg-white/70 px-6 py-8 shadow-soft backdrop-blur md:grid-cols-4 lg:py-10"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="font-display text-4xl font-bold text-terra-600 lg:text-5xl">
                <CountUp
                  to={stat.value}
                  suffix={stat.suffix}
                  decimals={stat.decimals ?? 0}
                />
              </div>
              <p className="mt-1 text-xs font-extrabold uppercase tracking-[0.14em] text-bark-400 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
