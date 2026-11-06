import { Cake, Flower2, Gift, Heart, Palette, Sparkles } from "lucide-react";

const items = [
  { label: "Topos de bolo", Icon: Cake },
  { label: "Lembrancinhas", Icon: Gift },
  { label: "Porta maternidade", Icon: Heart },
  { label: "Canecas decoradas", Icon: Flower2 },
  { label: "Presentes personalizados", Icon: Sparkles },
  { label: "Miniaturas de família", Icon: Palette },
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative z-10 -rotate-1 overflow-hidden bg-terra-500 py-4 shadow-lg shadow-terra-500/30">
      <div className="flex w-max animate-marquee items-center gap-8 pr-8">
        {row.map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            className="flex items-center gap-8 whitespace-nowrap"
          >
            <div className="flex items-center gap-3">
              <item.Icon className="h-5 w-5 text-cream-100" />
              <span className="font-display text-lg font-semibold tracking-wide text-cream-50">
                {item.label}
              </span>
            </div>
            <span className="h-1.5 w-1.5 rounded-full bg-gold-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
