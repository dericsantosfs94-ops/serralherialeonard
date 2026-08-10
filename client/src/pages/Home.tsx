/**
 * Estilo: Esmeralda & Ouro (ideas.md)
 * Página única: jornada de conversão — Herói com o Leo → Sobre → Portões →
 * Vidraçaria → Serviços → Projetos → Oficina → Instagram → Contato.
 */
import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { CategoryChapter } from "../components/CategoryChapter";
import { Services } from "../components/Services";
import { Projects } from "../components/Projects";
import { Workshop } from "../components/Workshop";
import { InstagramSection } from "../components/InstagramSection";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { companyData, IMAGES } from "../data/company";

export default function Home() {
  useEffect(() => {
    const scriptId = "schema-jsonld";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: companyData.name,
        image: IMAGES.loja,
        telephone: "+5521964287307",
        email: companyData.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Automóvel Club, 2641 - Km 61",
          addressLocality: "Fragoso, Magé",
          addressRegion: "RJ",
          postalCode: "25900-000",
          addressCountry: "BR",
        },
        sameAs: [companyData.instagramUrl],
        priceRange: "$$",
      });
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <CategoryChapter
          anchor="portoes"
          tone="emerald"
          eyebrow="Portões & Gradils"
          title="Portões que impõem "
          titleAccent="presença"
          description="Basculantes, de correr e pivotantes em ferro e alumínio, com pintura eletrostática e faixas em inox. Fabricação própria, entrega e instalação com equipe especializada."
          items={companyData.portfolio.filter((p) => p.category === "portoes")}
          ctaLabel="Orçar meu portão"
          ctaMsg="Olá! Vim pelo site da Leonard e gostaria de solicitar um orçamento para um portão."
        />
        <CategoryChapter
          anchor="vidracaria"
          tone="charcoal"
          reversed
          eyebrow="Vidraçaria & Coberturas"
          title="Vidro laminado que une "
          titleAccent="luz e segurança"
          description="Coberturas e pérgolas em vidro laminado, guarda-corpos com corrimão inox e box para banheiro. Claridade natural sem abrir mão da proteção."
          items={companyData.portfolio.filter((p) => p.category === "vidros")}
          ctaLabel="Orçar meu projeto em vidro"
          ctaMsg="Olá! Vim pelo site da Leonard e gostaria de solicitar um orçamento para um serviço de vidros."
        />
        <Services />
        <Projects />
        <Workshop />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
