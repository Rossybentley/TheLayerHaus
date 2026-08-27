import "./ContactDetails.css";

import {
  FiPhone,
  FiMessageCircle,
  FiMapPin,
  FiMail,
  FiClock,
} from "react-icons/fi";

import Section from "../../layout/Section/Section";
import Container from "../../layout/Container/Container";

const ContactDetails = () => {
  return (
    <Section className="contact-details" id="contact-details">
      <Container>
        <div className="contact-details__header">
          <span>GET IN TOUCH</span>

          <h2>Let's Create Something Beautiful</h2>

          <p>
            Whether you're looking to transform one room or an entire space,
            we'd love to hear about your project.
          </p>
        </div>

        <div className="contact-details__grid">
          <a href="tel:+2347010353293" className="contact-details__card">
            <div className="contact-details__icon">
              <FiPhone />
            </div>

            <div>
              <span>Phone</span>
              <h3>+234 701 035 3293</h3>
            </div>
          </a>

          <a
            href="https://wa.me/2347010353293"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-details__card"
          >
            <div className="contact-details__icon">
              <FiMessageCircle />
            </div>

            <div>
              <span>WhatsApp</span>
              <h3>+234 701 035 3293</h3>
            </div>
          </a>

          <div className="contact-details__card">
            <div className="contact-details__icon">
              <FiMapPin />
            </div>

            <div>
              <span>Visit Us</span>
              <h3>Yaba, Lagos</h3>
            </div>
          </div>

          <a
            href="mailto:Layerhaus24@gmail.com"
            className="contact-details__card"
          >
            <div className="contact-details__icon">
              <FiMail />
            </div>

            <div>
              <span>Email</span>
              <h3>Layerhaus24@gmail.com</h3>
            </div>
          </a>

          <div className="contact-details__card">
            <div className="contact-details__icon">
              <FiClock />
            </div>

            <div>
              <span>Opening Hours</span>
              <h3>From 09:00</h3>
            </div>
          </div>

          <div className="contact-details__card">
            <div className="contact-details__icon">
              <FiClock />
            </div>

            <div>
              <span>Closing Hours</span>
              <h3>From 18:00</h3>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactDetails;
