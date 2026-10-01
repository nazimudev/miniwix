import React from "react";
import ContactHero from "./ContactHero";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

/**
 * Server component. Only ContactForm is a client component.
 * Layout follows the reference: info on the left, form card on the right.
 */
const ContactPage = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fd] dark:bg-[#080f20]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-32 h-80 w-80 rounded-full bg-[#FF4D4D]/10 blur-3xl dark:bg-[#FF4D4D]/[0.07]"
      />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:gap-16 lg:px-8 lg:py-28">
        <div className="space-y-10">
          <ContactHero />
          <ContactInfo />
        </div>
        <div className="lg:pt-2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
