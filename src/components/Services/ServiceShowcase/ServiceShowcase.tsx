import "./ServiceShowcase.css";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";

import Section from "../../layout/Section/Section";
import Container from "../../layout/Container/Container";
import Button from "../../ui/Button/Button";

import { services } from "../../../data/services";

const ServiceShowcase = () => {
  const navigate = useNavigate();

  return (
    <Section className="service-showcase">
      <Container>
        <div className="section-header">
          <p>OUR SERVICES</p>

          <h2>Crafted Around Your Lifestyle</h2>

          <p>
            Every project is tailored to your space, your taste and the way you
            live. We combine thoughtful design with premium materials to create
            interiors that feel both elegant and personal.
          </p>
        </div>

        {services.map((service, index) => (
          <div
            key={service.id}
            id={`service-${service.id}`}
            className={`service-row ${
              index % 2 === 0 ? "" : "service-row--reverse"
            }`}
          >
            <motion.div
              className="service-image"
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -80 : 80,
                scale: 1.1,
              }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            >
              <img
                src={service.image}
                alt={`${service.title} interior decoration`}
              />
            </motion.div>

            <motion.div
              className="service-content"
              initial={{ opacity: 0, x: index % 2 === 0 ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span>{service.subtitle}</span>

              <h3>{service.title}</h3>

              <div className="service-line" />

              <p>{service.description}</p>

              <ul>
                {service.features.map((feature) => (
                  <li key={feature}>
                    <FiCheck />

                    {feature}
                  </li>
                ))}
              </ul>

              <Button onClick={() => navigate("/contact")}>
                Book Consultation
                <FiArrowRight />
              </Button>
            </motion.div>
          </div>
        ))}
      </Container>
    </Section>
  );
};

export default ServiceShowcase;
