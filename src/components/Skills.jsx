
import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Angular"]
  },
  {
    title: "Backend & Database",
    skills: ["PHP", "MySQL", "REST API"]
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman"]
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
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
