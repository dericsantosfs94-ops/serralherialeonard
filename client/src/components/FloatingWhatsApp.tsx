/**
 * Estilo: Esmeralda & Ouro (ideas.md)
 * Botão flutuante de WhatsApp com pulso discreto dourado.
 */
import { MessageCircle } from "lucide-react";
import { companyData } from "../data/company";

export function FloatingWhatsApp() {
  return (
    <a
      href={`${companyData.whatsappLink}?text=${encodeURIComponent(companyData.defaultWhatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-[70] flex items-center gap-3 px-4.5 py-3.5 bg-[var(--leonard)] hover:bg-[var(--leonard-dark)] text-white rounded-full shadow-[0_10px_34px_rgba(0,0,0,0.45)] transition-all duration-300 hover:scale-[1.04] active:scale-[0.96]"
    >
      <span className="relative flex w-2.5 h-2.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--gold-soft)] opacity-60 animate-ping" />
        <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-[var(--gold)]" />
      </span>
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline text-[0.78rem] font-semibold tracking-[0.06em]">Fale com o Leonard</span>
    </a>
  );
}
