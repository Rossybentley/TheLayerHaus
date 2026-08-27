import "./FAQ.css";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

import Section from "../../layout/Section/Section";
import Container from "../../layout/Container/Container";

import { faqs } from "../../../data/faq";

import faqImage from "../../../assets/images/services/faq.jpg";

const FAQ = () => {
  const [active, setActive] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <Section className="faq">
      <Container>
        <div className="faq__grid">
          <motion.div
            className="faq__content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="section-header section-header--left">
              <p>FREQUENTLY ASKED QUESTIONS</p>

              <h2>Everything You Need to Know</h2>

              <p>
                We've answered some of the most common questions our clients ask
                before starting their interior design journey.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div
                  className={`faq-item ${active === index ? "active" : ""}`}
                  key={faq.question}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span>{faq.question}</span>

                    {active === index ? <FiMinus /> : <FiPlus />}
                  </button>

                  <AnimatePresence>
                    {active === index && (
                      <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="faq__image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src={faqImage} alt="Interior consultation" />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default FAQ;
