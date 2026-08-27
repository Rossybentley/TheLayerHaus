import "./Process.css";

import { motion } from "framer-motion";

import Container from "../../layout/Container/Container";
import Section from "../../layout/Section/Section";

import useHoverCapable from "../../../hooks/useHoverCapable";

import { processSteps } from "../../../data/process";

const Process = () => {
  const canHover = useHoverCapable();

  return (
    <Section id="process" className="process">
      <Container>
        <div className="section-header">
          <p>OUR PROCESS</p>

          <h2>Bringing Your Vision To Life</h2>

          <p>
            Every project follows a carefully crafted journey from consultation
            to installation, ensuring a seamless and luxurious experience.
          </p>
        </div>

        <div className="process-pattern" />

        <div className="timeline">
          {/* Animated Gold Line */}
          <motion.div
            className="timeline-line"
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1.8,
              ease: "easeOut",
            }}
          />

          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.id}
                className={`timeline-item ${
                  index % 2 === 0 ? "left" : "right"
                }`}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                whileHover={canHover ? { y: -12, scale: 1.02 } : undefined}
              >
                {/* Gold Dot */}
                <div className="timeline-dot" />

                <div className="timeline-connector"></div>

                {/* Glass Card */}
                <div className="timeline-card">
                  <span className="timeline-number">{step.id}</span>

                  <div className="timeline-icon">
                    <Icon />
                  </div>

                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Process;
