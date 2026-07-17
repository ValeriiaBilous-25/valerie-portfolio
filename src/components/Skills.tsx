const developmentSkills = [
  "Swift / SwiftUI",
  "Kotlin",
  "Jetpack Compose",
  "Firebase",
  "REST APIs",
  "Git / GitHub",
  "Core Data / Room",
  "MVVM Architecture",
];

const designSkills = [
  "UI/UX Design",
  "Wireframing",
  "Prototyping",
  "User Research",
  "Visual Design",
  "Brand Identity",
];

const tools = [
  "Xcode",
  "Android Studio",
  "GitHub",
  "Figma",
  "Notion",
  "Slack",
  "Trello",
];

const SkillGroup = ({ title, skills }: { title: string; skills: string[] }) => (
  <div>
    <h3 className="font-mono text-sm text-muted-foreground mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span key={skill} className="brutal-tag">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container">
        <p className="section-title">// Skills</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">What I Work With</h2>
        
        <div className="grid md:grid-cols-3 gap-12">
          <SkillGroup title="Development" skills={developmentSkills} />
          <SkillGroup title="Design" skills={designSkills} />
          <SkillGroup title="Tools" skills={tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
