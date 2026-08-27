import "./Testimonials.css";
import "swiper/css/pagination";
import "swiper/css";

import Container from "../../layout/Container/Container";
import Section from "../../layout/Section/Section";
import { Autoplay, Pagination } from "swiper/modules";
import { testimonials } from "../../../data/testimonials";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";

const Testimonials = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <Section id="testimonials" className="testimonials">
      <Container>
        <div className="testimonials-pattern" />

        <div className="testimonials-glow" />

        <div className="section-header">
          <p>CLIENT STORIES</p>

          <h2>What Our Clients Say</h2>

          <p>
            Discover why homeowners trust The Layer Haus to transform their
            spaces with elegance and attention to detail.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          spaceBetween={40}
          slidesPerView={1}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          loop
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <motion.div
                className="testimonial-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="testimonial-card__quote">❝</div>

                <div className="testimonial-card__stars">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        opacity: 0,
                        scale: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.12,
                        duration: 0.35,
                      }}
                    >
                      ★
                    </motion.span>
                  ))}
                </div>

                <p className="testimonial-card__text">"{testimonial.quote}"</p>

                <div className="testimonial-card__author">
                  <h3>{testimonial.name}</h3>

                  <span>{testimonial.location}</span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="testimonial-navigation">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="testimonial-nav-btn"
            aria-label="Previous testimonial"
          >
            <FiArrowLeft />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="testimonial-nav-btn"
            aria-label="Next testimonial"
          >
            <FiArrowRight />
          </button>
        </div>
      </Container>
    </Section>
  );
};

export default Testimonials;
