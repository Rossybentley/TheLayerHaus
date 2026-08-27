import "./Statistics.css";

import { motion } from "framer-motion";

import Container from "../../layout/Container/Container";
import Section from "../../layout/Section/Section";

import { statistics } from "../../../data/statistics";

const Statistics = () => {
  return (
    <Section className="statistics">
      <Container>
        <div className="section-header">
          <p>OUR IMPACT</p>

          <h2>
            Built on Trust,
            <br />
            Measured by Results.
          </h2>

          <p>
            Every project is an opportunity to create a space our clients
            genuinely enjoy living in.
          </p>
        </div>

        <div className="statistics__grid">
          {statistics.map((item, index) => (
            <motion.div
              key={item.label}
              className="stat-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
              }}
            >
              <h3>{item.value}</h3>

              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Statistics;
