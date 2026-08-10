import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { Portfolio } from './components/Portfolio';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { QuoteSection } from './components/QuoteSection';
import { ContactForm } from './components/ContactForm';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { companyData } from './data/company';

export default function App() {
  useEffect(() => {
    // Inject JSON-LD Schema.org
    const scriptId = 'schema-jsonld';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": companyData.name,
        "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
        "telephone": "+5521964287307",
        "email": companyData.email,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Automóvel Club, 2641 - Km 61",
          "addressLocality": "Fragoso, Magé",
          "addressRegion": "RJ",
          "postalCode": "25900-000",
          "addressCountry": "BR"
        },
        "sameAs": [
          companyData.instagramUrl
        ],
        "priceRange": "$$"
      });
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-green-500 selection:text-zinc-950">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Portfolio />
        <InstagramSection />
        <LocationSection />
        <QuoteSection />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
