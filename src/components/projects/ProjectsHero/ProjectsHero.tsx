import "./ProjectsHero.css";

import { motion } from "framer-motion";

import Container from "../../layout/Container/Container";
import Section from "../../layout/Section/Section";

import heroImage from "../../../assets/images/projects/projects-hero.jpg";

const ProjectsHero = () => {
  return (
    <Section className="projects-hero">
      <div className="projects-hero__image">
        <img src={heroImage} alt="Interior Design Projects" />

        <div className="projects-hero__overlay" />
      </div>

      <Container>
        <motion.div
          className="projects-hero__content"
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <span className="section-tag">OUR PROJECTS</span>

          <h1>
            Every Space
            <br />
            Tells A Story
          </h1>

          <p>
            Explore a collection of carefully crafted interiors that reflect
            timeless elegance, thoughtful design and exceptional attention to
            detail.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
};

export default ProjectsHero;
