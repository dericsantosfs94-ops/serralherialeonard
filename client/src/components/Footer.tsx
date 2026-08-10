/**
 * Estilo: Esmeralda & Ouro (ideas.md)
 * Rodapé escuro profundo com logotipo, navegação, serviços e contatos.
 */
import { MessageCircle, MapPin, Phone, Instagram } from "lucide-react";
import { companyData, IMAGES } from "../data/company";

const services = [
  "Esquadrias de Alumínio",
  "Vidros e Vidros Laminados",
  "Box para Banheiro / Blindex",
  "Portões e Automação",
  "Coberturas e Pergolados",
  "Pintura Eletrostática",
];

const nav = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Portões", href: "#portoes" },
  { name: "Vidraçaria", href: "#vidracaria" },
  { name: "Serviços", href: "#servicos" },
  { name: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="relative bg-[oklch(0.13_0.035_168)] border-t border-[var(--gold)/15%] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <img src={IMAGES.logo} alt="Logotipo Leonard" className="w-12 h-12 object-contain" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-[1.3rem] font-semibold tracking-[0.18em] text-[var(--cream)]">LEONARD</span>
                <span className="mt-1 text-[0.6rem] tracking-[0.3em] uppercase text-[var(--gold-soft)]">Vidraçaria &amp; Serralheria</span>
              </span>
            </div>
            <p className="mt-5 text-[0.88rem] text-[var(--smoke)] leading-relaxed font-light max-w-xs">
              Há mais de 30 anos fabricando e instalando portões, vidros,
              esquadrias e coberturas sob medida em Fragoso, Magé - RJ.
            </p>
            <a
              href={`${companyData.whatsappLink}?text=${encodeURIComponent(companyData.defaultWhatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2.5 px-5 py-3 bg-[var(--leonard)] hover:bg-[var(--leonard-dark)] text-white text-[0.72rem] font-semibold tracking-[0.12em] uppercase rounded-sm transition-all active:scale-[0.97]"
            >
              <MessageCircle className="w-4 h-4" />
              Orçamento pelo WhatsApp
            </a>
          </div>

          <div className="lg:col-span-2">
            <h4 className="eyebrow mb-5">Navegação</h4>
            <ul className="space-y-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[0.88rem] text-[oklch(0.75_0.008_85)] hover:text-[var(--gold-soft)] transition-colors">
                    {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="eyebrow mb-5">Serviços</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-[0.88rem] text-[oklch(0.75_0.008_85)]">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="eyebrow mb-5">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[var(--gold)] shrink-0 mt-1" />
                <span className="text-[0.88rem] text-[oklch(0.75_0.008_85)]">{companyData.phoneDisplay}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--gold)] shrink-0 mt-1" />
                <span className="text-[0.88rem] text-[oklch(0.75_0.008_85)]">{companyData.address.fullAddress}</span>
              </li>
              <li>
                <a href={companyData.instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 text-[0.88rem] text-[oklch(0.75_0.008_85)] hover:text-[var(--gold-soft)] transition-colors">
                  <Instagram className="w-4 h-4" />
                  {companyData.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[var(--gold)/12%] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.72rem] tracking-[0.1em] text-[oklch(0.55_0.006_80)]">
            © {new Date().getFullYear()} Vidraçaria e Serralheria Leonard · CNPJ e razão social em conformidade
          </p>
          <p className="text-[0.72rem] tracking-[0.1em] text-[oklch(0.55_0.006_80)]">
            Fabricado com orgulho em Fragoso, Magé - RJ
          </p>
        </div>
      </div>
    </footer>
  );
}
