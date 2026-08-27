import "./Philosophy.css";

import { motion } from "framer-motion";

import Container from "../../layout/Container/Container";
import Section from "../../layout/Section/Section";

const Philosophy = () => {
  return (
    <Section className="philosophy">
      <Container>
        <div className="philosophy__grid">
          <motion.div
            className="philosophy__content"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-tag">OUR PHILOSOPHY</span>

            <h2>
              Beautiful interiors should
              <br />
              feel as good as they look.
            </h2>

            <p>
              At The Layer Haus, we believe every space should reflect the
              people who live in it. We don't simply install curtains—we
              carefully curate environments that feel elegant, warm and
              timeless.
            </p>

            <p>
              Every project begins with understanding your lifestyle,
              preferences and vision, allowing us to create spaces that remain
              beautiful for years to come.
            </p>
          </motion.div>

          <motion.div
            className="philosophy__quote"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="quote-card">
              <span className="quote-mark">“</span>

              <p>
                Design is not just decoration. It's creating a home you'll love
                living in every single day.
              </p>

              <div className="gold-line" />
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default Philosophy;
