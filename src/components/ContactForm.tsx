import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import { companyData } from '../data/company';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: companyData.services[0].title,
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Por favor, preencha pelo menos seu nome e telefone.');
      return;
    }

    const text = `Olá! Vim pelo site da Vidraçaria e Serralheria Leonard e gostaria de solicitar um orçamento.\n\n*Nome:* ${formData.name}\n*Telefone:* ${formData.phone}\n*Serviço:* ${formData.service}\n*Mensagem:* ${formData.message || 'Gostaria de mais informações.'}`;

    const url = `${companyData.whatsappLink}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contato" className="py-24 bg-zinc-900/40 border-t border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-5">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold mb-4">
              Fale Conosco
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
              Entre em contato
            </h2>

            <p className="text-zinc-300 text-base mb-8 leading-relaxed">
              Preencha o formulário ao lado para enviar sua solicitação diretamente para o nosso WhatsApp com rapidez e comodidade.
            </p>

            <div className="space-y-6">
              <div className="p-5 bg-zinc-900 border border-zinc-800 rounded-2xl">
                <h3 className="text-white font-bold text-sm mb-1">WhatsApp Oficial</h3>
                <p className="text-green-400 font-semibold text-lg">{companyData.whatsapp}</p>
              </div>

              <div className="p-5 bg-zinc-900 border border-zinc-800 rounded-2xl">
                <h3 className="text-white font-bold text-sm mb-1">E-mail</h3>
                <a href={`mailto:${companyData.email}`} className="text-zinc-300 hover:text-green-400 text-sm transition-colors">
                  {companyData.email}
                </a>
              </div>

              <div className="p-5 bg-zinc-900 border border-zinc-800 rounded-2xl">
                <h3 className="text-white font-bold text-sm mb-1">Endereço</h3>
                <p className="text-zinc-300 text-sm leading-relaxed">
                  {companyData.address.fullAddress}
                </p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 sm:p-10 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-2">Solicitar Orçamento Online</h3>
              <p className="text-zinc-400 text-sm mb-8">Preencha os dados abaixo e clique para enviar pelo WhatsApp.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                    Seu Nome *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: João da Silva"
                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-green-500 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-zinc-300 mb-2">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(21) 99999-9999"
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-green-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-zinc-300 mb-2">
                      Serviço Desejado
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white focus:outline-none focus:border-green-500 transition-colors"
                    >
                      {companyData.services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-300 mb-2">
                    Mensagem / Detalhes do Projeto
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Descreva medidas, modelo ou detalhes do que você precisa..."
                    className="w-full px-4 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white placeholder-zinc-600 focus:outline-none focus:border-green-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 bg-[#2E9E44] hover:bg-[#258237] text-white font-bold rounded-xl shadow-lg shadow-green-950/30 transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>ENVIAR PELO WHATSAPP</span>
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
