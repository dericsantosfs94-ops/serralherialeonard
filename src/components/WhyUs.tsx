import React from 'react';
import { Award, ShieldCheck, MapPin, Wrench, MessageCircle, Check } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const differentials = [
    {
      title: "+30 anos de experiência",
      desc: "Três décadas de atuação sólida, garantindo conhecimento profundo em cada obra.",
      icon: <Award className="w-6 h-6 text-green-400" />
    },
    {
      title: "Experiência e Tradição",
      desc: "Nome respeitado na região pela seriedade e compromisso com o cliente.",
      icon: <ShieldCheck className="w-6 h-6 text-green-400" />
    },
    {
      title: "Atendimento Local",
      desc: "Localizados no Fragoso, atendendo Magé e toda a região com agilidade.",
      icon: <MapPin className="w-6 h-6 text-green-400" />
    },
    {
      title: "Soluções Sob Medida",
      desc: "Projetos personalizados adaptados perfeitamente às suas necessidades.",
      icon: <Wrench className="w-6 h-6 text-green-400" />
    },
    {
      title: "Ferro e Alumínio",
      desc: "Especialistas em estruturas metálicas, esquadrias e portões duráveis.",
      icon: <Check className="w-6 h-6 text-green-400" />
    },
    {
      title: "Soluções em Vidro",
      desc: "Vidros temperados, laminados, box e acabamentos com total segurança.",
      icon: <Check className="w-6 h-6 text-green-400" />
    },
    {
      title: "Diversidade de Serviços",
      desc: "Amplo portfólio para atender todas as demandas da sua reforma ou construção.",
      icon: <Check className="w-6 h-6 text-green-400" />
    },
    {
      title: "Orçamento pelo WhatsApp",
      desc: "Atendimento rápido, prático e direto com o profissional pelo WhatsApp.",
      icon: <MessageCircle className="w-6 h-6 text-green-400" />
    },
  ];

  return (
    <section className="py-24 bg-zinc-900/50 border-t border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold mb-3">
            Nossos Diferenciais
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Por que escolher a Leonard?
          </h2>
          <p className="text-base sm:text-lg text-zinc-400">
            Tradição, qualidade e atendimento transparente para o seu projeto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-green-500/40 transition-all duration-300 shadow-lg"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
