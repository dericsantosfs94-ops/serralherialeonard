import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import { companyData } from '../data/company';

export const InstagramSection: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-900/40 border-t border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/10 text-pink-400 text-xs font-semibold mb-4">
                <Instagram className="w-4 h-4" />
                <span>Redes Sociais</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                Veja mais trabalhos no Instagram
              </h2>

              <p className="text-zinc-300 text-base sm:text-lg mb-6 max-w-2xl">
                Acompanhe nossos projetos, serviços e novidades no perfil oficial da empresa.
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-3 text-white font-bold text-lg mb-6">
                <Instagram className="w-6 h-6 text-pink-400" />
                <span>{companyData.instagramHandle}</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <a
                href={companyData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:opacity-95 text-white font-bold rounded-2xl shadow-xl shadow-pink-950/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Instagram className="w-5 h-5" />
                <span>VISITAR INSTAGRAM</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
