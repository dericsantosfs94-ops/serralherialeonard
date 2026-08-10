import React from 'react';
import { MessageCircle, Mail, MapPin, Instagram, Phone } from 'lucide-react';
import { companyData } from '../data/company';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Col */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#2E9E44] flex items-center justify-center text-white font-black text-xl shadow-md">
                SL
              </div>
              <div>
                <span className="block font-bold text-white text-lg tracking-tight">
                  Leonard
                </span>
                <span className="block text-xs text-green-400 font-medium">
                  Vidraçaria & Serralheria
                </span>
              </div>
            </div>

            <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
              Mais de 30 anos de experiência em ferro, alumínio, vidros e soluções completas para sua obra.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold">
              +30 Anos de Tradição
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Navegação</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#inicio" className="hover:text-green-400 transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-green-400 transition-colors">Sobre</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-green-400 transition-colors">Serviços</a>
              </li>
              <li>
                <a href="#trabalhos" className="hover:text-green-400 transition-colors">Trabalhos</a>
              </li>
              <li>
                <a href="#contato" className="hover:text-green-400 transition-colors">Contato</a>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Principais Serviços</h3>
            <ul className="space-y-2.5 text-sm">
              <li>Esquadrias de Alumínio</li>
              <li>Vidros e Vidros Laminados</li>
              <li>Box para Banheiro e Blindex</li>
              <li>Portões e Automação</li>
              <li>Pintura Eletrostática</li>
              <li>Ferro e Alumínio em Geral</li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h3 className="text-white font-bold text-base mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`${companyData.whatsappLink}?text=${encodeURIComponent(companyData.defaultWhatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-zinc-300 hover:text-green-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-green-400 shrink-0" />
                  <span>{companyData.whatsapp}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyData.email}`}
                  className="flex items-center gap-2.5 text-zinc-300 hover:text-green-400 transition-colors truncate"
                >
                  <Mail className="w-4 h-4 text-green-400 shrink-0" />
                  <span className="truncate">{companyData.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={companyData.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-zinc-300 hover:text-green-400 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>{companyData.instagramHandle}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-300">
                <MapPin className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                <span className="text-xs leading-relaxed">{companyData.address.fullAddress}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Vidraçaria e Serralheria Leonard. Todos os direitos reservados.</p>
          <p>Fragoso, Magé - RJ</p>
        </div>
      </div>
    </footer>
  );
};
