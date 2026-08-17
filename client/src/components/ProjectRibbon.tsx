import { ArrowUpRight } from "lucide-react";
type RibbonProject = {
  id: string;
  title: string;
  label: string;
  image: string;
  target: "#portoes" | "#vidracaria" | "#coberturas";
  objectPosition?: string;
};

const ribbonItems: RibbonProject[] = [
  { id: "ribbon-portao-diagonal", title: "Portão diagonal", label: "Portões", image: "/assets/ribbon/portao-diagonal.jpg", target: "#portoes", objectPosition: "center 50%" },
  { id: "ribbon-vidro-varanda", title: "Fechamento em vidro", label: "Vidros", image: "/assets/ribbon/vidro-varanda.jpg", target: "#vidracaria", objectPosition: "center 48%" },
  { id: "ribbon-portao-branco", title: "Portão branco", label: "Portões", image: "/assets/ribbon/portao-branco-slats.jpg", target: "#portoes", objectPosition: "center 52%" },
  { id: "ribbon-esquadria-porta", title: "Esquadria de vidro", label: "Esquadrias", image: "/assets/ribbon/esquadria-porta-vidro.jpg", target: "#vidracaria", objectPosition: "center 50%" },
  { id: "ribbon-portao-preto", title: "Portão preto", label: "Portões", image: "/assets/ribbon/portao-preto-correr.jpg", target: "#portoes", objectPosition: "center 50%" },
  { id: "ribbon-box", title: "Box de banheiro", label: "Box", image: "/assets/ribbon/box-banheiro.jpg", target: "#vidracaria", objectPosition: "center 50%" },
  { id: "ribbon-portao-moderno", title: "Portão moderno", label: "Portões", image: "/assets/ribbon/portao-branco-moderno.jpg", target: "#portoes", objectPosition: "center 50%" },
  { id: "ribbon-vidro-box", title: "Vidro sob medida", label: "Vidros", image: "/assets/ribbon/vidro-box.jpg", target: "#vidracaria", objectPosition: "center 50%" },
];

function RibbonCard({ item }: { item: RibbonProject }) {
  return (
    <a
      href={item.target}
      className="project-ribbon-card group relative block shrink-0 overflow-hidden rounded-2xl border border-[var(--gold)]/30% bg-[var(--background)]"
      aria-label={`Ver projetos de ${item.title}`}
    >
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        style={{ objectPosition: item.objectPosition ?? "center" }}
        className="h-24 w-40 object-cover sm:h-28 sm:w-48"
      />
      <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-[var(--foreground)]/82 px-3 py-2 text-[0.62rem] font-medium uppercase tracking-[0.12em] text-[var(--background)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="min-w-0 truncate"><small className="mr-2 text-[var(--gold-soft)]">{item.label}</small>{item.title}</span>
        <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[var(--gold-soft)]" />
      </span>
    </a>
  );
}

export function ProjectRibbon() {
  return (
    <section className="project-ribbon relative overflow-hidden bg-[var(--background)] py-5 md:py-7" aria-label="Projetos reais da Leonard">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-[var(--background)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-[var(--background)]" />
      <div className="project-ribbon-track flex w-max items-center gap-3 px-3">
        {[...ribbonItems, ...ribbonItems].map((item, index) => (
          <RibbonCard key={`${item.id}-${index}`} item={item} />
        ))}
      </div>
      <p className="mt-3 text-center text-[0.6rem] font-medium uppercase tracking-[0.24em] text-[var(--gold-deep)]">
        Projetos reais · fabricação própria · Magé e região
      </p>
    </section>
  );
}
