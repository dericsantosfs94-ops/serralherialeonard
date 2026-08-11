/**
 * Estilo: Esmeralda & Ouro (ideas.md)
 * Capítulo de categoria: título serifado, eyebrow dourado, mosaico
 * 1 grande + 2 pequenas com fotos reais e CTA temático de WhatsApp.
 * Ao clicar nas fotos, abre um lightbox com os detalhes do projeto.
 */
import { useState } from "react";
import { MessageCircle, X, ArrowRight } from "lucide-react";
import type { PortfolioItem } from "../data/company";
import { companyData } from "../data/company";
import { FadeUp } from "./FadeUp";

const catLabel: Record<string, string> = {
  portoes: "Portões",
  vidros: "Vidros",
  esquadrias: "Esquadrias & Divisórias",
  coberturas: "Coberturas & Pergolados",
  bastidores: "Oficina & Obras",
  fachada: "Nossa Loja",
};

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
  const [active, setActive] = useState<PortfolioItem | null>(null);
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          <FadeUp className={`md:col-span-7 ${reversed ? "md:order-2" : ""}`}>
            <button onClick={() => setActive(big)} className="group block w-full text-left" aria-label={`Ver detalhes do projeto ${big.title}`}>
              <div className="photo-frame gold-corner rounded-sm overflow-hidden bg-[oklch(0.16_0.006_70)]">
                <div className="relative">
                  <img src={big.image} alt={big.title} className="w-full h-[300px] sm:h-[420px] object-cover" />
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 bg-[oklch(0.16_0.04_168/0.85)] backdrop-blur border border-[var(--gold)/35%] text-[0.6rem] tracking-[0.2em] uppercase text-[var(--gold-soft)] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Ver detalhes <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
              <div className="mt-3.5 pr-1">
                <span className="eyebrow !text-[0.6rem]">{catLabel[big.category] ?? big.category}</span>
                <h3 className="mt-1.5 font-display text-[1.5rem] md:text-[1.75rem] font-semibold text-[var(--cream)] group-hover:text-[var(--gold-soft)] transition-colors">{big.title}</h3>
                <p className="mt-1 text-[0.85rem] text-[oklch(0.82_0.01_90)] font-light">{big.description}</p>
              </div>
            </button>
          </FadeUp>

          <div className={`md:col-span-5 grid gap-5 ${reversed ? "md:order-1" : ""}`}>
            {small.slice(0, 2).map((it, i) => (
              <FadeUp key={it.id} delay={i * 90}>
                <button onClick={() => setActive(it)} className="group block w-full text-left" aria-label={`Ver detalhes do projeto ${it.title}`}>
                  <div className="photo-frame rounded-sm overflow-hidden bg-[oklch(0.16_0.006_70)]">
                    <img src={it.image} alt={it.title} className="w-full h-[190px] sm:h-[200px] object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <p className="mt-2.5 text-[0.8rem] font-medium text-[var(--cream)] group-hover:text-[var(--gold-soft)] transition-colors">{it.title}</p>
                  <p className="text-[0.75rem] text-[var(--smoke)]">{it.description}</p>
                </button>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[oklch(0.1_0.03_168/0.92)] backdrop-blur-md p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90svh] bg-[var(--charcoal)] border border-[var(--gold)/30%] rounded-sm overflow-y-auto grid md:grid-cols-[1.4fr_1fr]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[oklch(0.16_0.01_70/0.8)] border border-[var(--gold)/30%] text-[var(--cream)] rounded-sm hover:text-[var(--gold-soft)] transition-colors"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
            <img src={active.image} alt={active.title} className="w-full h-full object-cover max-h-[50svh] md:max-h-[90svh]" />
            <div className="p-8 flex flex-col">
              <span className="eyebrow">{catLabel[active.category] ?? active.category}</span>
              <h3 className="mt-3 font-display text-[1.8rem] leading-tight font-semibold text-[var(--cream)]">{active.title}</h3>
              <p className="mt-1.5 text-[0.8rem] tracking-[0.14em] uppercase text-[var(--gold-soft)]">{active.location}</p>
              <p className="mt-5 text-[0.95rem] text-[oklch(0.8_0.01_85)] leading-relaxed font-light">{active.description}</p>
              <a
                href={`https://wa.me/${companyData.whatsappClean}?text=${encodeURIComponent(`Olá! Vi o projeto "${active.title}" no site da Leonard e gostaria de solicitar um orçamento semelhante.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-6 inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[var(--leonard)] hover:bg-[var(--leonard-dark)] text-white text-[0.76rem] font-semibold tracking-[0.12em] uppercase rounded-sm transition-all active:scale-[0.97]"
              >
                <MessageCircle className="w-4 h-4" />
                Orçar projeto semelhante
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
