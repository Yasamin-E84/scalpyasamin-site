import type { MetadataRoute } from "next";
import { siteConfig } from "@/config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteConfig.indexing) return [];
  return [{ url: `${siteConfig.siteUrl}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }];
}
