import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import Reveal from "./Reveal";
import WhatsAppIcon from "./WhatsAppIcon";
import { products } from "../data/content";
import { waLink } from "../utils/whatsapp";

export default function Products() {
  return (
    <section id="criacoes" className="relative overflow-hidden py-20 lg:py-28">
      <div className="pointer-events-none absolute right-[-10%] top-24 h-96 w-96 rounded-full bg-terra-100 blur-3xl" />
      <div className="pointer-events-none absolute left-[-8%] bottom-24 h-80 w-80 rounded-full bg-olive-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="font-script text-3xl text-terra-500">
            o que criamos por aqui
          </span>
          <h2 className="mt-2 font-display text-4xl font-semibold leading-tight text-bark-900 sm:text-5xl">
            Criações que viram <span className="italic text-terra-600">lembrança</span> de verdade
          </h2>
          <p className="mt-4 text-lg text-bark-500">
            Cada peça é modelada e pintada à mão, uma por vez. Escolha a sua
            favorita e peça um orçamento personalizado — sem compromisso.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {products.map((product, i) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 48, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.75,
                delay: (i % 3) * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative ${product.rotate}`}
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[1.8rem] border border-cream-200 bg-white shadow-soft transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-0 group-hover:shadow-card">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bark-900/55 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3.5 py-1.5 text-xs font-extrabold uppercase tracking-wider text-terra-700 shadow-md backdrop-blur">
                    <BadgeCheck className="h-3.5 w-3.5 text-terra-500" />
                    {product.tag}
                  </div>
                  <div className="absolute bottom-4 right-4 flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-terra-500 text-white opacity-0 shadow-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-semibold text-bark-900">
                    {product.name}
                  </h3>
                  <p className="mt-2 flex-1 leading-relaxed text-bark-500">
                    {product.description}
                  </p>
                  <motion.a
                    href={waLink(product.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="mt-5 flex items-center justify-center gap-2 rounded-full bg-cream-100 px-5 py-3.5 font-extrabold text-terra-700 transition-colors duration-300 hover:bg-wpp-500 hover:text-white"
                  >
                    <WhatsAppIcon className="h-4.5 w-4.5" />
                    Pedir orçamento
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12 text-center">
          <p className="font-script text-2xl text-bark-400">
            Não encontrou o que procura? A gente cria{" "}
            <span className="text-terra-600">do zero</span>, do jeitinho que
            você imaginar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
