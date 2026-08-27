import Layout from "../../components/layout/Layout/Layout";
import ServicesHero from "../../components/Services/ServicesHero/ServicesHero";
import ServiceShowcase from "../../components/Services/ServiceShowcase/ServiceShowcase";
import WhyChoose from "../../components/Services/WhyChoose/WhyChoose";
import FAQ from "../../components/Services/FAQ/FAQ";
import ConsultationCTA from "../../components/Services/ConsultationCTA/ConsultationCTA";
import SEO from "../../components/common/SEO/SEO";
const Services = () => {
  return (
    <Layout>
      <SEO
        title="Interior Decoration Services"
        description="Explore The Layer Haus interior decoration services including luxury curtains, premium blinds, wallpapers and interior styling for homes and commercial spaces in Lagos."
        path="/services"
      />
      <ServicesHero />

      <ServiceShowcase />

      <WhyChoose />

      <FAQ />

      <ConsultationCTA />
    </Layout>
  );
};

export default Services;
