import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { useScrollY, whatsappLink } from "../hooks";
import { WhatsAppIcon } from "./Icons";

export default function WhatsAppButton() {
  const y = useScrollY();
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowTip(true), 3500);
    const h = setTimeout(() => setShowTip(false), 10000);
    return () => {
      clearTimeout(t);
      clearTimeout(h);
    };
  }, []);

  return (
    <div className={cn("fixed bottom-5 right-5 z-[60] flex items-center gap-3 transition-all duration-500 sm:bottom-7 sm:right-7", y > 200 ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0")}>
      <div
        className={cn(
          "hidden rounded-2xl rounded-br-sm bg-white px-4 py-3 text-sm shadow-xl shadow-cocoa-800/15 transition-all duration-500 sm:block",
          showTip ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-4 opacity-0"
        )}
      >
        <p className="font-semibold text-cocoa-900">Olá! 👋</p>
        <p className="text-cocoa-700/80">Vamos criar sua peça?</p>
      </div>
      <a
        href={whatsappLink("Olá! Vim pelo site e gostaria de mais informações sobre as peças em biscuit.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        className="group relative flex h-15 w-15 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
        style={{ width: "3.75rem", height: "3.75rem" }}
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" />
        <WhatsAppIcon className="relative h-8 w-8 transition-transform group-hover:rotate-12" />
      </a>
    </div>
  );
}
