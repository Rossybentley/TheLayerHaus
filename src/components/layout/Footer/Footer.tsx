import "./Footer.css";

import { motion } from "framer-motion";
import {
  FiInstagram,
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowUpRight,
} from "react-icons/fi";

import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        {/* Top Section */}

        <div className="footer-top">
          <div className="footer-brand">
            <p className="footer-eyebrow">THE LAYER HAUS</p>

            <h2>Creating Timeless Interiors.</h2>

            <p className="footer-description">
              Bespoke curtains, premium blinds and elegant interior styling
              designed to elevate every space.
            </p>

            <div className="footer-socials">
              <motion.a
                whileHover={{ y: -4 }}
                href="https://instagram.com/thelayerhaus"
                target="_blank"
                rel="noreferrer"
              >
                <FiInstagram />
              </motion.a>

              {/* <motion.a whileHover={{ y: -4 }} href="#">
                <FiFacebook />
              </motion.a> */}
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h3>Explore</h3>

              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#projects">Projects</a>
              <a href="#gallery">Gallery</a>
            </div>

            <div>
              <h3>Services</h3>

              <a href="#">Luxury Curtains</a>
              <a href="#">Window Blinds</a>
              <a href="#">Interior Styling</a>
              <a href="#">Installation</a>
            </div>

            <div>
              <h3>Contact</h3>

              <div className="footer-contact">
                <FiMapPin />

                <span>Yaba, Lagos State</span>
              </div>

              <div className="footer-contact">
                <FiPhone />

                <span>+234 701 035 3293</span>
              </div>

              <div className="footer-contact">
                <FiMail />

                <span>Layerhaus24@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}

        <div className="footer-newsletter">
          <div>
            <h3>Stay Inspired</h3>

            <p>
              Receive design inspiration, styling tips and exclusive updates.
            </p>
          </div>

          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />

            <button type="submit">
              Subscribe
              <FiArrowUpRight />
            </button>
          </form>
        </div>

        {/* Bottom */}

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} The Layer Haus. All rights reserved.
          </p>

          <span>Crafted with elegance.</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
