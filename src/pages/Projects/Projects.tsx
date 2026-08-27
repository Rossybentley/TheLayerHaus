import Layout from "../../components/layout/Layout/Layout";

import ProjectsHero from "../../components/projects/ProjectsHero/ProjectsHero";
import Portfolio from "../../components/projects/Portfolio/Portfolio";
import CaseStudy from "../../components/projects/CaseStudy/CaseStudy";
import BeforeAfter from "../../components/projects/BeforeAfter/BeforeAfter";
import ProjectTestimonials from "../../components/projects/ProjectTestimonials/ProjectTestimonials";
import SEO from "../../components/common/SEO/SEO";
const Projects = () => {
  return (
    <Layout>
      <SEO
        title="Our Interior Projects"
        description="Explore completed interior decoration projects by The Layer Haus, featuring bespoke curtains, elegant window treatments and refined interior styling."
        path="/projects"
      />
      <ProjectsHero />

      <Portfolio />

      <CaseStudy />

      <BeforeAfter />

      <ProjectTestimonials />
    </Layout>
  );
};

export default Projects;
