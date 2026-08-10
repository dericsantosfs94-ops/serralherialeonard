import React from 'react';
import { 
  Maximize2, 
  Columns, 
  Layers, 
  Grid, 
  Shield, 
  DoorClosed, 
  Cpu, 
  Paintbrush, 
  LayoutGrid, 
  Home, 
  Square, 
  Wrench,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { companyData, ServiceItem } from '../data/company';

export const Services: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Maximize2': return <Maximize2 className="w-6 h-6 text-green-400" />;
      case 'Columns': return <Columns className="w-6 h-6 text-green-400" />;
      case 'Layers': return <Layers className="w-6 h-6 text-green-400" />;
      case 'Grid': return <Grid className="w-6 h-6 text-green-400" />;
      case 'Shield': return <Shield className="w-6 h-6 text-green-400" />;
      case 'DoorClosed': return <DoorClosed className="w-6 h-6 text-green-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-green-400" />;
      case 'Paintbrush': return <Paintbrush className="w-6 h-6 text-green-400" />;
      case 'LayoutGrid': return <LayoutGrid className="w-6 h-6 text-green-400" />;
      case 'Home': return <Home className="w-6 h-6 text-green-400" />;
      case 'Square': return <Square className="w-6 h-6 text-green-400" />;
      default: return <Wrench className="w-6 h-6 text-green-400" />;
    }
  };

  return (
    <section id="servicos" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold mb-3">
            O que fazemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Nossos Serviços
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Soluções em ferro, alumínio, vidro e acabamentos para diferentes tipos de projetos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyData.services.map((service: ServiceItem) => {
            const whatsappMsg = `Olá! Vim pelo site da Vidraçaria e Serralheria Leonard e gostaria de solicitar um orçamento para o serviço de *${service.title}*.`;
            
            return (
              <div 
                key={service.id}
                className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-green-500/50 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-green-950/20"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center mb-5 group-hover:bg-green-500/20 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80">
                  <a
                    href={`https://wa.me/5521964287307?text=${encodeURIComponent(whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-[#2E9E44] text-zinc-200 hover:text-white font-medium text-sm transition-all shadow-sm"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-green-400 group-hover:text-white" />
                      <span>Solicitar orçamento</span>
                    </span>
                    <ArrowRight className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
