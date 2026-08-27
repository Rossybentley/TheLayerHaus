import "./Story.css";

import { motion } from "framer-motion";

import Container from "../../layout/Container/Container";
import Section from "../../layout/Section/Section";

import { story } from "../../../data/story";

const Story = () => {
  return (
    <Section className="story">
      <Container>
        <div className="section-header">
          <p>OUR JOURNEY</p>

          <h2>The Story Behind The Layer Haus</h2>

          <span className="section-line" />
        </div>

        <div className="story-timeline">
          <motion.div
            className="story-line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4 }}
          />

          {story.map((item, index) => (
            <motion.div
              key={item.year}
              className={`story-item ${index % 2 === 0 ? "left" : "right"}`}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.7,
              }}
            >
              <div className="story-dot" />

              <div className="story-card">
                <span>{item.year}</span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Story;
