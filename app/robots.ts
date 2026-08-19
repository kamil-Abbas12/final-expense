import { MetadataRoute } from "next";

const BASE_URL = "https://finalexpense.topdoglead.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          // REMOVED "/_next/" — this blocks Google from loading your
          // CSS/JS/fonts, which breaks how it renders the page before
          // indexing. Never block /_next/ in a Next.js site.
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}