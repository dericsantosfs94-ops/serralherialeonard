/**
 * Estilo: Esmeralda & Ouro (ideas.md)
 * Seção Sobre: mosaico editorial com fotos reais (Loja + Leonard na oficina),
 * história de 30 anos e pilares de confiança. Fundo carvão.
 */
import { CheckCircle2, MapPin, Clock, ShieldCheck } from "lucide-react";
import { FadeUp } from "./FadeUp";
import { IMAGES } from "../data/company";

export function About() {
  return (
    <section id="sobre" className="relative py-24 md:py-32 bg-[var(--background)] overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08] bg-cover bg-center" style={{ backgroundImage: `url(${IMAGES.textureCharcoal})` }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <FadeUp>
          <div className="flex items-center gap-5 mb-14">
            <span className="gold-line flex-1" />
            <span className="eyebrow">Nossa história e compromisso</span>
            <span className="gold-line flex-1" />
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Foto única da loja */}
          <div className="lg:col-span-5">
            <FadeUp>
              <div className="photo-frame gold-corner rounded-sm overflow-hidden bg-[var(--paper-muted)] border border-[var(--emerald-deep)]/15%">
                <img
                  src={IMAGES.loja}
                  alt="Fachada da loja da Leonard em Fragoso, Magé"
                  className="w-full aspect-video object-cover"
                />
              </div>
              <p className="mt-2.5 text-[0.68rem] tracking-[0.2em] uppercase text-[var(--emerald-deep)]">Nossa loja · Fragoso, Magé - RJ</p>
            </FadeUp>
          </div>

          {/* Texto */}
          <div className="lg:col-span-7 lg:pl-6">
            <FadeUp>
              <h2 className="font-display text-[2.2rem] leading-[1.12] sm:text-[3rem] font-semibold text-[var(--foreground)]">
                Três décadas fazendo o que amamos,
                <br />
                <span className="text-[var(--emerald-deep)]">no bairro onde crescemos.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={80}>
              <p className="mt-6 text-[1rem] md:text-[1.08rem] leading-relaxed text-[oklch(0.38_0.018_150)] font-light">
                A <strong className="font-semibold text-[var(--foreground)] font-normal">Vidraçaria e Serralheria Leonard</strong> nasceu e cresceu em
                Fragoso, Magé. Há mais de 30 anos, Leonard e sua equipe transformam
                ferro, alumínio e vidro em portões, coberturas, esquadrias e
                soluções sob medida — com acabamento cuidadoso em cada projeto.
              </p>
              <p className="mt-4 text-[1rem] md:text-[1.08rem] leading-relaxed text-[oklch(0.46_0.015_150)] font-light">
                Atendemos residências, comércios e obras em toda a região de
                Magé - RJ, do orçamento ao acabamento final. Todas as fotos
                deste site são de projetos reais, fabricados e instalados pela
                nossa equipe.
              </p>
            </FadeUp>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: CheckCircle2, t: "Experiência comprovada", d: "Três décadas de atuação sólida no mercado local." },
                { icon: MapPin, t: "Atendimento local", d: "Fábrica e loja em Fragoso, Magé - RJ, com equipe própria." },
                { icon: Clock, t: "Tudo sob medida", d: "Cada portão, vidro e estrutura é fabricado para o seu projeto." },
                { icon: ShieldCheck, t: "Garantia de execução", d: "Fabricação, pintura e instalação com acabamento refinado." },
              ].map((f, i) => (
                <FadeUp key={f.t} delay={i * 70}>
                  <div className="flex items-start gap-3.5 p-4.5 bg-[var(--paper-muted)] border border-[var(--emerald-deep)]/12% rounded-sm hover:border-[var(--emerald-deep)]/28% transition-colors duration-300">
                    <f.icon className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-[0.92rem] font-semibold text-[var(--foreground)]">{f.t}</h3>
                      <p className="mt-1 text-[0.82rem] text-[var(--muted-foreground)] leading-relaxed">{f.d}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
