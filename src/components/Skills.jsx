
import "./Skills.css";
const getIconUrl = (icon) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon}/${icon}-original.svg`;
const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: "html5" },
      { name: "CSS", icon: "css3" },
      { name: "JavaScript", icon: "javascript" },
      { name: "React", icon: "react" },
      { name: "Angular", icon: "angular" }
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "PHP", icon: "php" },
      { name: "MySQL", icon: "mysql" },
      { name: "REST API", icon: "api" }
    ]
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Postman", icon: "postman" },
      { name: "Bootstrap", icon: "bootstrap" }
    ]
  }
];

function Skills() {
  return (
    <section className="skills-section">
      <h2>Technical Skills</h2>

      <div className="skills-container">
        {skillGroups.map((group) => (
          <div className="skill-card" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <div className="skill-item" key={skill.name}>
                  {skill.icon === "api" ? (
                    <span className="api-logo">API</span>
                  ) : (
                    <img
                      src={getIconUrl(skill.icon)}
                      alt={skill.name}
                      className="skill-logo"
                    />
                  )}
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
