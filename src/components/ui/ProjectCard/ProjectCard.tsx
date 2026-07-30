import "./ProjectCard.css";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
}

const ProjectCard = ({ title, category, image }: ProjectCardProps) => {
  return (
    <motion.article
      className="project-card"
      whileHover={{ y: -12 }}
      transition={{ duration: 0.35 }}
    >
      <img src={image} alt={title} />

      <div className="project-card__overlay">
        <div className="project-card__content">
          <span className="project-category">{category}</span>

          <h3>{title}</h3>

          <a href="/" className="project-link">
            Explore Project
            <span className="arrow">→</span>
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
