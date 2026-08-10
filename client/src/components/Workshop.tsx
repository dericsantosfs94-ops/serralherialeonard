/**
 * Estilo: Esmeralda & Ouro (ideas.md)
 * Oficina & Bastidores: faixa de fotos reais da equipe em ação,
 * com texto pessoal do fundador. Fundo esmeralda.
 */
import { FadeUp } from "./FadeUp";
import { IMAGES } from "../data/company";

const shots = [
  { img: IMAGES.foto14, alt: "Montagem de caixilhos de alumínio na oficina Leonard" },
  { img: IMAGES.foto5, alt: "Obra interna com andaime e esquadrias em instalação" },
  { img: IMAGES.foto4, alt: "Leonardo em obra com estrutura de cobertura em execução" },
  { img: IMAGES.foto22, alt: "Portões brancos entregues na residência do cliente" },
  { img: IMAGES.portaoEntregaCaminhao, alt: "Portão preto transportado com caminhão próprio" },
  { img: IMAGES.foto24, alt: "Montagem de pergolado branco com equipe em andaime" },
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

        <div className="mt-12 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {shots.map((s, i) => (
            <FadeUp key={s.img} delay={i * 60} className="shrink-0 w-[260px] sm:w-[320px] snap-start">
              <div className="photo-frame rounded-sm overflow-hidden">
                <img src={s.img} alt={s.alt} loading="lazy" className="w-full h-[230px] sm:h-[260px] object-cover" />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
