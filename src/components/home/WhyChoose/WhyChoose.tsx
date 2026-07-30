import "./WhyChoose.css";
import { motion } from "framer-motion";

import heroImage from "../../../assets/images/hero/hero-main.jpg";

import { features } from "../../../data/features";
import FeatureCard from "../../ui/FeatureCard/FeatureCard";
import Container from "../../layout/Container/Container";

const WhyChooseUs = () => {
  return (
    <section className="why-choose" id="why-choose">
      <Container className="why-choose__container">
        <motion.div
          className="why-choose__content"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-tag">WHY CHOOSE THE LAYER HAUS</p>

          <h2>Designed For Beautiful Living.</h2>

          <p className="why-choose__description">
            We transform homes and commercial spaces with luxury curtains,
            blinds, wallpapers, mirrors and bespoke interior styling. Every
            project is carefully executed to create spaces that feel elegant,
            timeless and personal.
          </p>

          <div className="why-choose__features">
            {features.map((feature) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="why-choose__image"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <img src={heroImage} alt="Luxury Interior" />
        </motion.div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
