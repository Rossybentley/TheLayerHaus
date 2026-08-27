import Layout from "../../components/layout/Layout/Layout";
import AboutHero from "../../components/about/AboutHero/AboutHero";
import Philosophy from "../../components/about/Philosophy/Philosophy";
import Story from "../../components/about/Story/Story";
import Founder from "../../components/about/Founder/Founder";
import Statistics from "../../components/about/Statistics/Statistics";
import CTA from "../../components/about/CTA/CTA";
import PageTransition from "../../components/ui/PageTransition/PageTransition";
import SEO from "../../components/common/SEO/SEO";
const About = () => {
  return (
    <Layout>
      <SEO
        title="About Us"
        description="Discover The Layer Haus, a Lagos-based interior decoration brand specializing in bespoke curtains, premium blinds, wallpapers amd refined interior styling."
        path="/about"
      />
      <PageTransition>
        <AboutHero />

        <Philosophy />

        <Story />

        <Founder />

        <Statistics />

        <CTA />
      </PageTransition>
    </Layout>
  );
};

export default About;
