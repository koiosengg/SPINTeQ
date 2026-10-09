import React from "react";
import { Helmet } from "react-helmet-async";
import SEO from "./SEO";

const sections = [
  {
    title: "Introduction",
    body: [
      "SPINTeQ (“we”, “us”, “our”) helps organizations move from manual operations to intelligent, autonomous systems using AI, IoT, and intelligent automation. This Privacy Policy explains how we collect, use, and protect personal information when you visit our website at www.spinteq.in and interact with us.",
      "This policy applies to personal information you provide to us or that we collect when you use the website. We are committed to protecting your privacy and handling your information responsibly.",
    ],
  },
  {
    title: "Information We Collect",
    blocks: [
      {
        heading: "Information you provide to us",
        body: "When you use the contact form on our website, we collect the information you choose to submit, which may include your name, email address, and your message. We may also receive contact details when you reach out to us by email or WhatsApp.",
      },
      {
        heading: "Information collected automatically",
        body: "When you visit the website, our hosting provider may record standard technical information as part of normal server operations, such as your IP address, browser type, device information, and pages visited. Your browser automatically stores a small amount of information on your device to remember your color theme preference; this stays on your device and is not sent to our servers unless as part of normal site operation.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    body: "We use the information we collect for the following purposes:",
    list: [
      "To respond to your enquiries and communicate with you about the information you request",
      "To provide, maintain, and improve our website and services",
      "To understand how visitors use the website so we can improve its performance and content",
      "To protect the security and integrity of the website",
      "To comply with legal obligations and to enforce our agreements",
    ],
    note: "We do not use the information submitted through our website for automated marketing, and we do not sell your personal information.",
  },
  {
    title: "Cookies and Local Storage",
    body: [
      "We do not use advertising cookies. When you use the theme toggle on our website, a preference is stored locally on your device (in your browser’s local storage) so that your chosen appearance is remembered on future visits. This information stays on your device.",
      "Your browser may also store cookies required for the basic functioning of the website. You can control or delete these through your browser settings.",
    ],
  },
  {
    title: "How We Share Information",
    body: "We do not sell your personal information. We share personal information only with service providers that help us operate the website, and with authorities where required:",
    list: [
      "Contact form submission service providers (to deliver the messages you submit to us)",
      "Our hosting and infrastructure providers (to operate the website securely)",
      "Legal or regulatory authorities, where required by law",
    ],
  },
  {
    title: "Third-Party Services",
    blocks: [
      {
        heading: "Contact form processing",
        body: "Messages submitted through our contact form are processed by a third-party form service (Formspree). The information you enter in the form is transmitted to this provider so the message can be delivered to us. The provider processes this information in accordance with its own privacy policy.",
      },
      {
        heading: "Website hosting",
        body: "The website is hosted by Vercel. Our hosting provider operates securely and may process standard technical information (such as IP addresses) as part of serving the website to you.",
      },
      {
        heading: "Fonts",
        body: "Our website uses Google Fonts for typography. When the page loads, your browser requests font files from Google’s servers, which may involve transferring your IP address to Google. Google processes this information in accordance with its own privacy policy.",
      },
      {
        heading: "Social media and messaging",
        body: "Our website links to our social media profiles. When you follow these links, the relevant third-party platforms handle your information according to their own privacy policies and terms.",
      },
    ],
  },
  {
    title: "Data Retention",
    body: [
      "We retain personal information only for as long as reasonably necessary to fulfill the purposes described in this Privacy Policy, respond to your enquiries, comply with legal obligations, resolve disputes, and enforce our agreements.",
      "Messages submitted through our contact form are retained for as long as needed to respond to and manage your enquiry.",
    ],
  },
  {
    title: "Data Security",
    body: [
      "We take reasonable technical and organizational measures designed to protect personal information against unauthorized access, disclosure, alteration, or destruction. This includes serving the website over HTTPS and relying on secure infrastructure from our service providers.",
      "No method of transmission or storage over the internet is completely secure. While we work to protect your personal information, we cannot guarantee its absolute security.",
    ],
  },
  {
    title: "Children's Privacy",
    body: "Our website offers business and enterprise consulting services and is not directed to children. We do not knowingly collect personal information from children. If you believe that a child has provided personal information to us, please contact us and we will take steps to remove that information.",
  },
  {
    title: "Your Privacy Rights",
    blocks: [
      {
        heading: "",
        body: "Depending on your location and applicable law, you may have rights regarding your personal information, including the right to:",
      },
    ],
    list: [
      "Access the personal information we hold about you",
      "Correct any inaccurate or incomplete information",
      "Request deletion of your personal information",
      "Withdraw consent or object to certain processing",
      "Lodge a complaint with a relevant supervisory authority",
    ],
    note: "To exercise any of these rights, contact us using the details below. We will respond to verified requests in accordance with applicable law.",
  },
  {
    title: "International Data Transfers",
    body: "Some of our service providers, such as our hosting and form-processing providers, may process information in countries other than your own. Where required by applicable law, we take appropriate steps in relation to such transfers to help ensure your information is protected.",
  },
  {
    title: "Links to Third-Party Websites",
    body: "Our website may contain links to external websites, including our social media profiles, map services, and other third-party sites. These websites have their own privacy policies, and we are not responsible for their practices. We encourage you to review the privacy policy of any website you visit.",
  },
  {
    title: "Changes to This Privacy Policy",
    body: "We may update this Privacy Policy from time to time. When we do, we will revise the effective date at the top of this page. Your continued use of the website after any changes constitutes your acceptance of the updated policy.",
  },
  {
    title: "Contact Us",
    body: "If you have questions about this Privacy Policy or how we handle your personal information, contact us at:",
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
    !section.contact && section.title ? (
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
        section.blocks.map((block, i) =>
          block.heading ? (
            <div className="legal-block" key={i}>
              <h3 className="legal-block-title">{block.heading}</h3>
              <p className="legal-section-text">{block.body}</p>
            </div>
          ) : (
            <p className="legal-section-text" key={i}>
              {block.body}
            </p>
          )
        )}
      {section.list && (
        <ul className="legal-section-list">
          {section.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
      {section.note && <p className="legal-section-note">{section.note}</p>}
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

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy — SPINTeQ"
        description="How SPINTeQ collects, uses, and protects your personal information when you use our website."
      />
      <Helmet>
        <title>Privacy Policy</title>
        <meta
          name="description"
          content="How SPINTeQ collects, uses, and protects your personal information when you use our website."
        />
        <meta property="og:title" content="Privacy Policy — SPINTeQ" />
        <meta
          property="og:description"
          content="How SPINTeQ collects, uses, and protects your personal information when you use our website."
        />
        <meta property="og:url" content="https://www.spinteq.in/privacy" />
        <link rel="canonical" href="https://www.spinteq.in/privacy" />
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
              <span>Privacy Policy</span>
            </div>
            <div className="solutions-banner-text-group">
              <h1 className="legal-banner-heading">Privacy Policy</h1>
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

export default PrivacyPolicy;