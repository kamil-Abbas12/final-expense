// Structured data (JSON-LD) injected into <head> for Google rich results.
// Renders: Insurance product schema, FAQ schema, LocalBusiness schema, BreadcrumbList.
// These unlock star ratings, FAQ dropdowns, and knowledge panel entries in SERPs.

const BASE_URL = "https://www.finalexpense.topdoglead.com";

export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "InsuranceAgency",
    name: "TopDog Final Expense Insurance",
    url: BASE_URL,
    logo: `${BASE_URL}/finalexpense.png`,
    description:
      "Top Dog Final Expense Insurance provides affordable burial and funeral insurance for seniors ages 50–85 with no medical exam required.",
    telephone: "+18669635898",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    sameAs: [
      // Add your social profile URLs here:
      // "https://www.facebook.com/topdogfinalexpense",
      // "https://twitter.com/topdoginsurance",
      // "https://www.linkedin.com/company/topdoginsurance",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+18669635898",
      contactType: "customer service",
      availLanguage: "English",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
    },
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Final Expense Life Insurance",
    description:
      "Affordable final expense whole life insurance for seniors. No medical exam, fixed premiums, guaranteed acceptance for ages 50–85.",
    brand: {
      "@type": "Brand",
      name: "TopDog Final Expense",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "20",
      highPrice: "150",
      offerCount: "5",
      availability: "https://schema.org/InStock",
      url: BASE_URL,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "312",
      bestRating: "5",
      worstRating: "1",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is final expense insurance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Final expense insurance is a type of whole life insurance designed to cover funeral, burial, and other end-of-life costs. Policies typically range from $5,000 to $25,000.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a medical exam to get final expense insurance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No medical exam is required. You only need to answer a few simple health questions to qualify, even with pre-existing conditions.",
        },
      },
      {
        "@type": "Question",
        name: "How much does final expense insurance cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Final expense insurance typically starts at around $20 per month, depending on your age, health, and coverage amount. Premiums are fixed for life and never increase.",
        },
      },
      {
        "@type": "Question",
        name: "Who is eligible for final expense insurance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most plans are available to applicants between ages 50 and 85. Coverage is guaranteed for qualified applicants with no medical exam required.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly are death benefits paid?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most claims are processed and paid within 24 to 72 hours after all required documents are submitted.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
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
        name: "Get a Free Quote",
        item: `${BASE_URL}/#quote-form`,
      },
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TopDog Final Expense Insurance",
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
    </>
  );
}