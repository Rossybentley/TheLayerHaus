import "./ProjectTestimonials.css";

import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

import Section from "../../layout/Section/Section";
import Container from "../../layout/Container/Container";

import { projectTestimonials } from "../../../data/projectTestimonials";

const ProjectTestimonials = () => {
  return (
    <Section className="project-testimonials">
      <Container>
        <div className="section-header">
          <p>CLIENT STORIES</p>

          <h2>What Our Clients Say</h2>

          <p>
            Every completed project is built on trust, collaboration and
            attention to detail.
          </p>
        </div>

        <div className="project-testimonials__grid">
          {projectTestimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="testimonial-stars">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FiStar key={i} fill="currentColor" />
                ))}
              </div>

              <p className="testimonial-review">"{testimonial.review}"</p>

              <div className="testimonial-footer">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <h4>{testimonial.name}</h4>

                  <span>
                    {testimonial.project} • {testimonial.location}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ProjectTestimonials;
