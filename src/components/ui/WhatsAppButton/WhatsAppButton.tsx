import "./WhatsAppButton.css";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phone = "2347010353293";

  const message = encodeURIComponent(
    "Hello The Layer Haus, I'd like to book a consultation for my home.",
  );

  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chat on WhatsApp"
      animate={{
        scale: [1, 1.08, 1],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
      }}
      whileHover={{
        scale: 1.12,
      }}
    >
      <FaWhatsapp />
    </motion.a>
  );
};

export default WhatsAppButton;
