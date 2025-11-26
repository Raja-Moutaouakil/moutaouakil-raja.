import "./App.css";
import Hero from "./components/Hero";
import information from "./content/information";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";
import Heading from "./components/Heading";
import projects from "./content/projects";
import Skill from "./components/Skill";
import skills from "./content/skills";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ContactForm from "./components/ContactForm";

function App() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <Navbar
        firstName={information.firstName}
        lastName={information.lastName}
      />
      <Hero
        img={information.img}
        description={information.description}
        title={information.title}
      />
      <div className="hr"></div>

  <section id="projects" className="px-2 md:px-4 pt-10">
        <Heading firstWord="My" secondWord="Projects" />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full max-w-[1200px] mx-auto"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              img={project.img}
              description={project.description}
              stack={project.stack}
              sourceCode={project.sourceCode}
              preview={project.preview}
              creator={project.creator}
            />
          ))}
        </motion.div>
      </section>
      <section id="skills">
        <Heading firstWord="Skills" secondWord="&Tools" />
        <motion.div
          className="skill-map"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={skillVariants}>
              <Skill skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      
      </section>
      <section id="contact">
        <Heading firstWord="Contact" secondWord="Me" />
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}

export default App;