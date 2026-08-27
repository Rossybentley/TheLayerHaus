import "./AboutHero.css";

import { motion } from "framer-motion";

import Container from "../../layout/Container/Container";
import Section from "../../layout/Section/Section";

import heroImage from "../../../assets/images/about/about-hero.jpg";

const AboutHero = () => {
  return (
    <Section className="about-hero">
      <div className="about-hero__image">
        <img src={heroImage} alt="Luxury interior designed by The Layer Haus" />

        <div className="about-hero__overlay" />
      </div>

      <Container>
        <motion.div
          className="about-hero__content"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="about-hero__eyebrow">ABOUT THE LAYER HAUS</p>

          <h1 className="about-hero__title">
            Designing Spaces
            <br />
            That Feel Like Home.
          </h1>

          <p className="about-hero__description">
            We believe exceptional interiors are more than beautiful—they should
            reflect your lifestyle, elevate everyday living, and remain timeless
            for years to come.
          </p>
        </motion.div>
      </Container>
    </Section>
  );
};

export default AboutHero;
