import "./Portfolio.css";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

import Section from "../../layout/Section/Section";
import Container from "../../layout/Container/Container";

import { categories, projects } from "../../../data/projects";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <Section className="portfolio">
      <Container>
        <div className="section-header">
          <p>OUR WORK</p>

          <h2>Recent Projects</h2>

          <p>
            Browse a selection of spaces we've transformed with thoughtful
            design and attention to detail.
          </p>
        </div>

        <div className="portfolio-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              id={project.slug}
              className="portfolio-card"
              layout
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.08,
              }}
            >
              <img
                src={project.image}
                alt={`${project.title} by The Layer Haus`}
              />

              <div className="portfolio-overlay">
                <span>{project.location}</span>

                <h3>{project.title}</h3>

                <button>
                  View Project
                  <FiArrowRight />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Portfolio;
