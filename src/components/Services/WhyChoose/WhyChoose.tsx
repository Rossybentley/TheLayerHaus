import "./WhyChoose.css";

import { motion } from "framer-motion";

import Container from "../../layout/Container/Container";
import Section from "../../layout/Section/Section";

import { whyChoose } from "../../../data/whyChoose";

const WhyChoose = () => {
  return (
    <Section className="services-why">
      <Container>
        <div className="section-header">
          <p>WHY CHOOSE US</p>

          <h2>More Than Beautiful Interiors</h2>

          <p>
            Great design goes beyond appearance. It's about creating spaces that
            feel comfortable, functional, and truly yours.
          </p>
        </div>

        <div className="services-why__grid">
          {whyChoose.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                className="why-card"
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
              >
                <div className="why-card__icon">
                  <Icon />
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default WhyChoose;
