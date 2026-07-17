// UXUIProjects.tsx
import { Link } from "react-router-dom";
import { ExternalLink, FileText } from "lucide-react";
import elektroImg from "@/assets/ux-ui/elektro.png";
import ecommImg from "@/assets/ux-ui/e-commerce.png";
import wishFlowImg from "@/assets/ux-ui/wishflow.png";
import petHealthImg from "@/assets/ux-ui/pet-health.png";

interface UXProjectLink {
  type: "case-study" | "website";
  url: string;
}

interface UXProject {
  title: string;
  description: string;
  image: string;
  isCoursework?: boolean;
  links: UXProjectLink[];
}

const clientProjects: UXProject[] = [
  {
    title: "Electroepil Berlin — Landing Page",
    description:
      "A Squarespace landing page for a beauty studio, focused on clear service presentation and booking flow.",
    image: elektroImg,
    links: [
      { type: "case-study", url: "/case-studies/landing" },
      { type: "website", url: "https://www.elektroepil-berlin.de" },
    ],
  },
  {
    title: "Atelier Momdjian — E-Commerce Website",
    description:
      "A Shopify e-commerce website for a handmade jewelry brand.",
    image: ecommImg,
    links: [{ type: "case-study", url: "/case-studies/e-commerce" }],
  },
];

const courseworkProjects: UXProject[] = [
  {
    title: "WishFlow",
    description: "A mobile app design module from a UX/UI design course.",
    image: wishFlowImg,
    isCoursework: true,
    links: [{ type: "case-study", url: "/case-studies/wishflow" }],
  },
  {
    title: "Pet Health App",
    description: "A mobile app design module from a UX/UI design course.",
    image: petHealthImg,
    isCoursework: true,
    links: [{ type: "case-study", url: "/case-studies/pethealth" }],
  },
];

const linkConfig: Record<UXProjectLink["type"], { label: string; icon: typeof ExternalLink }> = {
  "case-study": { label: "View case study", icon: FileText },
  website: { label: "Visit website", icon: ExternalLink },
};

const UXCard = ({ project }: { project: UXProject }) => (
  <div className="brutal-card overflow-hidden h-full flex flex-col">
    <div className="relative -mx-6 -mt-6 mb-6 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full aspect-[3/2] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
      {project.isCoursework && (
        <span className="absolute bottom-3 left-4 px-2 py-1 text-xs font-mono border border-white/40 text-white/90">
          Coursework
        </span>
      )}
    </div>

    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
    <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-foreground/10">
      {project.links.map((link) => {
        const { label, icon: Icon } = linkConfig[link.type];
        const isExternal = link.url.startsWith("http");
        const className =
          "inline-flex items-center gap-2 px-3 py-2 bg-foreground text-background text-xs font-mono hover:bg-transparent hover:text-foreground border-2 border-foreground transition-colors";

        return isExternal ? (
          <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className={className}>
            <Icon size={14} />
            {label}
          </a>
        ) : (
          <Link key={link.url} to={link.url} className={className}>
            <Icon size={14} />
            {label}
          </Link>
        );
      })}
    </div>
  </div>
);

const UXUIProjects = () => {
  return (
    <section id="ux-ui-projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <p className="section-title">// UX/UI Design</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">UX/UI Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Design work for real clients and personal projects.
        </p>

        <p className="font-mono text-sm text-muted-foreground mb-4">Client work</p>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {clientProjects.map((project) => (
            <UXCard key={project.title} project={project} />
          ))}
        </div>

        <p className="font-mono text-sm text-muted-foreground mb-4">Personal projects</p>
        <div className="grid md:grid-cols-2 gap-6">
          {courseworkProjects.map((project) => (
            <UXCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UXUIProjects;