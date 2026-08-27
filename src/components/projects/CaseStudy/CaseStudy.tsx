import "./CaseStudy.css";

import { motion } from "framer-motion";

import Section from "../../layout/Section/Section";
import Container from "../../layout/Container/Container";

import { caseStudy } from "../../../data/caseStudy";

const CaseStudy = () => {
  return (
    <Section className="case-study">
      <Container>
        <div className="section-header">
          <p>FEATURED PROJECT</p>

          <h2>A Closer Look</h2>

          <p>
            Every project has a story. Here's how we transformed one space into
            something elegant, functional and timeless.
          </p>
        </div>

        <div className="case-study__grid">
          <motion.div
            className="case-study__image"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={caseStudy.image}
              alt={caseStudy.title}
            />
          </motion.div>

          <motion.div
            className="case-study__content"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span>{caseStudy.location}</span>

            <h3>{caseStudy.title}</h3>

            <p>{caseStudy.overview}</p>

            <div className="case-study__details">
              <div>
                <h4>Challenge</h4>
                <p>{caseStudy.challenge}</p>
              </div>

              <div>
                <h4>Solution</h4>
                <p>{caseStudy.solution}</p>
              </div>
            </div>

            <div className="case-study__stats">
              <div>
                <small>Duration</small>

                <strong>{caseStudy.duration}</strong>
              </div>

              <div>
                <small>Services</small>

                <strong>{caseStudy.services}</strong>
              </div>

              <div>
                <small>Client</small>

                <strong>{caseStudy.client}</strong>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default CaseStudy;