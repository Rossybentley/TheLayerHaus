import "./Hero.css";
import { motion } from "framer-motion";

import { fadeLeft } from "../../../utils/animation";

import Container from "../../layout/Container/Container";
import Section from "../../layout/Section/Section";
import Button from "../../ui/Button/Button";
import heroImage from "../../../assets/images/hero/hero-main.jpg";

const Hero = () => {
  return (
    <Section id="home" className="hero">
      <div className="hero__background">
        <img src={heroImage} alt="Luxury Curtains" />
      </div>

      <Container>
        <motion.div
          className="hero__content"
          variants={fadeLeft}
          initial="hidden"
          animate="visible"
        >
          <p className="hero__eyebrow">Premium Interior Decoration</p>

          <h1 className="hero__title">
            Layered For
            <br />
            Elevated Living
          </h1>

          <p className="hero__description">
            Creating timeless interiors through bespoke curtains, blinds and
            elegant styling tailored for modern living.
          </p>

          <div className="hero__buttons">
            <Button>Book Consultation</Button>

            <Button variant="secondary">View Projects</Button>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default Hero;
