import "./InstagramGallery.css";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight, FiX } from "react-icons/fi";

import Section from "../../layout/Section/Section";
import Container from "../../layout/Container/Container";

import { galleryImages } from "../../../data/gallery";

const InstagramGallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <Section id="gallery" className="gallery">
      <Container>
        <div className="section-header">
          <p>FOLLOW OUR JOURNEY</p>

          <h2>Inspired Spaces</h2>

          <p>
            Explore a curated collection of interiors that reflect timeless
            elegance and thoughtful craftsmanship.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((item, index) => (
            <motion.div
              key={item.id}
              className={`gallery-card ${
                index % 3 === 0 ? "gallery-card--tall" : ""
              }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              onClick={() => setSelectedImage(item.image)}
            >
              <img src={item.image} alt={item.category} />

              <div className="gallery-overlay">
                <span>{item.category}</span>

                <FiArrowUpRight />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="gallery-footer"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="https://instagram.com/thelayerhaus"
            target="_blank"
            rel="noopener noreferrer"
            className="gallery-button"
          >
            View More on Instagram
            <FiArrowUpRight />
          </a>
        </motion.div>
      </Container>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              <FiX />
            </button>

            <motion.img
              src={selectedImage}
              alt="The Layer Haus Project"
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default InstagramGallery;
