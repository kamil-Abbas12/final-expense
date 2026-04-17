import { MetadataRoute } from "next";

const BASE_URL = "https://www.finalexpense.topdoglead.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    // ── Add blog/article pages here as you create them ──
    // {
    //   url: `${BASE_URL}/blog/what-is-final-expense-insurance`,
    //   lastModified: new Date("2025-01-15"),
    //   changeFrequency: "monthly",
    //   priority: 0.8,
    // },
  ];
}