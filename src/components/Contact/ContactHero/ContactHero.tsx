import "./ContactHero.css";

import { motion } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";

import Section from "../../layout/Section/Section";
import Container from "../../layout/Container/Container";

const ContactHero = () => {
  const scrollToDetails = () => {
    const section = document.getElementById("contact-details");

    section?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Section className="contact-hero">
      <Container>
        <div className="contact-hero__content">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            LET'S TALK
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >
            Let's Create
            <br />
            <em>Something Beautiful.</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
          >
            Have a space you'd love to transform? Tell us what you're imagining
            and let's start a conversation.
          </motion.p>

          <motion.button
            type="button"
            className="contact-hero__scroll"
            onClick={scrollToDetails}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
            }}
          >
            <span>Explore Contact Details</span>

            <FiArrowDown />
          </motion.button>
        </div>
      </Container>

      <div className="contact-hero__line" />
    </Section>
  );
};

export default ContactHero;
