import type { MetadataRoute } from "next";
import { PATHS } from "@/lib/content";
import { SITE_URL } from "@/lib/site";

const absolute = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["home", "privacy"] as const;
  return pages.flatMap((page) =>
    (["es", "en"] as const).map((lang) => ({
      url: absolute(PATHS[lang][page]),
      changeFrequency: "monthly" as const,
      priority: page === "home" ? 1 : 0.3,
      alternates: {
        languages: { es: absolute(PATHS.es[page]), en: absolute(PATHS.en[page]) },
      },
    })),
  );
}
