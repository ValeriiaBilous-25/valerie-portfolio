// ProjectCard.tsx
import clsx from "clsx";
import { Apple, Github, Globe, ExternalLink } from "lucide-react";

interface ProjectLink {
  type: "appstore" | "googleplay" | "github" | "website";
  url: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  platform: "iOS" | "Android" | "Cross-platform";
  image?: string;
  status?: string;
  links?: ProjectLink[];
}

const linkIcons: Record<string, typeof Apple> = {
  "App Store": Apple,
  GitHub: Github,
  Website: Globe,
};

const linkConfig: Record<ProjectLink["type"], { label: string; icon: typeof Apple }> = {
  appstore: { label: "Download on App Store", icon: Apple },
  googleplay: { label: "Get it on Google Play", icon: Globe },
  github: { label: "See on GitHub", icon: Github },
  website: { label: "Visit website", icon: Globe },
};

const ProjectCard = ({
  title,
  description,
  techStack,
  platform,
  image,
  status,
  links,
}: ProjectCardProps) => {
  return (
    <div className="brutal-card group overflow-hidden h-full flex flex-col">
      {image && (
        <div className="relative -mx-6 -mt-6 mb-6 overflow-hidden">
          <img
            src={image}
            alt={`${title} mockup`}
            className="w-full aspect-[3/2] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
          <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
            <span className="font-mono text-xs tracking-wider text-white/70 uppercase">
              {platform}
            </span>
            {status && (
              <span className="px-2 py-1 text-xs font-mono border border-white/40 text-white/90">
                {status}
              </span>
            )}
          </div>
        </div>
      )}

      <h3 className="text-xl font-bold mb-3">{title}</h3>

      <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {techStack.map((tech) => (
          <span key={tech} className="brutal-tag">
            {tech}
          </span>
        ))}
      </div>
      
      {links && links.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-foreground/10">
          {links.map((link) => {
            const { label, icon: Icon } = linkConfig[link.type];
            return (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 bg-foreground text-background text-xs font-mono hover:bg-transparent hover:text-foreground border-2 border-foreground transition-colors"
              >
                <Icon size={14} />
                {label}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
};


export default ProjectCard;