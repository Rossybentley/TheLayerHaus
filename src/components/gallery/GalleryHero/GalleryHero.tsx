import "./GalleryHero.css";

import { motion } from "framer-motion";

import Container from "../../layout/Container/Container";
import heroImage from "../../../assets/images/gallery/gallery-hero.jpg";

const GalleryHero = () => {
  return (
    <section className="gallery-hero">
      <img src={heroImage} alt="Gallery Hero" />

      <div className="gallery-hero__overlay" />

      <Container>
        <motion.div
          className="gallery-hero__content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">OUR GALLERY</span>

          <h1>
            Beautiful Spaces,
            <br />
            Thoughtfully Designed
          </h1>

          <p>
            Explore a collection of interiors we've transformed with premium
            curtains, styling and timeless design.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export default GalleryHero;
