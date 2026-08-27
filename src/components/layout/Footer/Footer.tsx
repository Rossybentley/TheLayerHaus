import "./Footer.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiInstagram,
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";
import Container from "../Container/Container";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      {" "}
      <Container>
        {" "}
        {/* ================================ TOP ================================= */}
        <div className="footer-top">
          {/* Brand */}

          <div className="footer-brand">
            <p className="footer-eyebrow">THE LAYER HAUS</p>

            <h2>Creating Timeless Interiors.</h2>

            <p className="footer-description">
              Bespoke curtains, premium blinds and elegant interior styling
              designed to elevate every space.
            </p>

            <div className="footer-socials">
              <motion.a
                href="https://www.instagram.com/layerhaus.ng"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit The Layer Haus on Instagram"
                whileHover={{ y: -4 }}
              >
                <FiInstagram />
              </motion.a>
            </div>
          </div>

          {/* Links */}

          <div className="footer-links">
            {/* Explore */}

            <div className="footer-column">
              <h3>Explore</h3>

              <Link to="/">Home</Link>

              <Link to="/about">About</Link>

              <Link to="/services">Services</Link>

              <Link to="/projects">Projects</Link>

              <Link to="/gallery">Gallery</Link>

              <Link to="/contact">Contact</Link>
            </div>

            {/* Services */}

            <div className="footer-column">
              <h3>Services</h3>

              <Link to="/services">Luxury Curtains</Link>

              <Link to="/services">Luxury Blinds</Link>

              <Link to="/services">Premium Wallpapers</Link>

              <Link to="/services">Interior Styling</Link>
            </div>

            {/* Contact */}

            <div className="footer-column">
              <h3>Contact</h3>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Yaba%2C%20Lagos%2C%20Nigeria"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-contact"
              >
                <FiMapPin />

                <span>Yaba, Lagos</span>
              </a>

              <a href="tel:+2347010353293" className="footer-contact">
                <FiPhone />

                <span>+234 701 035 3293</span>
              </a>

              <a href="mailto:layerhaus24@gmail.com" className="footer-contact">
                <FiMail />

                <span>Layerhaus24@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
        {/* ================================
        NEWSLETTER
    ================================= */}
        <div className="footer-newsletter">
          <div>
            <h3>Stay Inspired</h3>

            <p>
              Receive design inspiration, styling tips and exclusive updates.
            </p>
          </div>

          <form
            className="newsletter-form"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              required
            />

            <button type="submit">
              <span>Subscribe</span>

              <FiArrowUpRight />
            </button>
          </form>
        </div>
        {/* ================================
        BOTTOM
    ================================= */}
        <div className="footer-bottom">
          <p>© {currentYear} The Layer Haus. All rights reserved.</p>
          <span>Crafted with elegance.</span>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
