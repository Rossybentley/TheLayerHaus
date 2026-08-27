import "./ContactForm.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { FiArrowUpRight, FiCheck, FiAlertCircle } from "react-icons/fi";
import { motion } from "framer-motion";
import Section from "../../layout/Section/Section";
import Container from "../../layout/Container/Container";
interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};
const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (
    event: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = event.target;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSuccessMessage("");
    setErrorMessage("");
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;

      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS environment variables are missing.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        {
          publicKey,
        },
      );

      setSuccessMessage(
        "Thank you. Your enquiry has been sent successfully. We'll be in touch soon.",
      );

      setFormData(initialFormData);
    } catch (error) {
      console.error("EmailJS error:", error);

      setErrorMessage(
        "Something went wrong while sending your enquiry. Please try again or contact us directly on WhatsApp.",
      );
    } finally {
      setIsSending(false);
    }
  };
  return (
    <Section className="contact-form-section">
      {" "}
      <Container>
        {" "}
        <div className="contact-form-layout">
          {/* INTRO */}

          <motion.div
            className="contact-form-intro"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span>START A PROJECT</span>

            <h2>
              Tell us about
              <br />
              your space.
            </h2>

            <p>
              Every beautiful interior starts with a conversation. Tell us what
              you have in mind and let's explore how we can bring it to life.
            </p>
          </motion.div>

          {/* FORM */}

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="contact-form__row">
              <div className="form-field">
                <label htmlFor="name">Your Name</label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="email">Email Address</label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-form__row">
              <div className="form-field">
                <label htmlFor="phone">Phone Number</label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+234..."
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label htmlFor="service">Service</label>

                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>

                  <option value="Luxury Curtains">Luxury Curtains</option>

                  <option value="Premium Wallpapers">Premium Wallpapers</option>

                  <option value="Luxury Blinds">Luxury Blinds</option>

                  <option value="Interior Styling">Interior Styling</option>

                  <option value="Commercial Interiors">
                    Commercial Interiors
                  </option>

                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">Tell us about your project</label>

              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Tell us about your space, what you'd like to transform, your preferred style, or anything else that would help us understand your project."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            {/* SUCCESS */}

            {successMessage && (
              <div className="form-message form-message--success">
                <FiCheck />

                <span>{successMessage}</span>
              </div>
            )}

            {/* ERROR */}

            {errorMessage && (
              <div className="form-message form-message--error">
                <FiAlertCircle />

                <span>{errorMessage}</span>
              </div>
            )}

            {/* SUBMIT */}

            <button
              type="submit"
              className="contact-form__submit"
              disabled={isSending}
            >
              {isSending ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Enquiry</span>

                  <FiArrowUpRight />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </Container>
    </Section>
  );
};
export default ContactForm;
