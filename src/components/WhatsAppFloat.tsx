import { motion } from "framer-motion";
import WhatsAppIcon from "./WhatsAppIcon";
import { DEFAULT_MESSAGE, waLink } from "../utils/whatsapp";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={waLink(DEFAULT_MESSAGE)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay: 1.6,
        type: "spring",
        stiffness: 200,
        damping: 16,
      }}
      whileHover={{ scale: 1.12, rotate: 6 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-wpp-500 text-white shadow-2xl shadow-wpp-500/40"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-wpp-400 opacity-30" />
      <WhatsAppIcon className="relative h-7 w-7" />
      <motion.span
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-terra-500 text-[10px] font-extrabold text-white shadow-md"
      >
        1
      </motion.span>
    </motion.a>
  );
}
