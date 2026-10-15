import { CONTENT, PATHS, type Lang } from "./content";
import { COMPANY_NAME, CONTACT_EMAIL, PRODUCT_LINKS, SITE_URL } from "./site";

// Datos estructurados (schema.org) para que Google entienda quién es la empresa,
// qué ofrece y qué apps publica. Se insertan como JSON-LD en la portada.
export const buildHomeJsonLd = (lang: Lang) => {
  const { meta, services, products } = CONTENT[lang];
  const pageUrl = `${SITE_URL}${PATHS[lang].home === "/" ? "/" : PATHS[lang].home}`;
  const orgId = `${SITE_URL}/#organization`;
  const appInfo: Record<string, { url: string; category: string; sameAs: string[] }> = {
    "Mythic Lobby": {
      url: PRODUCT_LINKS.mythicLanding,
      category: "GameApplication",
      sameAs: [PRODUCT_LINKS.mythicPlay, PRODUCT_LINKS.mythicWeb],
    },
    Calinv: {
      url: PRODUCT_LINKS.calinvLanding,
      category: "BusinessApplication",
      sameAs: [PRODUCT_LINKS.calinvPlay, PRODUCT_LINKS.calinvWeb],
    },
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: COMPANY_NAME,
        alternateName: "DSmart Solutions",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/brand/dsmart-icon-512.png`, width: 512, height: 512 },
        image: `${SITE_URL}/brand/dsmart-logo.png`,
        email: CONTACT_EMAIL,
        description: meta.description,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: CONTACT_EMAIL,
          availableLanguage: ["Spanish", "English"],
        },
        knowsAbout: services.items.map((item) => item.title),
        makesOffer: services.items.map((item) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: item.title, description: item.desc },
        })),
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: COMPANY_NAME,
        publisher: { "@id": orgId },
        inLanguage: ["es", "en"],
      },
      {
        "@type": "WebPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: meta.title,
        description: meta.description,
        inLanguage: lang,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": orgId },
      },
      ...products.items.map((product) => ({
        "@type": "SoftwareApplication",
        name: product.name,
        description: product.description,
        url: appInfo[product.name]?.url,
        sameAs: appInfo[product.name]?.sameAs,
        image: `${SITE_URL}${product.icon}`,
        applicationCategory: appInfo[product.name]?.category,
        operatingSystem: product.platforms.join(", "),
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        publisher: { "@id": orgId },
      })),
    ],
  };
};
