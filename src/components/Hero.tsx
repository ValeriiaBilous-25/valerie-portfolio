import React from "react";
import avatar from "@/assets/avatar.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-24">
      <div className="container grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 items-center">
        <div className="flex flex-col justify-center">
          <div
            className="inline-flex items-center gap-2 self-start mb-6 px-3 py-1.5 border-2 border-foreground font-mono text-xs animate-fade-in"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500" />
            available_for_hire: true
          </div>

          <p
            className="font-mono text-sm text-muted-foreground mb-2 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Hello, I'm
          </p>

          <h1
            className="text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.95] font-bold mb-6 animate-fade-in"
            style={{ animationDelay: "0.15s" }}
          >
            Valeriia
            <br />
            Bilous
          </h1>

          <div className="flex flex-wrap gap-2 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <span className="brutal-tag">iOS &amp; Android Developer</span>
            <span className="brutal-tag">UX/UI Background</span>
            <span className="brutal-tag">Berlin</span>
          </div>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.25s" }}
          >
            Mobile app developer with a UX/UI design background. I ship apps
            end to end — from interface concept to published product.
          </p>

          <div className="flex gap-4 mt-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <button
              onClick={() => scrollToSection("projects")}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground bg-foreground text-background font-mono text-sm hover:bg-transparent hover:text-foreground transition-colors"
            >
              View projects →
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-foreground font-mono text-sm hover:bg-foreground hover:text-background transition-colors"
            >
              Contact
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: "0.35s" }}>
          <img
            src={avatar}
            alt="Valeriia Bilous"
            className="w-64 h-64 md:w-80 md:h-80 object-cover border-2 border-foreground"
            style={{ boxShadow: "var(--shadow-brutal)" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;