/**
 * Estilo: Esmeralda & Ouro (ideas.md)
 * Hero assimétrico: texto editorial à esquerda, retrato do Leonard em card
 * vertical com moldura dourada e selo "Fundador". Fundo textura esmeralda.
 */
import { ArrowRight, MapPin, MessageCircle, Award } from "lucide-react";
import { companyData, IMAGES } from "../data/company";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100svh] flex items-center pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden"
    >
      {/* Textura esmeralda */}
      <div
        className="absolute inset-0 opacity-60 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGES.textureEmerald})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.13_0.04_168/0.55)] via-transparent to-[oklch(0.17_0.045_168)]" />
      <div className="absolute -top-24 -right-32 w-[480px] h-[480px] rounded-full bg-[var(--leonard)]/10 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Coluna esquerda */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 border border-[var(--gold)/35%] rounded-sm bg-[oklch(0.72_0.11_85/0.06)] mb-8">
              <Award className="w-3.5 h-3.5 text-[var(--gold)]" />
              <span className="eyebrow">+30 anos de tradição em Magé - RJ</span>
            </div>

            <h1 className="font-display text-[2.6rem] leading-[1.05] sm:text-[3.6rem] md:text-[4.4rem] font-semibold text-[var(--cream)]">
              Ferro, alumínio e vidro
              <br />
              com a <em className="text-[var(--gold-soft)] not-italic font-medium">assinatura</em> de quem faz há três décadas.
            </h1>

            <p className="mt-6 text-[1.02rem] sm:text-[1.12rem] text-[oklch(0.82_0.012_90)] leading-relaxed max-w-xl font-light">
              Portões, coberturas de vidro, esquadrias e box sob medida —
              fabricados e instalados pela equipe da Leonard em Fragoso e toda a
              região de Magé.
            </p>

            <div className="mt-7 flex items-center gap-2.5 text-[0.85rem] text-[var(--smoke)]">
              <MapPin className="w-4 h-4 text-[var(--gold)] shrink-0" />
              <span>{companyData.address.fullAddress}</span>
            </div>

            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`${companyData.whatsappLink}?text=${encodeURIComponent(companyData.defaultWhatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--leonard)] hover:bg-[var(--leonard-dark)] text-white font-semibold tracking-[0.08em] uppercase text-sm rounded-sm shadow-[0_8px_30px_rgba(46,158,68,0.35)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97]"
              >
                <MessageCircle className="w-5 h-5" />
                Solicitar orçamento
              </a>
              <a
                href="#portoes"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-[var(--gold)/35%] text-[var(--cream)] hover:border-[var(--gold)] hover:text-[var(--gold-soft)] font-medium tracking-[0.08em] uppercase text-sm rounded-sm transition-all duration-300 active:scale-[0.97]"
              >
                Ver projetos reais
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-14 grid grid-cols-3 gap-6 border-t border-[var(--gold)/15%] pt-8 max-w-xl">
              <div>
                <span className="font-display text-3xl md:text-4xl font-semibold text-[var(--cream)]">30+</span>
                <span className="block mt-1 text-[0.72rem] tracking-[0.14em] uppercase text-[var(--smoke)]">Anos de história</span>
              </div>
              <div>
                <span className="font-display text-3xl md:text-4xl font-semibold text-[var(--cream)]">100%</span>
                <span className="block mt-1 text-[0.72rem] tracking-[0.14em] uppercase text-[var(--smoke)]">Sob medida</span>
              </div>
              <div>
                <span className="font-display text-3xl md:text-4xl font-semibold text-[var(--cream)]">Magé</span>
                <span className="block mt-1 text-[0.72rem] tracking-[0.14em] uppercase text-[var(--smoke)]">e toda região</span>
              </div>
            </div>
          </div>

          {/* Card retrato do Leonard */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-[330px] lg:max-w-none lg:mr-0 lg:ml-auto">
              <div className="absolute -inset-1.5 border border-[var(--gold)/40%] rounded-sm" aria-hidden />
              <div className="relative photo-frame rounded-sm overflow-hidden bg-[var(--charcoal)] shadow-[0_24px_70px_rgba(0,0,0,0.55)]">
                <img
                  src={IMAGES.owner}
                  alt="Leonard, fundador da Vidraçaria e Serralheria Leonard"
                  className="w-full h-[460px] lg:h-[540px] object-cover object-[center_28%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.15_0.04_168/0.85)] via-transparent to-transparent" />

                {/* Selo fundador */}
                <div className="absolute top-5 left-5 inline-flex items-center gap-2 px-3.5 py-1.5 bg-[oklch(0.16_0.04_168/0.82)] backdrop-blur-md border border-[var(--gold)/40%] rounded-sm">
                  <img src={IMAGES.logo} alt="" className="w-5 h-5 object-contain" />
                  <span className="eyebrow !text-[0.58rem]">Fundador &amp; Mestre Serralheiro</span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-6">
                  <p className="font-display text-xl md:text-[1.35rem] leading-snug text-[var(--cream)] italic">
                    "Cada portão e cada vidro que sai da minha oficina leva o meu nome."
                  </p>
                  <p className="mt-2 text-[0.72rem] tracking-[0.22em] uppercase text-[var(--gold-soft)]">
                    Leonard · Vidraçaria e Serralheria Leonard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
