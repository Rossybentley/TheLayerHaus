import "./About.css";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";

import Container from "../../layout/Container/Container";
import Section from "../../layout/Section/Section";

import aboutImage from "../../../assets/images/about/about-hero.jpg";

import { stats, features } from "../../../data/about";

const About = () => {
  return (
    <Section id="about" className="about">
      <Container>
        <div className="about__wrapper">
          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="section-tag">ABOUT US</p>

            <h2>Creating Timeless Interiors Designed Around You</h2>

            <p>
              At The Layer Haus, we transform ordinary spaces into elegant
              environments through carefully selected curtains, blinds,
              wallpapers, mirrors and bespoke interior styling.
            </p>

            <div className="about__features">
              {features.map((feature) => (
                <div key={feature} className="feature">
                  <FiCheck />

                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about__image"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={aboutImage} alt="Luxury Interior" />

            <div className="experience-card">
              <h3>8+</h3>

              <p>Years of Luxury Interior Experience</p>
            </div>
          </motion.div>
        </div>

        <div className="about__stats">
          {stats.map((item) => (
            <motion.div
              key={item.label}
              className="stat-card"
              whileHover={{ y: -8 }}
            >
              <h3>{item.number}</h3>

              <p>{item.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default About;
