import React from 'react';
import { Award, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { companyData } from '../data/company';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-zinc-900/50 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Image / Visual card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-green-500/20 to-blue-500/20 rounded-3xl blur-lg"></div>
              <div className="relative rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-900 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80"
                  alt="Oficina e Atendimento Leonard"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500 text-zinc-950 font-bold text-xs rounded-full mb-2">
                    Tradição em Magé - RJ
                  </div>
                  <p className="text-white font-semibold text-lg">Soluções sob medida para sua obra</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold mb-4">
              <Award className="w-4 h-4" />
              <span>Nossa História e Compromisso</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
              Mais de 30 anos de experiência
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-6">
              A Vidraçaria e Serralheria Leonard atua há mais de 30 anos, oferecendo soluções em ferro, alumínio, vidros e acabamentos para diferentes projetos.
            </p>

            <p className="text-zinc-400 leading-relaxed mb-8">
              Com experiência no mercado e atendimento local em Fragoso e toda região de Magé - RJ, a empresa trabalha com soluções para diferentes necessidades, buscando unir funcionalidade, acabamento e qualidade na execução.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3 p-4 bg-zinc-900 rounded-xl border border-zinc-800">
                <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold text-sm">Experiência Comprovada</h3>
                  <p className="text-zinc-400 text-xs mt-1">Três décadas de atuação sólida no mercado.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-zinc-900 rounded-xl border border-zinc-800">
                <MapPin className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold text-sm">Atendimento Local</h3>
                  <p className="text-zinc-400 text-xs mt-1">Localizados no Fragoso, Magé - RJ.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-green-500 text-zinc-950 font-black text-xl flex items-center justify-center shrink-0">
                30+
              </div>
              <div>
                <h4 className="text-white font-bold text-base">Anos de dedicação e qualidade</h4>
                <p className="text-xs text-zinc-400">Compromisso com cada cliente e projeto executado.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
