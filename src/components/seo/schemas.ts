const SITE_URL = "https://www.stitchhospitality.com";
const ORGANIZATION_ID = `${SITE_URL}/#organization`;

export const AREA_SERVED = ["California", "Arizona", "Nevada"].map((name) => ({
  "@type": "State",
  name,
}));

// Sitewide — imported once in layout.tsx so it emits on every page, and
// referenced by @id from other schemas (Product.publisher, Person.worksFor)
// instead of duplicating the full object.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Stitch Hospitality",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  email: "chris@stitchhospitality.com",
  description:
    "Stitch Hospitality provides interim, fractional, and project leadership for hotels across general management, operations, sales, marketing, commercial strategy, and catering.",
  sameAs: ["https://www.linkedin.com/company/stitchhospitality-com"],
  areaServed: AREA_SERVED,
  knowsAbout: [
    "Interim hotel general management",
    "Fractional hotel leadership",
    "Hotel sales and marketing leadership",
    "Hotel commercial strategy and revenue management",
    "Catering and events leadership",
    "Hotel owner and asset manager reporting",
    "USALI 12th Revised Edition ownership reporting",
    "Hotel pre-opening",
  ],
};

export const organizationRef = { "@id": ORGANIZATION_ID };

// Homepage engagement models — mirrors the visible "One need. The right way to engage." section.
export function leadershipServicesSchema(
  engagements: { name: string; description: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@graph": engagements.map((e) => ({
      "@type": "Service",
      name: e.name,
      serviceType: "Hotel leadership",
      description: e.description,
      provider: organizationRef,
      areaServed: AREA_SERVED,
      audience: {
        "@type": "Audience",
        audienceType: "Hotel owners, asset managers, and management companies",
      },
    })),
  };
}

// FAQPage must only describe Q&A that is visible on the same page.
export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
