import "./ConsultationCTA.css";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiArrowUpRight, FiPhone, FiCheckCircle } from "react-icons/fi";

import Section from "../../layout/Section/Section";
import Container from "../../layout/Container/Container";
import Button from "../../ui/Button/Button";

import consultationImage from "../../../assets/images/consultation/consultation.jpg";

const features = [
  "Bespoke Design Consultation",
  "Professional Measurement",
  "Premium Installation",
];

const ConsultationCTA = () => {
  const navigate = useNavigate();

  return (
    <Section id="contact" className="consultation">
      <Container>
        <motion.div
          className="consultation-card"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Left Side */}

          <div className="consultation-content">
            <p className="consultation-eyebrow">BOOK A CONSULTATION</p>

            <h2>
              Ready to Transform
              <br />
              Your Space?
            </h2>

            <p className="consultation-description">
              Every exceptional interior begins with a thoughtful conversation.
              We help you choose fabrics, colors, layouts and finishing touches
              that perfectly suit your lifestyle and space.
            </p>

            <div className="consultation-features">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  className="consultation-feature"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                  }}
                >
                  <FiCheckCircle />

                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            <div className="consultation-note">
              Your consultation fee is fully credited toward your curtain
              purchase when you proceed with your project.
            </div>

            <div className="consultation-buttons">
              <Button onClick={() => navigate("/contact")}>
                Book Consultation
                <FiArrowUpRight />
              </Button>

              <Button
                variant="secondary"
                onClick={() => {
                  window.location.href = "tel:+2347010353293";
                }}
              >
                <FiPhone />
                Call Us
              </Button>
            </div>
          </div>

          {/* Right Side */}

          <motion.div
            className="consultation-image"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            <img src={consultationImage} alt="Luxury Interior" />

            <div className="consultation-overlay" />

            <motion.div
              className="consultation-badge"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span>Premium Craftsmanship</span>

              <h3>Tailored For Your Home</h3>

              <p>
                Luxury curtains, blinds and interior styling designed
                specifically for your space.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
};

export default ConsultationCTA;
