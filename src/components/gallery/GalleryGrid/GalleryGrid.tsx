import "./GalleryGrid.css";

import { useState } from "react";
import { motion } from "framer-motion";

import Container from "../../layout/Container/Container";
import Section from "../../layout/Section/Section";

import { galleryCategories, galleryImages } from "../../../data/gallery";

import Lightbox from "../Lightbox/Lightbox";

const GalleryGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((image) => image.category === activeCategory);

  const handleNext = () => {
    if (activeIndex === null) return;

    setActiveIndex((activeIndex + 1) % filteredImages.length);
  };

  const handlePrevious = () => {
    if (activeIndex === null) return;

    setActiveIndex(
      (activeIndex - 1 + filteredImages.length) % filteredImages.length,
    );
  };

  return (
    <Section className="gallery-page-grid">
      <Container>
        <div className="gallery-filters">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setActiveIndex(null);
              }}
              className={activeCategory === category ? "active" : ""}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-masonry">
          {filteredImages.map((image, index) => (
            <motion.article
              key={image.id}
              className="gallery-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
              }}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={image.image}
                alt={`${image.title} interior by The Layer Haus`}
              />

              <div className="gallery-overlay">
                <span>{image.location}</span>

                <h3>{image.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>

      <Lightbox
        images={filteredImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </Section>
  );
};

export default GalleryGrid;
