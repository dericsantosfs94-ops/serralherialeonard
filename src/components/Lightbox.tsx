import React from 'react';
import { X } from 'lucide-react';
import { PortfolioItem } from '../data/company';

interface LightboxProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl w-full bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
          aria-label="Fechar ampliação"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="max-h-[70vh] w-full bg-black flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[70vh] w-auto object-contain"
          />
        </div>

        <div className="p-6 bg-zinc-900 border-t border-zinc-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs uppercase tracking-wider px-3 py-1 bg-green-500/20 text-green-400 font-semibold rounded-full">
              {item.category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
          <p className="text-zinc-400 text-sm mb-4">{item.description}</p>
          
          <a
            href={`https://wa.me/5521964287307?text=${encodeURIComponent(`Olá! Vi o projeto "${item.title}" no site da Vidraçaria e Serralheria Leonard e gostaria de um orçamento semelhante.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-[#2E9E44] hover:bg-[#258237] text-white font-medium rounded-xl transition-all shadow-lg shadow-green-900/20"
          >
            Orçar projeto semelhante no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};
