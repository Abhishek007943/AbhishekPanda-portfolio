import { Helmet } from "react-helmet-async";

const SITE_URL = "https://pandaabhishek.vercel.app";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abhishek Panda",
    givenName: "Abhishek",
    familyName: "Panda",
    alternateName: "Abhishek Panda",
    description:
      "MBA Finance professional specializing in financial analysis and business strategy.",
    image: `${SITE_URL}/assets/portarit.jpeg`,
    url: SITE_URL,
    sameAs: [
      "https://github.com/Abhishek007943",
      "https://linkedin.com/in/abhishek-panda01"
    ],
    jobTitle: "MBA Finance Professional",
    knowsAbout: [
      "Corporate Finance",
      "Investment Management",
      "Financial Modeling",
      "Business Strategy",
      "Portfolio Management",
      "Data Analysis",
      "Risk Assessment",
      "Mergers and Acquisitions",
      "Valuation",
      "Equity Research",
      "Fixed Income Analysis",
      "Derivatives",
    ],
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Centurion University of Technology and Management",
        sameAs: "https://www.cutm.ac.in/",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Jupiter Degree College",
      },
    ],
    worksFor: {
      "@type": "Organization",
      name: "Autoliv Limited",
      sameAs: "https://www.autoliv.com/",
    },
    email: "abhishek.panda119955@gmail.com",
    nationality: {
      "@type": "Country",
      name: "India",
    },
  };

  return <JsonLd data={schema} />;
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Abhishek Panda",
    url: SITE_URL,
    description:
      "Executive MBA Finance candidate. Business strategy, investment research, and data-driven decision making.",
    about: {
      "@type": "Person",
      name: "Abhishek Panda",
    },
    author: {
      "@type": "Person",
      name: "Abhishek Panda",
    },
    copyrightHolder: {
      "@type": "Person",
      name: "Abhishek Panda",
    },
    copyrightYear: new Date().getFullYear(),
    inLanguage: "en-US",
    image: `${SITE_URL}/assets/portarit.jpeg`,
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${SITE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    ],
  };

  return <JsonLd data={schema} />;
}

export function WebPageSchema({
  name,
  description,
  url,
  breadcrumb,
  datePublished,
  dateModified,
}: {
  name: string;
  description: string;
  url: string;
  breadcrumb?: { name: string; url: string }[];
  datePublished?: string;
  dateModified?: string;
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: "Abhishek Panda",
      url: SITE_URL,
    },
    about: {
      "@type": "Person",
      name: "Abhishek Panda",
    },
    image: `${SITE_URL}/assets/portarit.jpeg`,
  };

  if (datePublished) schema.datePublished = datePublished;
  if (dateModified) schema.dateModified = dateModified;

  if (breadcrumb) {
    schema.breadcrumb = {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumb.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: item.url,
      })),
    };
  }

  return <JsonLd data={schema} />;
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={schema} />;
}
