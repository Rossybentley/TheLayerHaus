import Layout from "../../components/layout/Layout/Layout";
import ContactHero from "../../components/Contact/ContactHero/ContactHero";
import ContactDetails from "../../components/Contact/ContactDetails/ContactDetails";
import ContactForm from "../../components/Contact/ContactForm/ContactForm";
import WhatsAppCTA from "../../components/Contact/WhatsAppCTA/WhatsAppCTA";
import Location from "../../components/Contact/Location/Location";
import SEO from "../../components/common/SEO/SEO";
const Contact = () => {
  return (
    <Layout>
      <SEO
        title="Contact & Book a Consultation"
        description="Contact The Layer Haus in Lagos for bespoke curtains, premium blinds, wallpapers and interior styling. Book a consultation for your next interior project."
        path="/contact"
      />
      <ContactHero />

      <ContactDetails />

      <ContactForm />

      <WhatsAppCTA />

      <Location />
    </Layout>
  );
};

export default Contact;
