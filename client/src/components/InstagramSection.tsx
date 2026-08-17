/**
 * Estilo: Esmeralda & Ouro (ideas.md)
 * Faixa Instagram com foto real da loja, fundo esmeralda profundo.
 * 
 * AUDITORIA 2026: Substituída imagem de bastidor por foto institucional da loja,
 * alinhando com direção mais profissional e focada em conversão.
 */
import { Instagram, ArrowRight } from "lucide-react";
import { companyData, IMAGES } from "../data/company";
import { FadeUp } from "./FadeUp";

export function InstagramSection() {
  return (
    <section className="relative py-20 md:py-24 bg-[var(--paper-green)] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] bg-cover bg-center pointer-events-none" style={{ backgroundImage: `url(${IMAGES.textureEmerald})` }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <FadeUp className="lg:col-span-6">
            <div className="photo-frame gold-corner rounded-sm overflow-hidden max-w-md">
              <img src={IMAGES.foto13} alt="Instalação de divisória em alumínio e vidro executada pela Leonard em Magé" className="w-full h-[340px] object-cover" />
            </div>
          </FadeUp>
          <FadeUp delay={100} className="lg:col-span-6">
            <span className="eyebrow">Acompanhe nosso dia a dia</span>
            <h2 className="mt-4 font-display text-[2.1rem] leading-[1.12] sm:text-[2.8rem] font-semibold text-[var(--foreground)]">
              Novos projetos toda semana <span className="text-[var(--emerald-deep)]">no Instagram</span>
            </h2>
            <p className="mt-5 text-[1.02rem] text-[oklch(0.38_0.018_150)] font-light leading-relaxed">
              Conheça os projetos finalizados, a estrutura da nossa oficina e o
              compromisso da Leonard com a qualidade em cada detalhe.
            </p>
            <a
              href={companyData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 px-7 py-4 border border-[var(--emerald-deep)]/28% text-[var(--foreground)] hover:bg-[var(--gold)] hover:border-[var(--gold)] hover:text-[oklch(0.18_0.04_168)] font-semibold tracking-[0.08em] uppercase text-sm rounded-sm transition-all duration-300 active:scale-[0.97]"
            >
              <Instagram className="w-5 h-5" />
              Seguir {companyData.instagramHandle}
              <ArrowRight className="w-4 h-4" />
            </a>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
