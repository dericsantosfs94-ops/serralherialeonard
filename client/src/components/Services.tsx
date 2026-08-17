/**
 * Estilo: Esmeralda & Ouro (ideas.md)
 * Serviços: grid editorial em fundo carvão, ícones dourados em molduras
 * finas, cards com hover de borda dourada e CTA de WhatsApp por serviço.
 */
import {
  Maximize2, Columns, Layers, Grid, Shield, DoorClosed, Cpu,
  Paintbrush, LayoutGrid, Home, Square, Wrench, MessageCircle,
} from "lucide-react";
import { companyData, type ServiceItem } from "../data/company";
import { FadeUp } from "./FadeUp";

const iconMap: Record<string, React.ReactNode> = {
  Maximize2: <Maximize2 className="w-5 h-5" />,
  Columns: <Columns className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Grid: <Grid className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  DoorClosed: <DoorClosed className="w-5 h-5" />,
  Cpu: <Cpu className="w-5 h-5" />,
  Paintbrush: <Paintbrush className="w-5 h-5" />,
  LayoutGrid: <LayoutGrid className="w-5 h-5" />,
  Home: <Home className="w-5 h-5" />,
  Square: <Square className="w-5 h-5" />,
};

export function Services() {
  return (
    <section id="servicos" className="relative py-24 md:py-32 bg-[var(--background)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="flex items-center gap-5 mb-5">
            <span className="gold-line flex-1" />
            <span className="eyebrow">O que fazemos</span>
            <span className="gold-line flex-1" />
          </div>
          <h2 className="font-display text-[2.2rem] leading-[1.1] sm:text-[3.1rem] font-semibold text-[var(--foreground)] text-center">
            Serviços completos, do projeto ao <span className="text-[var(--emerald-deep)]">acabamento</span>
          </h2>
          <p className="mt-5 text-center text-[1.05rem] text-[var(--muted-foreground)] font-light max-w-2xl mx-auto">
            Cada serviço é executado pela mesma equipe que fabrica — por isso o
            acabamento final tem a qualidade de quem cuida de ponta a ponta.
          </p>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {companyData.services.map((s: ServiceItem, i: number) => {
            const msg = `Olá! Vim pelo site da Vidraçaria e Serralheria Leonard e gostaria de solicitar um orçamento para o serviço de *${s.title}*.`;
            return (
              <FadeUp key={s.id} delay={(i % 3) * 70}>
                <div className="group h-full flex flex-col bg-[var(--paper-muted)] border border-[var(--emerald-deep)]/12% rounded-sm p-7 hover:border-[var(--emerald-deep)]/28% transition-colors duration-500">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 flex items-center justify-center border border-[var(--emerald-deep)]/25% text-[var(--gold)] rounded-sm group-hover:bg-[var(--gold)/10%] transition-colors duration-500">
                      {iconMap[s.iconName] ?? <Wrench className="w-5 h-5" />}
                    </div>
                    <span className="text-[0.62rem] tracking-[0.25em] uppercase text-[var(--muted-foreground)]/70">
                      {s.category === "aluminio" ? "Alumínio" : s.category === "vidros" ? "Vidros" : s.category === "serralheria" ? "Serralheria" : "Complementares"}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-[1.35rem] font-semibold text-[var(--foreground)] group-hover:text-[var(--emerald-deep)] transition-colors duration-500">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[0.88rem] text-[var(--muted-foreground)] leading-relaxed font-light flex-1">{s.description}</p>
                  <a
                    href={`https://wa.me/${companyData.whatsappClean}?text=${encodeURIComponent(msg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 py-2.5 border border-[var(--emerald-deep)]/20% text-[0.72rem] font-medium tracking-[0.14em] uppercase text-[var(--foreground)] hover:bg-[var(--leonard)] hover:border-[var(--leonard)] hover:text-white transition-all duration-300 rounded-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Orçar este serviço
                  </a>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
