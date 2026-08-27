import "./Founder.css";

import { motion } from "framer-motion";

import Container from "../../layout/Container/Container";
import Section from "../../layout/Section/Section";

import founderImage from "../../../assets/images/Founder/Founder.jpg";

const Founder = () => {
  return (
    <Section className="founder">
      <Container>
        <div className="founder__grid">
          <motion.div
            className="founder__image"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={founderImage} alt="Founder of The Layer Haus" />
          </motion.div>

          <motion.div
            className="founder__content"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-tag">MEET THE FOUNDER</span>

            <h2>Every beautiful space begins with listening.</h2>

            <p>
              When I started The Layer Haus, my goal wasn't simply to provide
              curtains or décor—it was to help people create homes that feel
              comfortable, elegant, and truly their own.
            </p>

            <p>
              Every project starts with understanding how you live, what
              inspires you, and what you want to feel when you walk into your
              space. From there, we carefully select fabrics, colours, and
              finishes that bring your vision to life.
            </p>

            <blockquote>
              "The best interiors don't just impress guests. They make coming
              home the best part of your day."
            </blockquote>

            <h4>The Layer Haus</h4>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Founder;
