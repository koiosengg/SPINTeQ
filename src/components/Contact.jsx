import React from "react";
import { Helmet } from "react-helmet-async";
import SEO from "./SEO";
import ContactBanner from "./Contact/Banner";
import ContactDetails from "./Contact/Details";
import { ContactPageStructuredData } from "../structured-data/index.jsx";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contact SPINTeQ — Let's Build the Future Together"
        description="Get in touch with SPINTeQ's experts to explore AI solutions, resolve challenges, and accelerate your transformation journey."
      />
      <Helmet>
        <title>Contact</title>
        <meta
          name="description"
          content="Get in touch with SPINTeQ's experts to explore AI solutions, resolve challenges, and accelerate your transformation journey."
        />
        <meta property="og:title" content="Contact SPINTeQ — Let's Build the Future Together" />
        <meta property="og:description" content="Get in touch with SPINTeQ's experts to explore AI solutions, resolve challenges, and accelerate your transformation journey." />
        <meta property="og:url" content="https://www.spinteq.in/contact" />
        <link rel="canonical" href="https://www.spinteq.in/contact" />
      </Helmet>
      <ContactPageStructuredData />
      <ContactBanner />
      <ContactDetails />
    </>
  );
};

export default Contact;
