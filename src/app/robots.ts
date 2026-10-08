import type { MetadataRoute } from "next";

// Preview build: keep it out of search engines until it replaces the real site.
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", disallow: "/" } };
}
