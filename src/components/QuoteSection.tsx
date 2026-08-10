import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { companyData } from '../data/company';

export const QuoteSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-zinc-950 to-zinc-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500 rounded-full blur-[160px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl p-8 sm:p-16 shadow-2xl backdrop-blur-xl">
          
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold mb-6">
            Atendimento Rápido
          </span>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Precisa de um orçamento?
          </h2>

          <p className="text-zinc-300 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Entre em contato com a Vidraçaria e Serralheria Leonard e explique o que você precisa. Atendimento ágil pelo WhatsApp.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={`${companyData.whatsappLink}?text=${encodeURIComponent(companyData.defaultWhatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#2E9E44] hover:bg-[#258237] text-white font-extrabold text-base sm:text-lg rounded-2xl shadow-xl shadow-green-900/40 transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-6 h-6" />
              <span>SOLICITAR ORÇAMENTO PELO WHATSAPP</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-3 text-zinc-400 text-sm">
            <Phone className="w-4 h-4 text-green-400" />
            <span>WhatsApp Oficial: <strong className="text-white">{companyData.whatsapp}</strong></span>
          </div>

        </div>
      </div>
    </section>
  );
};
