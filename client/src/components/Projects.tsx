/**
 * Estilo: Esmeralda & Ouro (ideas.md)
 * Projetos reais: filtros em versalete, grid assimétrico com destaque,
 * lightbox elegante com CTA "Orçar projeto semelhante".
 */
import { useState } from "react";
import { X, MessageCircle, ArrowRight } from "lucide-react";
import { companyData, IMAGES, type PortfolioItem } from "../data/company";
import { FadeUp } from "./FadeUp";

const categories = [
  { id: "todos", label: "Todos os projetos" },
  { id: "portoes", label: "Portões" },
  { id: "vidros", label: "Vidros & Coberturas" },
  { id: "esquadrias", label: "Esquadrias & Divisórias" },
  { id: "coberturas", label: "Pergolados" },
  { id: "bastidores", label: "Oficina & Obras" },
];

const catLabel: Record<string, string> = {
  portoes: "Portões",
  vidros: "Vidros",
  esquadrias: "Esquadrias",
  coberturas: "Pergolados",
  bastidores: "Bastidores",
  fachada: "Nossa Loja",
};

export function Projects() {
  const [selected, setSelected] = useState("todos");
  const [active, setActive] = useState<PortfolioItem | null>(null);

  const filtered = selected === "todos"
    ? companyData.portfolio
    : companyData.portfolio.filter((p) => p.category === selected);

  return (
    <section id="projetos" className="relative py-24 md:py-32 bg-[var(--emerald-deep)] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.35] bg-cover bg-center pointer-events-none" style={{ backgroundImage: `url(${IMAGES.textureEmerald})` }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <span className="eyebrow">Galeria de projetos reais</span>
          <h2 className="mt-4 font-display text-[2.2rem] leading-[1.1] sm:text-[3.1rem] font-semibold text-[var(--cream)]">
            Obras que falam <span className="text-[var(--gold-soft)]">por nós</span>
          </h2>
          <p className="mt-5 text-[1.05rem] text-[oklch(0.8_0.01_85)] font-light max-w-2xl">
            Nada de foto de banco de imagem: tudo o que você vê aqui foi
            fabricado e instalado pela nossa equipe em Magé e região.
          </p>
        </FadeUp>

        <FadeUp delay={100}>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelected(c.id)}
                className={`px-4.5 py-2.5 text-[0.7rem] font-medium tracking-[0.16em] uppercase rounded-sm border transition-all duration-300 ${
                  selected === c.id
                    ? "bg-[var(--gold)] border-[var(--gold)] text-[oklch(0.18_0.04_168)]"
                    : "border-[var(--gold)/28%] text-[var(--cream)] hover:border-[var(--gold)] hover:text-[var(--gold-soft)]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((p, i) => (
            <FadeUp key={p.id} delay={(i % 3) * 70}>
              <button
                onClick={() => setActive(p)}
                className={`group text-left w-full bg-[oklch(0.2_0.01_165)] border border-[oklch(0.72_0.11_85/0.1%)] rounded-sm overflow-hidden hover:border-[var(--gold)/40%] transition-all duration-500 ${p.featured ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="photo-frame relative">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className={`w-full object-cover ${p.featured ? "h-72" : "h-56"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.02_168/0.8)] via-transparent to-transparent opacity-80" />
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 bg-[oklch(0.16_0.04_168/0.85)] backdrop-blur border border-[var(--gold)/35%] text-[0.6rem] tracking-[0.2em] uppercase text-[var(--gold-soft)] rounded-sm">
                    {catLabel[p.category]}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-[1.2rem] font-semibold text-[var(--cream)] group-hover:text-[var(--gold-soft)] transition-colors duration-500">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-[0.78rem] text-[var(--smoke)]">{p.location}</p>
                </div>
              </button>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[oklch(0.1_0.03_168/0.92)] backdrop-blur-md p-4"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90svh] bg-[var(--charcoal)] border border-[var(--gold)/30%] rounded-sm overflow-hidden grid md:grid-cols-[1.4fr_1fr]"
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
              <span className="eyebrow">{catLabel[active.category]}</span>
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
