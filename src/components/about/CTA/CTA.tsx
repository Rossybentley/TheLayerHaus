import "./CTA.css";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import Section from "../../layout/Section/Section";
import Container from "../../layout/Container/Container";

import image from "../../../assets/images/about/cta-image.jpg";

const CTA = () => {
  return (
    <Section className="about-cta">
      <Container>
        <div className="about-cta__grid">
          <motion.div
            className="about-cta__content"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-tag">
              LET'S CREATE SOMETHING BEAUTIFUL
            </span>

            <h2>
              Your Dream Space
              <br />
              Starts With A Conversation.
            </h2>

            <p>
              Whether you're decorating a new home, refreshing a room, or
              looking for bespoke curtains, we're ready to bring your ideas to
              life with thoughtful design and expert craftsmanship.
         n   </p>

            <div className="about-cta__buttons">
              <Link to="/contact" className="primary-btn">
                Book a Consultation
                <FiArrowRight />
              </Link>

              <Link to="/projects" className="secondary-btn">
                View Projects
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="about-cta__image"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src={image} alt="Luxury Interior" />

            <div className="floating-badge">
              <span>★★★★★</span>

              <h4>Trusted Across Nigeria</h4>

              <p>Elegant interiors designed with care.</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default CTA;
