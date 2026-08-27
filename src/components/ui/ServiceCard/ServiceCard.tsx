import "./ServiceCard.css";

import { motion } from "framer-motion";

import { cardHover } from "../../../utils/animation";

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
  return (
    <motion.article
      className="service-card"
      variants={cardHover}
      whileHover={{
        y: -12,
      }}
      transition={{
        duration: 0.35,
      }}
    >
      <div className="service-card__image">
        <img src={image} alt={title} />
      </div>

      <div className="service-card__content">
        <div className="service-card__line"></div>

        <h3>{title}</h3>

        <p>{description}</p>
      </div>
    </motion.article>
  );
};

export default ServiceCard;
