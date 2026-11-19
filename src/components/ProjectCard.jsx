import "./ProjectCard.css";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <h3>{props.name}</h3>
      <p>{props.description}</p>

      <button>View Project</button>
    </div>
  );
}

export default ProjectCard;