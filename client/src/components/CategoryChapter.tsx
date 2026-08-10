/**
 * Estilo: Esmeralda & Ouro (ideas.md)
 * Capítulo de categoria: título serifado, eyebrow dourado, mosaico
 * 1 grande + 2 pequenas com fotos reais e CTA temático de WhatsApp.
 */
import { MessageCircle } from "lucide-react";
import type { PortfolioItem } from "../data/company";
import { companyData } from "../data/company";
import { FadeUp } from "./FadeUp";

export function CategoryChapter({
  eyebrow,
  title,
  titleAccent,
  description,
  items,
  reversed = false,
  anchor,
  ctaLabel,
  ctaMsg,
  tone = "emerald",
}: {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  description: string;
  items: PortfolioItem[];
  reversed?: boolean;
  anchor: string;
  ctaLabel: string;
  ctaMsg: string;
  tone?: "emerald" | "charcoal";
}) {
  const [big, ...small] = items;
  const bg = tone === "emerald" ? "bg-[var(--emerald-deep)]" : "bg-[var(--charcoal)]";
  const cta = `https://wa.me/${companyData.whatsappClean}?text=${encodeURIComponent(ctaMsg)}`;

  return (
    <section id={anchor} className={`relative py-24 md:py-32 ${bg} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14">
            <div className={`lg:col-span-7 ${reversed ? "lg:order-2" : ""}`}>
              <span className="eyebrow">{eyebrow}</span>
              <h2 className="mt-4 font-display text-[2.2rem] leading-[1.1] sm:text-[3.1rem] font-semibold text-[var(--cream)]">
                {title}
                {titleAccent && (
                  <span className="text-[var(--gold-soft)]">{titleAccent}</span>
                )}
              </h2>
            </div>
            <div className={`lg:col-span-5 ${reversed ? "lg:order-1" : ""}`}>
              <p className="text-[1rem] leading-relaxed text-[oklch(0.78_0.01_85)] font-light">{description}</p>
              <a
                href={cta}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2.5 px-6 py-3.5 bg-[var(--leonard)] hover:bg-[var(--leonard-dark)] text-white text-[0.78rem] font-semibold tracking-[0.1em] uppercase rounded-sm shadow-[0_6px_22px_rgba(46,158,68,0.3)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97]"
              >
                <MessageCircle className="w-4 h-4" />
                {ctaLabel}
              </a>
            </div>
          </div>
        </FadeUp>

        {/* Mosaico */}
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-5 ${reversed ? "" : ""}`}>
          <FadeUp className={`md:col-span-7 ${reversed ? "md:order-2" : ""}`}>
            <div className="photo-frame gold-corner rounded-sm overflow-hidden bg-[oklch(0.16_0.006_70)]">
              <div className="relative">
                <img src={big.image} alt={big.title} className="w-full h-[300px] sm:h-[420px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.02_168/0.75)] via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <span className="eyebrow !text-[0.6rem]">{big.category === "portoes" ? "Portões" : big.category === "vidros" ? "Vidraçaria" : big.category}</span>
                  <h3 className="mt-1.5 font-display text-[1.5rem] md:text-[1.75rem] font-semibold text-[var(--cream)]">{big.title}</h3>
                  <p className="mt-1 text-[0.85rem] text-[oklch(0.82_0.01_90)] font-light">{big.description}</p>
                </div>
              </div>
            </div>
          </FadeUp>

          <div className={`md:col-span-5 grid gap-5 ${reversed ? "md:order-1" : ""}`}>
            {small.slice(0, 2).map((it, i) => (
              <FadeUp key={it.id} delay={i * 90}>
                <div className="photo-frame rounded-sm overflow-hidden bg-[oklch(0.16_0.006_70)]">
                  <img src={it.image} alt={it.title} className="w-full h-[190px] sm:h-[200px] object-cover" />
                </div>
                <p className="mt-2.5 text-[0.8rem] font-medium text-[var(--cream)]">{it.title}</p>
                <p className="text-[0.75rem] text-[var(--smoke)]">{it.description}</p>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
