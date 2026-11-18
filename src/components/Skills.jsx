import "./Skills.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Angular",
  "PHP",
  "MySQL",
  "REST API"
];

function Skills() {
  return (
    <section className="skills-section">
      <h2>My Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;