import "./FeatureCard.css";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <motion.article
      className="feature-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
    >
      <div className="feature-card__icon">
        <Icon />
      </div>

      <div className="feature-card__content">
        <h3>{title}</h3>

        <p>{description}</p>
      </div>
    </motion.article>
  );
};

export default FeatureCard;
