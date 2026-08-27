import "./ConsultationCTA.css";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import Section from "../../layout/Section/Section";
import Button from "../../ui/Button/Button";

import ctaImage from "../../../assets/images/services/cta.jpg";

const ConsultationCTA = () => {
  const navigate = useNavigate();

  return (
    <Section className="services-cta">
      <img
        src={ctaImage}
        alt="Luxury Interior"
        className="services-cta__background"
      />

      <div className="services-cta__overlay" />

      <motion.div
        className="services-cta__content"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <span>LET'S CREATE SOMETHING BEAUTIFUL</span>

        <h2>
          Ready To Transform
          <br />
          Your Space?
        </h2>

        <p>
          Whether you're decorating a new home, renovating an existing one, or
          simply refreshing a room, we're ready to bring your vision to life
          with thoughtful design and exceptional craftsmanship.
        </p>

        <div className="services-cta__buttons">
          <Button onClick={() => navigate("/contact")}>
            Book Consultation
            <FiArrowRight />
          </Button>

          <Button variant="secondary" onClick={() => navigate("/projects")}>
            View Projects
          </Button>
        </div>

        <motion.div
          className="services-cta__badge"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <span>★★★★★</span>

          <h4>500+ Spaces Transformed</h4>

          <p>Trusted by homeowners and businesses across Nigeria.</p>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default ConsultationCTA;
