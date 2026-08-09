// ============================================
// JSON-LD SCHEMA DEFINITIONS — SPINTeQ
// ============================================

const BASE_URL = "https://www.spinteq.in";
const COMPANY_NAME = "SPINTeQ";
const LOGO_URL = `${BASE_URL}/Logo.webp`;

// ============================================
// 1. ORGANIZATION SCHEMA
// ============================================
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY_NAME,
  alternateName: "SPINTeQ Technologies",
  url: BASE_URL,
  logo: LOGO_URL,
  description:
    "SPINTeQ helps organizations move from manual operations to intelligent, autonomous systems using AI, IoT, and intelligent automation.",
  foundingDate: "2008",
  email: "info@spinteq.in",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "9876543210",
    contactType: "Customer Service",
    email: "info@spinteq.in",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.facebook.com/spinteq",
    "https://www.instagram.com/spinteq",
    "https://twitter.com/spinteq",
    "https://www.linkedin.com/company/spinteq",
  ],
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "Global" },
  ],
};

// ============================================
// 2. WEBSITE SCHEMA
// ============================================
export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: COMPANY_NAME,
  url: BASE_URL,
  publisher: {
    "@type": "Organization",
    name: COMPANY_NAME,
    logo: {
      "@type": "ImageObject",
      url: LOGO_URL,
    },
  },
};

// ============================================
// 3. SERVICE SCHEMA
// ============================================
export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Autonomous Enterprise Solutions",
  provider: {
    "@type": "Organization",
    name: COMPANY_NAME,
  },
  description:
    "End-to-end AI-powered solutions for process design, autonomous decision-making, and operational excellence across industries.",
  url: `${BASE_URL}/solutions`,
  areaServed: {
    "@type": "Place",
    name: "Global",
  },
  serviceType: "AI & Intelligent Automation",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "SPINTeQ Solutions Catalog",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Process Architecture",
          description: "Map and structure business processes for autonomous operations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI & Automation",
          description: "Autonomous agents that act on insights, triggering workflows and decisions in real time.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Intelligence",
          description: "Connect data sources and let the system map, clean, and structure everything automatically.",
        },
      },
    ],
  },
};

// ============================================
// 4. CONTACT PAGE SCHEMA
// ============================================
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Contact ${COMPANY_NAME}`,
  description:
    "Connect with SPINTeQ's experts to explore AI solutions, resolve challenges, and accelerate your transformation journey.",
  url: `${BASE_URL}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: COMPANY_NAME,
    telephone: "9876543210",
    email: "info@spinteq.in",
  },
};

// ============================================
// 5. ABOUT PAGE SCHEMA
// ============================================
export const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: `About ${COMPANY_NAME}`,
  description:
    "Founded in 2008, SPINTeQ has 15+ years of experience helping 10+ industries achieve digital transformation and autonomous operations.",
  url: `${BASE_URL}/about`,
  mainEntity: {
    "@type": "Organization",
    name: COMPANY_NAME,
    foundingDate: "2008",
    description:
      "SPINTeQ has been helping organizations transform operations through digital innovation, workflow automation, and intelligent enterprise solutions.",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "50+",
    },
    knowsAbout: [
      "Autonomous Enterprise",
      "AI & Machine Learning",
      "Intelligent Automation",
      "IoT",
      "Computer Vision",
      "Digital Transformation",
      "Operational Intelligence",
    ],
  },
};

// ============================================
// 6. BREADCRUMB SCHEMA HELPER
// ============================================
export const getBreadcrumbSchema = (pageName, pageUrl) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: pageName,
      item: `${BASE_URL}${pageUrl}`,
    },
  ],
});

// ============================================
// 7. FAQ PAGE SCHEMA (for Solutions page)
// ============================================
export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does SPINTeQ do?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SPINTeQ helps organizations move from manual operations to intelligent, autonomous operations using AI, IoT, intelligent automation, and data-driven decision systems.",
      },
    },
    {
      "@type": "Question",
      name: "Which industries does SPINTeQ serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SPINTeQ serves Automotive, Manufacturing, Logistics, Industrial Services, Smart Infrastructure, Healthcare, Retail, and Enterprise Services industries.",
      },
    },
    {
      "@type": "Question",
      name: "How does SPINTeQ's autonomous enterprise approach work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SPINTeQ's approach follows four stages: Process (map business structure), Data (connect and structure data), Action (autonomous agents act on insights), and Feedback (the system continuously learns and improves).",
      },
    },
  ],
};

export default {
  organization: organizationSchema,
  webSite: webSiteSchema,
  service: serviceSchema,
  contactPage: contactPageSchema,
  aboutPage: aboutPageSchema,
  getBreadcrumb: getBreadcrumbSchema,
  faqPage: faqPageSchema,
};
