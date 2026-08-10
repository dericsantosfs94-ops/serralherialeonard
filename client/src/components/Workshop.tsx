/**
 * Estilo: Esmeralda & Ouro (ideas.md)
 * Oficina & Bastidores: faixa de fotos reais da equipe em ação,
 * com texto pessoal do fundador. Fundo esmeralda.
 * 
 * AUDITORIA 2026: Removidas imagens com problemas de enquadramento.
 * Mantidas apenas as que mostram trabalho profissional e acabamento.
 */
import { FadeUp } from "./FadeUp";
import { IMAGES } from "../data/company";

const shots = [
  { img: IMAGES.foto3, alt: "Trabalho em andamento na oficina da Vidraçaria e Serralheria Leonard" },
  { img: IMAGES.foto12, alt: "Projeto em execução pela equipe da Leonard" },
  { img: IMAGES.foto24, alt: "Acabamento e montagem realizados na oficina Leonard" },
];

export function Workshop() {
  return (
    <section id="oficina" className="relative py-24 md:py-28 bg-[var(--emerald-deep)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="flex items-center gap-5 mb-5">
            <span className="gold-line flex-1" />
            <span className="eyebrow">Oficina &amp; Bastidores</span>
            <span className="gold-line flex-1" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <h2 className="lg:col-span-7 font-display text-[2.2rem] leading-[1.1] sm:text-[3rem] font-semibold text-[var(--cream)]">
              Da nossa oficina para a <span className="text-[var(--gold-soft)]">sua obra</span>
            </h2>
            <p className="lg:col-span-5 text-[1rem] text-[oklch(0.8_0.01_85)] font-light leading-relaxed">
              Cortamos, soldamos, pintamos e instalamos com equipe própria. É
              esse cuidado artesanal que faz a diferença no acabamento final.
            </p>
          </div>
        </FadeUp>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shots.map((s, i) => (
            <FadeUp key={s.img} delay={i * 60} className="w-full">
              <div className="photo-frame rounded-sm overflow-hidden h-full">
                <img src={s.img} alt={s.alt} loading="lazy" className="w-full h-[230px] sm:h-[260px] lg:h-[300px] object-cover" />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
