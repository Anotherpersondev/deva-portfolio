import About from "./components/About";
import Skills from "./components/Skills";
import "./App.css";
import ProjectCard from "./components/ProjectCard";
import { useState } from "react";
import Contact from "./components/Contact";
function sayHello() {
  alert("Welcome to my Portfolio!");
}

function App() {
  return (

    <div className="container">

      <nav>
        <h2>Deva.dev</h2>
        <div>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <h1>Hi, I'm Deva 👋</h1>
        <h2>React Developer</h2>
        <p>
          BCA Graduate | Frontend Developer
        </p>
        <button
          onClick={() => {
            document.getElementById("projects").scrollIntoView({
              behavior: "smooth"
            });
          }}
        >
          View My Projects
        </button>
        <button onClick={sayHello}>
          View My Projects
        </button>
      </section>
      <About />
      <Skills />
      <section id="projects">
        <h2>My Projects</h2>

        <div className="projects-container">

          <ProjectCard
            name="My Portfolio"
            description="My personal React developer portfolio"
          />

          <ProjectCard
            name="Student Registration"
            description="A student registration form built with React"
          />

          <ProjectCard
            name="Kayaking Booking"
            description="An adventure booking platform"
          />

        </div>
      </section>
          <Contact />
    </div>

  );
}

export default App;
