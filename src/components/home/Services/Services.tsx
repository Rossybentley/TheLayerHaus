import "./Services.css";

import { services } from "../../../data/services";
import Section from "../../layout/Section/Section";
import Container from "../../layout/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import ServiceCard from "../../ui/ServiceCard/ServiceCard";

const Services = () => {
  return (
    <Section id="services" className="services">
      <Container>
        <SectionHeading
          eyebrow="Our Expertise"
          title="Luxury Interior Decoration Services"
          description="From bespoke curtains to premium wallpapers and elegant blinds, we create interiors that balance comfort, beauty, and timeless design."
        />

        <div className="services__grid">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Services;
