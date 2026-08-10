import React, { useState } from 'react';
import { Eye, MessageCircle } from 'lucide-react';
import { companyData, PortfolioItem } from '../data/company';
import { Lightbox } from './Lightbox';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  const categories = [
    { id: 'todos', label: 'Todos' },
    { id: 'vidros', label: 'Vidros' },
    { id: 'aluminio', label: 'Alumínio' },
    { id: 'serralheria', label: 'Serralheria' },
    { id: 'portões', label: 'Portões' },
    { id: 'outros', label: 'Outros' },
  ];

  const filteredItems = selectedCategory === 'todos'
    ? companyData.portfolio
    : companyData.portfolio.filter((item) => item.category === selectedCategory);

  return (
    <section id="trabalhos" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold mb-3">
            Galeria de Projetos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Nossos Trabalhos
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Confira alguns dos trabalhos e projetos realizados pela Vidraçaria e Serralheria Leonard.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#2E9E44] text-white shadow-lg shadow-green-950/30'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item: PortfolioItem) => (
            <div
              key={item.id}
              className="group bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-xl hover:border-green-500/50 transition-all duration-300 flex flex-col"
            >
              <div 
                className="relative h-64 overflow-hidden bg-zinc-950 cursor-pointer"
                onClick={() => setActiveItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/90 text-white rounded-xl text-sm font-medium border border-zinc-700 shadow-lg">
                    <Eye className="w-4 h-4 text-green-400" />
                    <span>Ampliar imagem</span>
                  </span>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-zinc-950/80 backdrop-blur-md text-green-400 text-xs font-semibold rounded-full border border-zinc-800 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mb-6">
                    {item.description}
                  </p>
                </div>

                <a
                  href={`https://wa.me/5521964287307?text=${encodeURIComponent(`Olá! Vi o projeto "${item.title}" no site da Vidraçaria e Serralheria Leonard e gostaria de solicitar um orçamento semelhante.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-zinc-800 hover:bg-[#2E9E44] text-zinc-300 hover:text-white text-sm font-semibold rounded-xl transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-green-400 group-hover:text-white" />
                  <span>Orçar Semelhante</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <Lightbox item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
};
