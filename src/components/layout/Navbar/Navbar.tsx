import "./Navbar.css";

import {
  menuContainer,
  menuItem,
  goldLine,
} from "../../../utils/navbarAnimation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowUpRight,
  FiMenu,
  FiX,
  FiInstagram,
  FiMessageCircle,
  FiPhone,
  FiMail,
} from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import Container from "../Container/Container";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
    >
      <Container>
        <nav className="navbar__content">
          {/* Logo */}

          <Link to="/" className="navbar__logo">
            THE LAYER HAUS
          </Link>

          {/* Desktop Navigation */}

          <ul className="navbar__links">
            <li>
              <a href="#home">Home</a>
            </li>

            <li>
              <a href="#about">About</a>
            </li>

            <li>
              <a href="#services">Services</a>
            </li>

            <li>
              <a href="#projects">Projects</a>
            </li>

            <li>
              <a href="#gallery">Gallery</a>
            </li>

            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          {/* Desktop CTA */}

          <a href="#contact" className="navbar__button">
            Book Consultation
            <FiArrowUpRight className="navbar__button-icon" />
          </a>

          {/* Mobile Toggle */}

          <button
            className="navbar__toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.45 }}
          >
            <div className="mobile-menu__glow" />
            <motion.div
              className="mobile-menu__line"
              variants={goldLine}
              initial="hidden"
              animate="visible"
            />

            <motion.ul
              className="mobile-menu__links"
              variants={menuContainer}
              initial="hidden"
              animate="visible"
            >
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Services", "#services"],
                ["Projects", "#projects"],
                ["Gallery", "#gallery"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <motion.li key={label} variants={menuItem}>
                  <a href={href} onClick={closeMenu}>
                    {label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>

            <a
              href="#contact"
              className="mobile-menu__button"
              onClick={closeMenu}
            >
              Book Your Consultation
              <FiArrowUpRight />
            </a>

            <div className="mobile-menu__socials">
              <a
                href="https://www.instagram.com/layerhaus.ng?igsh=MWMxNmdlMjhycjc5Zw=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>

              <a href="tel:+2347010353293" aria-label="Phone">
                <FiPhone />
              </a>

              <a
                href="https://www.tiktok.com/@layerhaus.ng?_r=1&_t=ZS-98RGhWkwJOf"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
              >
                <SiTiktok />
              </a>
              <a
                href="https://wa.me/2347010353293"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <FiMessageCircle />
              </a>
              <a href="mailto:layerhaus24@gmail.com" aria-label="Email">
                <FiMail />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
