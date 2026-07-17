const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl">
          <p className="section-title">// About</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">From Designer to Developer</h2>
          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I started out in digital design — building websites, brand
              identities, and visual content for clients and small
              businesses. I enjoyed the work, but I wanted to go deeper into
              how products actually get built.
            </p>
            <p>
              That led me into mobile app development, through an intensive
              practical training program in iOS and Android development.
              Since then, I've worked with a small independent developer
              team to design, build, and publish real apps — including one
              currently live on the App Store.
            </p>
            <p>
              Today, I combine both worlds. My design background means I
              think about user experience from the first line of code — I
              understand why decisions are made and how to implement them
              cleanly.
            </p>
            <p className="text-foreground font-medium">
              I'm looking for a developer role where I can grow technically
              while bringing my design perspective to the team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;