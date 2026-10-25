const SITE_URL = "https://www.stitchhospitality.com";
const ORGANIZATION_ID = `${SITE_URL}/#organization`;

// Sitewide — imported once in layout.tsx so it emits on every page, and
// referenced by @id from other schemas (Product.publisher, Person.worksFor)
// instead of duplicating the full object.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: "Stitch Hospitality",
  url: SITE_URL,
  logo: `${SITE_URL}/opengraph-image`,
  description:
    "Stitch Hospitality provides interim, fractional, and project leadership for hotels across general management, operations, sales, marketing, commercial strategy, and catering.",
  sameAs: ["https://www.linkedin.com/company/stitchhospitality-com"],
  founder: {
    "@type": "Person",
    name: "Chris Suarez",
    jobTitle: "General Manager",
  },
};

export const organizationRef = { "@id": ORGANIZATION_ID };
