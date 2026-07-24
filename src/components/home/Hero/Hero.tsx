import "./Hero.css";
import { motion } from "framer-motion";

import { fadeLeft, fadeRight } from "../../../utils/animation";

import Container from "../../layout/Container/Container";
import Section from "../../layout/Section/Section";
import Button from "../../ui/Button/Button";

const Hero = () => {
  return (
    <Section className="hero">
      <Container>
        <div className="hero__wrapper">
          <motion.div
            className="hero__content"
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
          >
            <div className="hero__line"></div>
            <p className="hero__eyebrow">Premium Interior Decoration</p>

            <h1 className="hero__title">
              Layered
              <br />
              <span>For Elevated</span>
              <br />
              Living
            </h1>

            <p className="hero__description">
              Creating refined interiors through bespoke curtains, elegant
              wallpapers, premium blinds, and timeless styling that transform
              everyday spaces into extraordinary experiences.
            </p>

            <div className="hero__buttons">
              <Button>Book Consultation</Button>

              <Button variant="secondary">Explore Projects</Button>
            </div>
          </motion.div>

          <motion.div
            className="hero__image"
            variants={fadeRight}
            initial="hidden"
            animate="visible"
          >
            Image Here
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
