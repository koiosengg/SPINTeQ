import React, { useEffect } from "react";
import {
  organizationSchema,
  webSiteSchema,
  serviceSchema,
  contactPageSchema,
  aboutPageSchema,
  getBreadcrumbSchema,
  faqPageSchema,
} from "./schemas";

/**
 * Renders a single JSON-LD <script> tag.
 */
export const JsonLdScript = ({ data }) => {
  const json = JSON.stringify(data);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = json;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [json]);

  return null;
};

/* ── Page-specific structured data bundles ── */

export const HomePageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={webSiteSchema} />
    <JsonLdScript data={getBreadcrumbSchema("Home", "/")} />
  </>
);

export const AboutPageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={aboutPageSchema} />
    <JsonLdScript data={getBreadcrumbSchema("About Us", "/about")} />
  </>
);

export const SolutionsPageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={serviceSchema} />
    <JsonLdScript data={faqPageSchema} />
    <JsonLdScript data={getBreadcrumbSchema("Solutions", "/solutions")} />
  </>
);

export const ContactPageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={contactPageSchema} />
    <JsonLdScript data={getBreadcrumbSchema("Contact", "/contact")} />
  </>
);

export const ApproachPageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={getBreadcrumbSchema("Approach", "/approach")} />
  </>
);

export const IndustriesPageStructuredData = () => (
  <>
    <JsonLdScript data={organizationSchema} />
    <JsonLdScript data={getBreadcrumbSchema("Industries", "/industries")} />
  </>
);
