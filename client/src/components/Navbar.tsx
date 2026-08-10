/**
 * Estilo: Esmeralda & Ouro (ideas.md)
 * Navbar escura esmeralda com logo monograma dourado, versalete espaçado,
 * CTA verde Leonard. Transição opaca ao rolar.
 */
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { companyData, IMAGES } from "../data/company";

const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Sobre", href: "#sobre" },
  { name: "Portões", href: "#portoes" },
  { name: "Vidraçaria", href: "#vidracaria" },
  { name: "Serviços", href: "#servicos" },
  { name: "Contato", href: "#contato" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[oklch(0.17_0.045_168/0.92)] backdrop-blur-xl border-b border-[var(--gold)/15%] py-3 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          : "bg-gradient-to-b from-[oklch(0.13_0.04_168/0.85)] to-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <img
            src={IMAGES.logo}
            alt="Logotipo Leonard"
            className="w-11 h-11 md:w-12 md:h-12 object-contain drop-shadow-[0_0_12px_rgba(201,162,39,0.25)]"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.25rem] md:text-[1.35rem] font-semibold tracking-[0.18em] text-[var(--cream)]">
              LEONARD
            </span>
            <span className="mt-1 text-[0.6rem] md:text-[0.65rem] tracking-[0.32em] uppercase text-[var(--gold-soft)] font-medium">
              Vidraçaria &amp; Serralheria
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[0.8rem] font-normal tracking-[0.08em] text-[oklch(0.82_0.01_90)] hover:text-[var(--gold-soft)] transition-colors duration-300"
            >
              {l.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`tel:${companyData.whatsappClean}`}
            className="hidden xl:flex items-center gap-2 text-[0.8rem] text-[oklch(0.82_0.01_90)] hover:text-[var(--cream)] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[var(--gold)]" />
            <span className="font-medium">{companyData.phoneDisplay}</span>
          </a>
          <a
            href={`${companyData.whatsappLink}?text=${encodeURIComponent(companyData.defaultWhatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--leonard)] hover:bg-[var(--leonard-dark)] text-white text-[0.78rem] font-semibold tracking-[0.12em] uppercase rounded-sm shadow-[0_4px_18px_rgba(46,158,68,0.35)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.97]"
          >
            <MessageCircle className="w-4 h-4" />
            Orçamento
          </a>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <a
            href={`${companyData.whatsappLink}?text=${encodeURIComponent(companyData.defaultWhatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 bg-[var(--leonard)] text-white rounded-sm shadow-md"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-5 h-5" />
          </a>
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="p-2.5 text-[var(--cream)] border border-[var(--gold)/25%] rounded-sm"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-full inset-x-0 bg-[oklch(0.16_0.045_168/0.98)] backdrop-blur-xl border-b border-[var(--gold)/15%] shadow-2xl py-6 px-6">
          <nav className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="text-sm text-[oklch(0.88_0.01_90)] hover:text-[var(--gold-soft)] py-2.5 border-b border-[oklch(0.72_0.11_85/0.1)] transition-colors"
              >
                {l.name}
              </a>
            ))}
            <a
              href={`${companyData.whatsappLink}?text=${encodeURIComponent(companyData.defaultWhatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 w-full py-3.5 bg-[var(--leonard)] text-white font-semibold text-sm tracking-[0.1em] uppercase rounded-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Orçamento pelo WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
