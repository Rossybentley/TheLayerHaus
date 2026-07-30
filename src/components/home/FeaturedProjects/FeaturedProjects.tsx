import "./FeaturedProjects.css";

import { projects } from "../../../data/projects";
import ProjectCard from "../../ui/ProjectCard/ProjectCard";
import Container from "../../layout/Container/Container";

const FeaturedProjects = () => {
  return (
    <section className="featured-projects" id="projects">
      <Container>
        <div className="section-header">
          <span className="section-tag">FEATURED WORK</span>

          <h2 className="section-title">
            Crafting Spaces
            <br />
            That Feel Like Home
          </h2>

          <p className="section-description">
            Every project is thoughtfully designed using premium materials,
            timeless aesthetics and meticulous attention to detail.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              category={project.category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProjects;
