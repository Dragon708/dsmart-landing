import type { Metadata } from "next";
import { CONTENT, PATHS, type Lang } from "./content";
import { COMPANY_NAME, SITE_URL } from "./site";

type Page = "home" | "privacy";

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
    },
  };
};
