import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

const BASE_URL = "https://www.finalexpense.topdoglead.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Primary SEO ──────────────────────────────────────────────
  title: {
    default: "Final Expense Insurance | No Medical Exam | TopDog Final Expense",
    template: "%s | Top Dog Final Expense",
  },
  description:
    "Get affordable final expense insurance with no medical exam required. Fixed premiums, guaranteed acceptance for ages 50–85. Free quote in 60 seconds. Call 866-963-5898.",
  keywords: [
    "final expense insurance",
    "burial insurance",
    "funeral insurance",
    "life insurance for seniors",
    "no medical exam life insurance",
    "affordable burial insurance",
    "final expense coverage",
    "whole life insurance seniors",
    "guaranteed acceptance life insurance",
    "senior life insurance",
    "cheap burial insurance",
    "final expense insurance quotes",
    "burial insurance over 50",
    "funeral cost coverage",
    "final expense life insurance",
    "burial insurance no waiting period",
    "final expense insurance for diabetics",
    "final expense insurance over 70",
    "final expense insurance over 80",
    "low income burial insurance",
  ],
  authors: [{ name: "TopDog Final Expense", url: BASE_URL }],
  creator: "Top Dog Final Expense",
  publisher: "Top Dog Final Expense",
  category: "Insurance",

  // ── Canonical & Alternates ────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Open Graph ────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    siteName: "Top Dog Final Expense Insurance",
    title: "Final Expense Insurance - No Medical Exam, Fixed Premiums for Life",
    description:
      "Protect your family from $8,300+ funeral costs. No medical exam. Guaranteed acceptance ages 50–85. Get your free quote today.",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Top Dog Final Expense Insurance — Protect Your Family",
        type: "image/jpeg",
      },
    ],
  },

  // ── Twitter Card ──────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Final Expense Insurance | No Medical Exam | TopDog",
    description:
      "Affordable final expense insurance with no medical exam. Fixed premiums, guaranteed acceptance ages 50–85.",
    images: [`${BASE_URL}/og-image.jpg`],
    creator: "@topdoginsurance",
    site: "@topdoginsurance",
  },

  // ── Robots ────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Verification ──────────────────────────────────────────────
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",
    // bing: "YOUR_BING_WEBMASTER_TOKEN",
    // yandex: "YOUR_YANDEX_TOKEN",
  },

  // ── App hints ─────────────────────────────────────────────────
  applicationName: "Top Dog Final Expense",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// ── JSON-LD Structured Data ───────────────────────────────────────
// This is the #1 thing that drives rich results, backlinks, and
// Google Knowledge Panel — do NOT skip this
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "Top Dog Final Expense",
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/og-image.jpg`,
  description:
    "Top Dog Final Expense provides affordable final expense insurance with no medical exam required. Fixed premiums and guaranteed acceptance for seniors ages 50–85.",
  telephone: "+1-866-963-5898",
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  sameAs: [
    // Add your actual social profile URLs here — critical for backlink signals
    "https://www.facebook.com/topdogfinalexpense",
    "https://twitter.com/topdoginsurance",
    "https://www.linkedin.com/company/topdogfinalexpense",
    "https://www.youtube.com/@topdogfinalexpense",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-866-963-5898",
    contactType: "customer service",
    availableLanguage: "English",
    contactOption: "TollFree",
    areaServed: "US",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Final Expense Insurance Plans",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Final Expense Insurance",
          description:
            "Affordable burial insurance with no medical exam, guaranteed acceptance for ages 50–85.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Guaranteed Acceptance Life Insurance",
          description:
            "Whole life insurance for seniors with guaranteed approval regardless of health.",
        },
      },
    ],
  },
};

// FAQPage schema — drives FAQ rich results in Google = more SERP real estate
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is final expense insurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Final expense insurance is a type of whole life insurance designed to cover end-of-life costs such as funeral expenses, burial costs, and outstanding medical bills. Coverage typically ranges from $2,000 to $35,000.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a medical exam for final expense insurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Top Dog Final Expense offers guaranteed acceptance policies with no medical exam required. You simply answer a few health questions to determine your plan options.",
      },
    },
    {
      "@type": "Question",
      name: "What ages qualify for final expense insurance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most final expense insurance plans accept applicants between ages 50 and 85. Some carriers extend coverage to age 89.",
      },
    },
    {
      "@type": "Question",
      name: "How much does final expense insurance cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Premiums typically range from $30 to $150 per month depending on your age, health, and coverage amount. Premiums are fixed and never increase once your policy is issued.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can I get covered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Coverage can begin the same day you apply in many cases. Get a free quote in 60 seconds by calling 866-963-5898.",
      },
    },
  ],
};

// WebSite schema — enables Google Sitelinks Search Box
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Top Dog Final Expense",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        {/* ── Preconnect ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
 <link
    rel="preload"
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
    as="style"
  />
        {/* ── Favicons (Next.js App Router convention) ── */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ── Theme & Mobile ── */}
        <meta name="theme-color" content="#059669" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="TopDog Final Expense" />

        {/* ── Geo targeting ── */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="ICBM" content="37.09024, -95.712891" />

        {/* ── JSON-LD Structured Data ── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={poppins.className}>
        {children}

        {/* ── Google Tag Manager (replace GTM-XXXXXXX) ── */}
        {/* Uncomment when you have your GTM ID */}
        {/* 
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');`,
          }}
        />
        */}
      </body>
    </html>
  );
}