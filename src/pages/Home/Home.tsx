import Layout from "../../components/layout/Layout/Layout";

import Hero from "../../components/home/Hero/Hero";
import Services from "../../components/home/Services/Services";
import FeaturedProjects from "../../components/home/FeaturedProjects/FeaturedProjects";
import About from "../../components/home/About/About";
import Process from "../../components/home/Process/Process";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import InstagramGallery from "../../components/home/InstagramGallery/InstagramGallery";
import ConsultationCTA from "../../components/home/ConsultationCTA/ConsultationCTA";
import WhyChooseUs from "../../components/home/WhyChoose/WhyChoose";
import SEO from "../../components/common/SEO/SEO";
const Home = () => {
  return (
    <Layout>
      <SEO
        title="Luxury Curtains & Interior Decor in Lagos"
        description="The Layer Haus creates bespoke curtains, premium blinds, wallpapers and elegant interior styling solutions for residential and commercial spaces in Lagos."
        path="/"
      />
      <Hero />

      <Services />

      <FeaturedProjects />

      <About />

      <Process />

      <WhyChooseUs />

      <Testimonials />

      <InstagramGallery />

      <ConsultationCTA />
    </Layout>
  );
};

export default Home;
