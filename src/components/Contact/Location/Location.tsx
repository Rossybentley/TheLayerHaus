import "./Location.css";
import { FiMapPin, FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import Section from "../../layout/Section/Section";
import Container from "../../layout/Container/Container";
const Location = () => {
  return (
    <Section className="location">
      {" "}
      <Container>
        {" "}
        <div className="location__header">
          {" "}
          <div>
            {" "}
            <span>FIND US</span>
            <h2>Visit The Layer Haus</h2>
          </div>
          <p>
            Based in Yaba, Lagos, we're here to help you create a space that
            feels distinctly yours.
          </p>
        </div>
        <motion.div
          className="location__map"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <iframe
            title="The Layer Haus location"
            src="https://www.google.com/maps?q=Yaba,Lagos,Nigeria&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          <div className="location__overlay">
            <div className="location__pin">
              <FiMapPin />
            </div>

            <div>
              <span>LOCATION</span>

              <h3>Yaba, Lagos</h3>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Yaba%2C%20Lagos%2C%20Nigeria"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Open in Maps</span>

              <FiArrowUpRight />
            </a>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
};
export default Location;
