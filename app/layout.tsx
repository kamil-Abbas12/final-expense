import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const BASE_URL = "https://www.finalexpense.topdoglead.com";
   const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"], display: "swap", }); 
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
  ],
  authors: [{ name: "TopDog Final Expense", url: BASE_URL }],
  creator: "Top Dog Final Expense",
  publisher: "Top Dog Final Expense",
  category: "Insurance",

  // ── Canonical & Alternates ────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Open Graph (Facebook, LinkedIn shares) ────────────────────
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
      "Affordable final expense insurance with no medical exam. Fixed premiums, guaranteed acceptance for ages 50–85.",
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

  // ── Verification tokens ───────────────────────────────────────
  verification: {
    google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN",   // replace after verifying in GSC
    // bing: "YOUR_BING_WEBMASTER_TOKEN",
  },

  // ── App / PWA hints ───────────────────────────────────────────
  applicationName: "Top Dog Leads Final Expense",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"
    className={` ${poppins.className}`}
    suppressHydrationWarning>
      <head>
        {/* ── Preconnect to speed up Google Fonts / CDN ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── Favicons ── */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* ── Theme color ── */}
        <meta name="theme-color" content="#059669" />

        {/* ── Geo targeting (helps local SEO) ── */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />

        {/* ── Google Ads conversion tag (replace with your ID) ── */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX" /> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}