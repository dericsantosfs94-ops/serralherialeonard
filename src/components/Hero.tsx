import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, MapPin, Award } from 'lucide-react';
import { companyData } from '../data/company';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-28 pb-20 md:pt-36 md:pb-32 bg-zinc-950 overflow-hidden">
      {/* Background Glow & Pattern */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-green-500 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Content */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs sm:text-sm font-semibold mb-6">
              <Award className="w-4 h-4 text-green-400" />
              <span>+30 anos de experiência e tradição</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
              Vidraçaria e Serralheria <span className="text-green-400">LEONARD</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-zinc-300 font-medium mb-4 leading-relaxed">
              Mais de 30 anos de experiência em ferro, alumínio, vidros e soluções para sua obra.
            </p>

            {/* Additional Text */}
            <p className="text-base text-zinc-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Projetos e soluções sob medida para residências, comércios e diferentes necessidades em Fragoso, Magé e região.
            </p>

            {/* Location Tag */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-zinc-400 mb-8">
              <MapPin className="w-4 h-4 text-green-400 shrink-0" />
              <span>{companyData.address.fullAddress}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href={`${companyData.whatsappLink}?text=${encodeURIComponent(companyData.defaultWhatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#2E9E44] hover:bg-[#258237] text-white font-bold rounded-2xl shadow-xl shadow-green-900/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="w-5 h-5" />
                <span>SOLICITAR ORÇAMENTO</span>
              </a>

              <a
                href="#trabalhos"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 font-semibold rounded-2xl border border-zinc-800 transition-all"
              >
                <span>VER NOSSOS TRABALHOS</span>
                <ArrowRight className="w-4 h-4 text-green-400" />
              </a>
            </div>

            {/* Trust Points */}
            <div className="mt-12 pt-8 border-t border-zinc-800/80 grid grid-cols-2 sm:grid-cols-3 gap-6 text-center lg:text-left">
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-white">+30</span>
                <span className="text-xs sm:text-sm text-zinc-400">Anos de Tradição</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-black text-white">100%</span>
                <span className="text-xs sm:text-sm text-zinc-400">Sob Medida</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-2xl sm:text-3xl font-black text-white">Magé / RJ</span>
                <span className="text-xs sm:text-sm text-zinc-400">Atendimento Local</span>
              </div>
            </div>

          </div>

          {/* Right Column Image Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-green-500 to-blue-600 rounded-3xl blur-xl opacity-30"></div>
              <div className="relative bg-zinc-900 rounded-3xl p-3 border border-zinc-800 shadow-2xl">
                <div className="relative h-[380px] sm:h-[440px] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80"
                    alt="Vidraçaria e Serralheria Leonard"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-zinc-900/90 backdrop-blur-md rounded-xl border border-zinc-800">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-green-500/20 text-green-400 rounded-lg">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-sm">Qualidade e Acabamento</h3>
                        <p className="text-xs text-zinc-400">Ferro, alumínio e vidros com garantia profissional</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
