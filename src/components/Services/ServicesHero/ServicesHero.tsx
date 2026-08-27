import "./ServicesHero.css";

import { motion } from "framer-motion";

import Container from "../../layout/Container/Container";
import Section from "../../layout/Section/Section";

import heroImage from "../../../assets/images/services/services-hero.jpg";

const ServicesHero = () => {
  return (
    <Section className="services-hero">
      <div className="services-hero__image">
        <img src={heroImage} alt="Luxury Interior Design Services" />

        <div className="services-hero__overlay" />
      </div>

      <Container>
        <motion.div
          className="services-hero__content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">OUR SERVICES</span>

          <h1>
            Beautiful Interiors,
            <br />
            Thoughtfully Designed.
          </h1>

          <p>
            From bespoke curtains to complete interior styling, we create
            elegant spaces that combine beauty, comfort and functionality.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
};

export default ServicesHero;
