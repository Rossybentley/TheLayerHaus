import "./Lightbox.css";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiX } from "react-icons/fi";

interface LightboxImage {
  id: number;
  image: string;
  title: string;
  location: string;
}

interface LightboxProps {
  images: LightboxImage[];
  activeIndex: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const Lightbox = ({
  images,
  activeIndex,
  onClose,
  onNext,
  onPrevious,
}: LightboxProps) => {
  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        onNext();
      }

      if (event.key === "ArrowLeft") {
        onPrevious();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);

      document.body.style.overflow = "";
    };
  }, [activeIndex, onClose, onNext, onPrevious]);

  if (activeIndex === null) {
    return null;
  }

  const activeImage = images[activeIndex];

  if (!activeImage) {
    return null;
  }

  return (
    <motion.div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      {/* Close */}
      <button
        type="button"
        className="lightbox__close"
        onClick={onClose}
        aria-label="Close image viewer"
      >
        <FiX />
      </button>

      {/* Previous */}
      <button
        type="button"
        className="lightbox__arrow lightbox__arrow--left"
        onClick={(event) => {
          event.stopPropagation();
          onPrevious();
        }}
        aria-label="Previous image"
      >
        <FiArrowLeft />
      </button>

      {/* Image */}
      <motion.div
        className="lightbox__content"
        onClick={(event) => event.stopPropagation()}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.2}
        onDragEnd={(_, info) => {
          const swipeDistance = info.offset.x;

          const swipeVelocity = info.velocity.x;

          if (swipeDistance < -80 || swipeVelocity < -500) {
            onNext();
          }

          if (swipeDistance > 80 || swipeVelocity > 500) {
            onPrevious();
          }
        }}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={activeImage.image}
          alt={activeImage.title}
          draggable={false}
        />

        <div className="lightbox__info">
          <span>{activeImage.location}</span>

          <h3>{activeImage.title}</h3>

          <p>
            {activeIndex + 1} / {images.length}
          </p>
        </div>
      </motion.div>

      {/* Next */}
      <button
        type="button"
        className="lightbox__arrow lightbox__arrow--right"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
      >
        <FiArrowRight />
      </button>
    </motion.div>
  );
};

export default Lightbox;
