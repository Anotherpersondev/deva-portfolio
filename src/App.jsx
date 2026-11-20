import About from "./components/About";
import Skills from "./components/Skills";
import "./App.css";
import ProjectCard from "./components/ProjectCard";
import { useState } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function sayHello() {
  alert("Welcome to my Portfolio!");
}

function App() {
  const [theme, setTheme] = useState("dark");
  return (

    <div className={`container ${theme}`}>
      <nav className="navbar">
        <h2>Deva.dev</h2>
        <div>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

        </div>
      </nav>
      <section className="hero">

        <div className="hero-image">
          <img
            src="/profile.jpg"
            alt="My Profile"
            className="profile-image"
          />
        </div>

        <div className="hero-content">
          <h1>Hi, I'm Deva 👋</h1>
          <h2>React Developer</h2>

          <p>
            BCA Graduate passionate about building modern,
            responsive and user-friendly web applications using React.
          </p>
          <div className="social-links">
            <a
              href="https://github.com/Anotherpersondev"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/devendra-chavan-975500250/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a href="/Devendra-resume.pdf.pdf" download="Devendra-resume.pdf">
              Download Resume
            </a>
          </div>

          <div className="hero-buttons">
            <button
              onClick={() => {
                document.getElementById("projects").scrollIntoView({
                  behavior: "smooth"
                });
              }}
            >
              View My Projects
            </button>

            <button
              onClick={() => {
                document.getElementById("contact").scrollIntoView({
                  behavior: "smooth"
                });
              }}
            >
              Contact Me
            </button>

            
          </div>

        </div>

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
      <Footer />
    </div>

  );
}

export default App;
