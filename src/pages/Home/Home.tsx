import "./Home.css";

import Navbar from "../../components/layout/Navbar/Navbar";
import Hero from "../../components/home/Hero/Hero";
import Services from "../../components/home/Services/Services";
import FeaturedProjects from "../../components/home/FeaturedProjects/FeaturedProjects";
import About from "../../components/home/About/About";
import Process from "../../components/home/Process/Process";
import Testimonials from "../../components/home/Testimonials/Testimonials";
import InstagramGallery from "../../components/home/InstagramGallery/InstagramGallery";
import ConsultationCTA from "../../components/home/ConsultationCTA/ConsultationCTA";
import Footer from "../../components/layout/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Services />

        <FeaturedProjects />

        <About />

        <Process />

        <Testimonials />

        <InstagramGallery />

        <ConsultationCTA />
      </main>

      <Footer />
    </>
  );
};

export default Home;
