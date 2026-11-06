import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import Reveal from "./Reveal";
import { faqs } from "../data/content";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="duvidas" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="font-script text-3xl text-olive-500">
            ficou com alguma dúvida?
          </span>
          <h2 className="mt-2 font-display text-4xl font-semibold leading-tight text-bark-900 sm:text-5xl">
            Perguntas <span className="italic text-olive-600">frequentes</span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={faq.q} delay={i * 0.08}>
                <div
                  className={`overflow-hidden rounded-3xl border transition-all duration-300 ${
                    isOpen
                      ? "border-terra-300 bg-white shadow-soft"
                      : "border-cream-200 bg-white/70 hover:border-terra-200"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 px-6 py-5 text-left"
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isOpen ? "bg-terra-500" : "bg-cream-100"
                      }`}
                    >
                      <HelpCircle
                        className={`h-4.5 w-4.5 ${
                          isOpen ? "text-white" : "text-terra-500"
                        }`}
                      />
                    </span>
                    <span className="flex-1 font-display text-lg font-semibold text-bark-900">
                      {faq.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown
                        className={`h-5 w-5 ${
                          isOpen ? "text-terra-500" : "text-bark-400"
                        }`}
                      />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-6 pl-[4.75rem] leading-relaxed text-bark-500">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
