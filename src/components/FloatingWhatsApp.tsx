import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyData } from '../data/company';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento rápido" className="fixed bottom-6 right-6 z-50">
      <a
        href={`${companyData.whatsappLink}?text=${encodeURIComponent(companyData.defaultWhatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Solicitar orçamento pelo WhatsApp"
        className="group flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border border-white/20"
      >
        <div className="relative">
          <MessageCircle className="w-7 h-7 fill-current text-white animate-bounce" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
        </div>
        <span className="hidden sm:inline font-bold text-sm tracking-wide">
          Solicite seu orçamento
        </span>
      </a>
    </aside>
  );
};
