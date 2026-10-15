import type { Metadata, Viewport } from "next";
import { CONTENT, PATHS, type Lang } from "./content";
import { COMPANY_NAME, SITE_URL } from "./site";

type Page = "home" | "privacy";

const OG_IMAGE = "/brand/og-image.png";

export const buildMetadata = (lang: Lang, page: Page): Metadata => {
  const { meta } = CONTENT[lang];
  const title = page === "home" ? meta.title : `${meta.privacyTitle} · ${COMPANY_NAME}`;
  const path = PATHS[lang][page];

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description: meta.description,
    applicationName: COMPANY_NAME,
    alternates: {
      canonical: path,
      languages: { es: PATHS.es[page], en: PATHS.en[page], "x-default": PATHS.es[page] },
    },
    openGraph: {
      type: "website",
      siteName: COMPANY_NAME,
      title,
      description: meta.description,
      url: path,
      locale: lang === "es" ? "es_ES" : "en_US",
      alternateLocale: lang === "es" ? "en_US" : "es_ES",
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: COMPANY_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: meta.description,
      images: [OG_IMAGE],
    },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    authors: [{ name: COMPANY_NAME, url: SITE_URL }],
    creator: COMPANY_NAME,
    publisher: COMPANY_NAME,
    category: "technology",
  };
};

export const viewport: Viewport = {
  themeColor: "#040817",
  colorScheme: "dark",
};
