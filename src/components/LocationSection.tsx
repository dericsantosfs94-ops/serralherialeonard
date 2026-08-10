import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { companyData } from '../data/company';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Info Side */}
          <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold mb-4">
                Localização
              </span>

              <h2 className="text-3xl font-extrabold text-white tracking-tight mb-6">
                Atendimento em Fragoso, Magé e região
              </h2>

              <p className="text-zinc-300 text-base mb-8 leading-relaxed">
                Visite nossa sede ou entre em contato para solicitar atendimento e orçamento para sua residência ou comércio.
              </p>

              <div className="flex items-start gap-4 mb-8 p-4 bg-zinc-950 rounded-2xl border border-zinc-800">
                <div className="p-3 bg-green-500/20 text-green-400 rounded-xl shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-base mb-1">Endereço Principal</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {companyData.address.street}, {companyData.address.number} - {companyData.address.km}<br />
                    {companyData.address.neighborhood} - {companyData.address.city} - {companyData.address.state}<br />
                    Brasil
                  </p>
                </div>
              </div>
            </div>

            <div>
              <a
                href={companyData.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full py-4 bg-[#2E9E44] hover:bg-[#258237] text-white font-bold rounded-xl shadow-lg shadow-green-950/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <Navigation className="w-5 h-5" />
                <span>COMO CHEGAR (GOOGLE MAPS)</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Map Embed / Visual Side */}
          <div className="lg:col-span-7 bg-zinc-950 min-h-[350px] relative">
            <iframe
              title="Localização Vidraçaria e Serralheria Leonard"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.01523675841!2d-43.1405!3d-22.6515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM5JzA1LjQiIFM0MMKwMDgnMjUuOCJX!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '100%' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter contrast-125 opacity-80 hover:opacity-100 transition-opacity"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
};
