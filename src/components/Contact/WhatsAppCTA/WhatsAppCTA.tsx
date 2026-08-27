import "./WhatsAppCTA.css";
import { motion } from "framer-motion";
import { FiMessageCircle, FiArrowUpRight } from "react-icons/fi";
import Section from "../../layout/Section/Section";
import Container from "../../layout/Container/Container";
const WhatsAppCTA = () => {
  return (
    <Section className="whatsapp-cta">
      {" "}
      <Container>
        {" "}
        <motion.div
          className="whatsapp-cta__content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {" "}
          <div className="whatsapp-cta__icon">
            {" "}
            <FiMessageCircle />{" "}
          </div>
          <div className="whatsapp-cta__text">
            <span>QUICKER CONVERSATION</span>

            <h2>Prefer to talk on WhatsApp?</h2>

            <p>
              Send us a message directly and tell us a little about the space
              you'd like to transform.
            </p>
          </div>
          <a
            href="https://wa.me/2347010353293"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-cta__button"
          >
            <span>Chat With Us</span>

            <FiArrowUpRight />
          </a>
        </motion.div>
      </Container>
    </Section>
  );
};
export default WhatsAppCTA;
