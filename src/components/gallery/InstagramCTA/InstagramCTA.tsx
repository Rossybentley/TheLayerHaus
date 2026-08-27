import "./InstagramCTA.css";

import { motion } from "framer-motion";
import { FiInstagram, FiArrowUpRight } from "react-icons/fi";

import Section from "../../layout/Section/Section";
import Container from "../../layout/Container/Container";

const InstagramCTA = () => {
  return (
    <Section className="instagram-cta">
      <Container>
        <motion.div
          className="instagram-cta__content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="instagram-cta__icon">
            <FiInstagram />
          </div>

          <span>FOLLOW OUR JOURNEY</span>

          <h2>
            More Beautiful Spaces,
            <br />
            More Inspiration.
          </h2>

          <p>
            Follow The Layer Haus on Instagram for new projects, styling
            inspiration, behind-the-scenes moments and more beautiful
            transformations.
          </p>

          <a
            href="https://www.instagram.com/layerhaus.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-cta__button"
          >
            <span>Follow Us on Instagram</span>

            <FiArrowUpRight />
          </a>
        </motion.div>
      </Container>
    </Section>
  );
};

export default InstagramCTA;
