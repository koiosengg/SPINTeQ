import React from "react";
import { Helmet } from "react-helmet-async";
import SEO from "./SEO";

const sections = [
  {
    title: "Acceptance of These Terms",
    body: [
      "These Terms of Service (“Terms”) govern your access to and use of the website at www.spinteq.in (the “Website”), which is operated by SPINTeQ. By accessing or using the Website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please do not use the Website.",
    ],
  },
  {
    title: "About SPINTeQ and Our Services",
    body: [
      "SPINTeQ helps organizations move from manual operations to intelligent, autonomous systems using AI, IoT, and intelligent automation. The Website presents our services, capabilities, approach, industries, and contact information for informational purposes.",
      "Materials on the Website describing our services are provided for general information only and do not constitute an offer, contract, or professional advice. Any engagement for services is governed by a separate written agreement between the parties.",
    ],
  },
  {
    title: "Use of the Website",
    body: "You agree to use the Website only for lawful purposes and in a way that does not interfere with or disrupt the operation of the Website. You must not, without limitation:",
    list: [
      "Misuse the Website, including attempting to gain unauthorized access to any part of it or its systems",
      "Upload or transmit any malicious software, viruses, or harmful code",
      "Attempt to probe, scan, or test the vulnerability of the Website or bypass its security measures",
      "Use the Website to engage in misleading, fraudulent, or unlawful activity",
      "Scrape, harvest, or otherwise collect information about other users",
    ],
  },
  {
    title: "Enquiries and Communications",
    blocks: [
      {
        heading: "",
        body: "You may choose to contact us through our Website, by email, or by WhatsApp. Details you provide are used to respond to your enquiry. Your use of our contact forms does not create a contractual relationship between you and SPINTeQ.",
      },
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "All content on the Website, including text, graphics, logos, images, illustrations, and design, is the property of SPINTeQ or its licensors and is protected by applicable intellectual property laws. You may view and download content for your personal, non-commercial use only.",
      "You may not reproduce, distribute, modify, create derivative works from, publicly display, or otherwise use the content of the Website for commercial purposes without our prior written permission.",
    ],
  },
  {
    title: "Third-Party Services and Links",
    body: "The Website may contain links to third-party websites and services (such as our contact form processor, hosting provider, social media profiles, and font service). We do not control these third-party services and are not responsible for their content, availability, or practices. Your use of third-party services is subject to their own terms and policies.",
  },
  {
    title: "Confidentiality",
    body: "If you share information with us through an enquiry, that information is handled in accordance with our Privacy Policy. Sharing information with us does not create a confidentiality obligation on our part unless we have entered into a separate confidentiality agreement with you.",
  },
  {
    title: "No Warranty and Limitation of Liability",
    body: [
      "The Website and its content are provided “as is” and “as available”, without warranties of any kind, whether express or implied, including implied warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Website will be uninterrupted, error-free, or free of harmful components.",
      "To the maximum extent permitted by applicable law, SPINTeQ shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising out of or in connection with your use of the Website.",
      "Information on the Website is provided for general guidance and does not guarantee specific business outcomes. Decisions made based on Website content are your own responsibility.",
    ],
  },
  {
    title: "Governing Law",
    body: "These Terms are governed by the laws of India, without regard to conflict-of-law principles. If you access the Website from a jurisdiction other than India, you are responsible for complying with the laws of that jurisdiction. Any disputes arising out of these Terms that are not resolved informally will be subject to the exclusive jurisdiction of the competent courts in India.",
  },
  {
    title: "Changes to These Terms",
    body: "We may update these Terms from time to time. When we do, we will revise the effective date at the top of this page. Your continued use of the Website after any changes constitutes your acceptance of the updated Terms.",
  },
  {
    title: "Contact Us",
    body: "If you have questions about these Terms, contact us at:",
    contact: true,
  },
];

const Section = ({ section }) => {
  const body = Array.isArray(section.body)
    ? section.body
    : section.body
      ? [section.body]
      : [];

  const heading =
    !section.contact ? (
      <h2 className="legal-section-title">
        <span className="legal-section-title-accent">{section.index + 1}.</span>{" "}
        {section.title}
      </h2>
    ) : (
      <h2 className="legal-section-title">{section.title}</h2>
    );

  return (
    <article className="legal-section">
      {heading}
      {body.map((text, i) => (
        <p key={i} className="legal-section-text">
          {text}
        </p>
      ))}
      {section.blocks &&
        section.blocks.map((block, i) => (
          <p className="legal-section-text" key={i}>
            {block.body}
          </p>
        ))}
      {section.list && (
        <ul className="legal-section-list">
          {section.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      {section.contact && (
        <div className="legal-contact-card">
          <p className="legal-section-text">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@spinteq.io">info@spinteq.io</a>
          </p>
          <p className="legal-section-text">
            <strong>WhatsApp:</strong>{" "}
            <a
              href="https://wa.me/919611607488"
              target="_blank"
              rel="noopener noreferrer"
            >
              +91 9611607488
            </a>
          </p>
        </div>
      )}
    </article>
  );
};

const Terms = () => {
  return (
    <>
      <SEO
        title="Terms of Service — SPINTeQ"
        description="The terms and conditions governing your use of the SPINTeQ website and services."
      />
      <Helmet>
        <title>Terms of Service</title>
        <meta
          name="description"
          content="The terms and conditions governing your use of the SPINTeQ website and services."
        />
        <meta property="og:title" content="Terms of Service — SPINTeQ" />
        <meta
          property="og:description"
          content="The terms and conditions governing your use of the SPINTeQ website and services."
        />
        <meta property="og:url" content="https://www.spinteq.in/terms" />
        <link rel="canonical" href="https://www.spinteq.in/terms" />
      </Helmet>

      <section className="legal-banner">
        <div className="solutions-banner-rects">
          <div className="sbr sbr-1" />
          <div className="sbr sbr-2" />
          <div className="sbr sbr-3" />
          <div className="sbr sbr-4" />
          <div className="sbr sbr-5" />
        </div>
        <div className="legal-banner-container">
          <div className="solutions-banner-content">
            <div className="solutions-banner-badge">
              <span>Terms of Service</span>
            </div>
            <div className="solutions-banner-text-group">
              <h1 className="legal-banner-heading">Terms of Service</h1>
              <p className="legal-banner-meta">Last updated: October 9, 2026</p>
            </div>
          </div>
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-container">
          {sections.map((section, i) => (
            <Section key={i} section={{ ...section, index: i }} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Terms;