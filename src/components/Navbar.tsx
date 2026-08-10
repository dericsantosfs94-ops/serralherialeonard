import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { companyData } from '../data/company';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Trabalhos', href: '#trabalhos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-900/95 backdrop-blur-md shadow-lg border-b border-zinc-800 py-3'
          : 'bg-gradient-to-b from-zinc-950/90 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#2E9E44] flex items-center justify-center text-white font-black text-xl shadow-md group-hover:bg-[#258237] transition-colors">
              SL
            </div>
            <div>
              <span className="block font-bold text-white text-base sm:text-lg tracking-tight leading-tight">
                Leonard
              </span>
              <span className="block text-xs text-green-400 font-medium tracking-wide">
                Vidraçaria & Serralheria
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-green-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA & Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${companyData.whatsappClean}`}
              className="flex items-center gap-2 text-zinc-300 hover:text-white text-sm font-medium"
            >
              <Phone className="w-4 h-4 text-green-400" />
              <span>{companyData.phoneDisplay}</span>
            </a>
            <a
              href={`${companyData.whatsappLink}?text=${encodeURIComponent(companyData.defaultWhatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2E9E44] hover:bg-[#258237] text-white text-sm font-semibold rounded-xl shadow-lg shadow-green-900/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Solicitar Orçamento</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href={`${companyData.whatsappLink}?text=${encodeURIComponent(companyData.defaultWhatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-[#2E9E44] text-white rounded-xl shadow-md"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 text-zinc-300 hover:text-white bg-zinc-800/80 rounded-xl"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-900/98 backdrop-blur-xl border-b border-zinc-800 shadow-2xl py-6 px-6 animate-fade-in">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-zinc-200 hover:text-green-400 py-2 border-b border-zinc-800/50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href={`${companyData.whatsappLink}?text=${encodeURIComponent(companyData.defaultWhatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#2E9E44] text-white font-semibold rounded-xl shadow-md"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Solicitar Orçamento pelo WhatsApp</span>
              </a>
              <a
                href={`tel:${companyData.whatsappClean}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 bg-zinc-800 text-zinc-200 font-medium rounded-xl text-sm"
              >
                <Phone className="w-4 h-4 text-green-400" />
                <span>Ligar: {companyData.phoneDisplay}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
