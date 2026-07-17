// Projects.tsx
import ProjectCard from "./ProjectCard";
import flow90 from "@/assets/projects/flow90.png";
import musea from "@/assets/projects/musea.png";
import lunari from "@/assets/projects/lunari.png";
import mindTrek from "@/assets/projects/mindTrek.png";

const bavLabsProjects = [
  {
    title: "Flow90 — Deep Focus Timer",
    description:
      "A focus timer app for deep work sessions. Built with a small independent developer team (BAV Labs) — from UX/UI concept to App Store release.",
    techStack: ["iOS", "SwiftUI", "Xcode"],
    platform: "iOS" as const,
    image: flow90,
    links: [
      { type: "appstore" as const, url: "https://apps.apple.com/de/app/flow90/id6778360123?l=en-GB" },
      { type: "website" as const, url: "https://bav-labs.github.io/flow90/" },
    ],
  },
  {
    title: "Musea — Art & Culture App",
    description:
      "An app for exploring art and cultural collections, built with the BAV Labs team. Focus on clean UI and real API integration.",
    techStack: ["Android", "Kotlin", "Jetpack Compose", "REST API"],
    platform: "Android" as const,
    status: "In testing",
    image: musea,
    links: [{ type: "website" as const, url: "https://bav-labs.github.io/musea/" }],
  },
];

const personalProjects = [
  {
    title: "MindTrek — Mindful Journaling",
    description:
      "An iOS app for mindful journaling — capturing emotions, memories, and reflections, with calendar browsing and map visualization.",
    techStack: ["iOS", "SwiftUI", "MapKit", "MVVM", "Firebase"],
    platform: "iOS" as const,
    image: mindTrek,
    links: [{ type: "github" as const, url: "https://github.com/valeriest-e/MindTrek" }],
  },
  {
    title: "Lunari — Dream Interpreter",
    description:
      "An Android app for logging, analyzing, and visualizing dreams, with cloud storage and personalized insights.",
    techStack: ["Android", "Kotlin", "Firebase"],
    platform: "Android" as const,
    image: lunari,
    links: [{ type: "github" as const, url: "https://github.com/valeriest-e/LunariDreamAIApp" }],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <p className="section-title">// App Development</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Mobile Projects</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Apps I've built and shipped — as part of an independent developer
          team and on my own.
        </p>

        <p className="font-mono text-sm text-muted-foreground mb-4">BAV Labs (team)</p>
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {bavLabsProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <p className="font-mono text-sm text-muted-foreground mb-4">Personal projects</p>
        <div className="grid md:grid-cols-2 gap-6">
          {personalProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;