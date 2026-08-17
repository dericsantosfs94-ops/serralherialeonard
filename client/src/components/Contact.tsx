/**
 * Estilo: Esmeralda & Ouro (ideas.md)
 * Contato & Orçamento: formulário elegante com bordas douradas que monta
 * mensagem de WhatsApp, informações de contato e mapa. Fundo carvão.
 */
import { useState } from "react";
import { MessageCircle, MapPin, Phone, Mail, Instagram, ExternalLink } from "lucide-react";
import { companyData, IMAGES } from "../data/company";
import { FadeUp } from "./FadeUp";

const serviceOptions = [
  "Portões",
  "Automação de portões",
  "Esquadrias de alumínio",
  "Vidros e vidros laminados",
  "Box para banheiro / Blindex",
  "Coberturas e pergolados",
  "Guarda-corpos e corrimãos",
  "Divisórias",
  "Forro de PVC",
  "Piso laminado",
  "Ferro e alumínio em geral",
  "Outro serviço",
];

export function Contact() {
  const [name, setName] = useState("");
  const [service, setService] = useState(serviceOptions[0]);
  const [note, setNote] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Vim pelo site da Leonard.\n\nNome: ${name || "—"}\nServiço de interesse: ${service}\n${note ? `Observações: ${note}` : ""}\n\nGostaria de solicitar um orçamento.`;
    window.open(`https://wa.me/${companyData.whatsappClean}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="contato" className="relative py-24 md:py-32 bg-[var(--background)] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp>
          <div className="flex items-center gap-5 mb-5">
            <span className="gold-line flex-1" />
            <span className="eyebrow">Solicite seu orçamento</span>
            <span className="gold-line flex-1" />
          </div>
          <h2 className="font-display text-[2.2rem] leading-[1.1] sm:text-[3.1rem] font-semibold text-[var(--foreground)] text-center">
            O orçamento é <span className="text-[var(--emerald-deep)]">gratuito</span> — e quem responde é o Leonard.
          </h2>
        </FadeUp>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Formulário */}
          <div className="lg:col-span-7">
            <form onSubmit={submit} className="bg-[var(--paper-muted)] border border-[var(--emerald-deep)]/15% rounded-sm p-8 md:p-10">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[0.7rem] tracking-[0.2em] uppercase text-[var(--emerald-deep)] mb-2.5">Seu nome</label>
                  <input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Como podemos te chamar?"
                    className="w-full bg-transparent border-b border-[var(--emerald-deep)]/22% focus:border-[var(--gold)] outline-none py-3 text-[var(--foreground)] placeholder:text-[oklch(0.42_0.018_150)] transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-[0.7rem] tracking-[0.2em] uppercase text-[var(--emerald-deep)] mb-2.5">Serviço de interesse</label>
                  <select
                    id="service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full bg-[var(--paper-muted)] border-b border-[var(--emerald-deep)]/22% focus:border-[var(--gold)] outline-none py-3 text-[var(--foreground)] transition-colors"
                  >
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} className="text-[var(--foreground)]">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="note" className="block text-[0.7rem] tracking-[0.2em] uppercase text-[var(--emerald-deep)] mb-2.5">Conte sobre seu projeto (opcional)</label>
                  <textarea
                    id="note"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Ex.: medidas aproximadas, material preferido, endereço da obra..."
                    rows={4}
                    className="w-full bg-transparent border-b border-[var(--emerald-deep)]/22% focus:border-[var(--gold)] outline-none py-3 text-[var(--foreground)] placeholder:text-[oklch(0.42_0.018_150)] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 px-8 py-4.5 bg-[var(--leonard)] hover:bg-[var(--leonard-dark)] text-white font-semibold tracking-[0.1em] uppercase text-sm rounded-sm shadow-[0_8px_30px_rgba(46,158,68,0.35)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97]"
                >
                  <MessageCircle className="w-5 h-5" />
                  Enviar orçamento pelo WhatsApp
                </button>
                <p className="text-center text-[0.75rem] text-[var(--muted-foreground)]">
                  Ao enviar, seu WhatsApp abre com a mensagem pronta para o Leonard.
                </p>
              </div>
            </form>
          </div>

          {/* Info + Mapa */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-[var(--paper-muted)] border border-[var(--emerald-deep)]/15% rounded-sm p-8">
              <h3 className="eyebrow mb-6">Fale com a gente</h3>
              <div className="space-y-5">
                <a href={`tel:${companyData.whatsappClean}`} className="flex items-start gap-4 group">
                  <Phone className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                  <span className="text-[0.95rem] text-[var(--foreground)] group-hover:text-[var(--emerald-deep)] transition-colors">{companyData.phoneDisplay}</span>
                </a>
                <a href={companyData.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <MessageCircle className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                  <span className="text-[0.95rem] text-[var(--foreground)] group-hover:text-[var(--emerald-deep)] transition-colors">WhatsApp · {companyData.whatsapp}</span>
                </a>
                <a href={`mailto:${companyData.email}`} className="flex items-start gap-4 group">
                  <Mail className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                  <span className="text-[0.95rem] text-[var(--foreground)] group-hover:text-[var(--emerald-deep)] transition-colors break-all">{companyData.email}</span>
                </a>
                <a href={companyData.instagramUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <Instagram className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                  <span className="text-[0.95rem] text-[var(--foreground)] group-hover:text-[var(--emerald-deep)] transition-colors">{companyData.instagramHandle}</span>
                </a>
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[var(--gold)] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[0.95rem] text-[var(--foreground)]">{companyData.address.street}, {companyData.address.number} - {companyData.address.km}</p>
                    <p className="text-[0.85rem] text-[var(--muted-foreground)]">{companyData.address.neighborhood} · {companyData.address.city} - {companyData.address.state}</p>
                    <a
                      href={companyData.address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-2 text-[0.72rem] tracking-[0.14em] uppercase text-[var(--emerald-deep)] hover:text-[var(--gold)] transition-colors"
                    >
                      Abrir no Google Maps <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="photo-frame rounded-sm overflow-hidden border border-[var(--emerald-deep)]/15% min-h-[260px]">
              <iframe
                src="https://maps.google.com/maps?q=Av.+Automovel+Club+2641+Fragoso+Mage+RJ&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[260px] border-0 grayscale-[0.4] contrast-[1.02]"
                loading="lazy"
                title="Localização da Vidraçaria e Serralheria Leonard"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


