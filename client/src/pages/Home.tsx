/**
 * Estilo: Esmeralda & Ouro (ideas.md)
 * Página única: jornada de conversão — Herói com o Leonard → Sobre → Portões →
 * Vidraçaria → Serviços → Projetos → Oficina → Instagram → Contato.
 */
import { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { CategoryChapter } from "../components/CategoryChapter";
import { Services } from "../components/Services";
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
          eyebrow="Esquadrias & Divisórias"
          title="Alumínio e vidro que "
          titleAccent="organizam espaços"
          description="Esquadrias de correr, divisórias comerciais e painéis em alumínio e vidro. Soluções sob medida que maximizam funcionalidade e elegância."
          items={companyData.portfolio.filter((p) => p.category === "esquadrias")}
          ctaLabel="Orçar meu projeto"
          ctaMsg="Olá! Vim pelo site da Leonard e gostaria de solicitar um orçamento para esquadrias ou divisórias."
        />
        <CategoryChapter
          anchor="coberturas"
          tone="emerald"
          eyebrow="Coberturas & Pergolados"
          title="Vidro laminado que une "
          titleAccent="luz e segurança"
          description="Coberturas e pérgolas em vidro laminado com estrutura em alumínio branco. Claridade natural, proteção solar e acabamento sofisticado para sua fachada."
          items={companyData.portfolio.filter((p) => p.category === "coberturas")}
          ctaLabel="Orçar minha cobertura"
          ctaMsg="Olá! Vim pelo site da Leonard e gostaria de solicitar um orçamento para uma cobertura em vidro."
        />
        <Services />
        <Workshop />
        <InstagramSection />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
