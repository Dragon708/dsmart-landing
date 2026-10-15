import { PRODUCT_LINKS } from "./site";

export type Lang = "es" | "en";

type ProductLink = { label: string; href: string };

type Product = {
  name: string;
  status: string;
  description: string;
  icon?: string;
  links: ProductLink[];
};

type PrivacySection = { title: string; body: string[] };

export type Content = {
  meta: { title: string; description: string; privacyTitle: string };
  nav: { about: string; products: string; contact: string; privacy: string; switchLang: string };
  hero: { eyebrow: string; title: string; subtitle: string; ctaProducts: string; ctaContact: string };
  about: { title: string; paragraphs: string[]; pillars: { title: string; desc: string }[] };
  products: { title: string; subtitle: string; items: Product[] };
  contact: { title: string; subtitle: string; emailLabel: string };
  footer: { rights: string; privacy: string };
  privacy: { title: string; updated: string; intro: string; sections: PrivacySection[] };
};

const es: Content = {
  meta: {
    title: "DSmart — Software útil para la vida diaria",
    description:
      "DSmart es una compañía de software que crea apps y servicios web. Conoce nuestros productos: Mythic Lobby y Calinv.",
    privacyTitle: "Política de privacidad",
  },
  nav: {
    about: "Qué es DSmart",
    products: "Productos",
    contact: "Contacto",
    privacy: "Privacidad",
    switchLang: "English",
  },
  hero: {
    eyebrow: "Compañía de software",
    title: "Creamos apps y servicios que la gente usa cada día.",
    subtitle:
      "DSmart diseña, construye y opera productos digitales para Android, Windows y la web, de la idea a producción.",
    ctaProducts: "Ver productos",
    ctaContact: "Contactar",
  },
  about: {
    title: "Qué es DSmart",
    paragraphs: [
      "DSmart es una compañía de software independiente. Desarrollamos productos propios para móvil, escritorio y web, y nos encargamos de todo el ciclo: diseño, desarrollo, infraestructura y soporte.",
      "Cada producto vive en su propio subdominio de dsmarts.app y tiene su propia política de privacidad y condiciones de uso.",
    ],
    pillars: [
      { title: "Producto propio", desc: "Construimos y mantenemos nuestras apps de principio a fin." },
      { title: "Móvil, escritorio y web", desc: "Apps para Android y Windows, y versiones web que funcionan en cualquier navegador." },
      { title: "Privacidad por defecto", desc: "Pedimos solo los datos necesarios para que cada producto funcione." },
    ],
  },
  products: {
    title: "Productos",
    subtitle: "Apps que ya puedes usar hoy.",
    items: [
      {
        name: "Mythic Lobby",
        status: "Disponible",
        description:
          "Comunidad gamer para armar squad, competir en torneos, transmitir partidas y hablar por voz. Disponible en Android y en la web.",
        icon: "/products/mythic-lobby.png",
        links: [
          { label: "Google Play", href: PRODUCT_LINKS.mythicPlay },
          { label: "Abrir en el navegador", href: PRODUCT_LINKS.mythicWeb },
          { label: "Sitio web", href: PRODUCT_LINKS.mythicLanding },
        ],
      },
      {
        name: "Calinv",
        status: "Disponible",
        description:
          "Inventario y caja para tiendas pequeñas, sin internet. Gratis para un negocio; con Premium sincroniza teléfonos, tiendas y personal. En Android, Windows y la web.",
        icon: "/products/calinv.png",
        links: [
          { label: "Google Play", href: PRODUCT_LINKS.calinvPlay },
          { label: "Descargar para Windows", href: PRODUCT_LINKS.calinvWindows },
          { label: "Abrir en el navegador", href: PRODUCT_LINKS.calinvWeb },
          { label: "Sitio web", href: PRODUCT_LINKS.calinvLanding },
        ],
      },
    ],
  },
  contact: {
    title: "Contacto",
    subtitle: "¿Tienes una pregunta, una propuesta o necesitas soporte? Escríbenos y te respondemos.",
    emailLabel: "Escríbenos a",
  },
  footer: { rights: "Todos los derechos reservados.", privacy: "Política de privacidad" },
  privacy: {
    title: "Política de privacidad",
    updated: "Última actualización: 15 de octubre de 2026",
    intro:
      "Esta política explica qué datos trata DSmart cuando visitas este sitio web (dsmarts.app). Cada producto de DSmart, como Mythic Lobby, tiene su propia política de privacidad, publicada en su sitio.",
    sections: [
      {
        title: "Quiénes somos",
        body: ["DSmart es el responsable del tratamiento de los datos descritos aquí. Puedes contactarnos en el correo indicado al final de esta página."],
      },
      {
        title: "Qué datos recogemos",
        body: [
          "Este sitio no tiene registro de usuarios, formularios ni publicidad, y no usa cookies propias ni herramientas de analítica.",
          "Nuestro proveedor de hosting (Vercel) registra de forma automática datos técnicos de cada visita, como la dirección IP, el navegador y la página solicitada, para servir el sitio y protegerlo frente a abusos.",
          "Si nos escribes por correo, tratamos tu dirección y el contenido del mensaje solo para responderte.",
        ],
      },
      {
        title: "Para qué los usamos",
        body: ["Usamos estos datos únicamente para mostrar el sitio, mantener su seguridad y atender tus mensajes. No los vendemos ni los compartimos con terceros con fines comerciales."],
      },
      {
        title: "Cuánto tiempo los conservamos",
        body: ["Los registros técnicos del hosting se conservan durante el tiempo limitado que fija el proveedor. Los correos se conservan mientras sea necesario para atender tu consulta."],
      },
      {
        title: "Tus derechos",
        body: ["Puedes pedirnos acceso, rectificación o eliminación de tus datos personales, u oponerte a su tratamiento, escribiendo al correo de contacto."],
      },
      {
        title: "Productos de DSmart",
        body: ["Las apps y servicios de DSmart tienen sus propias políticas. Por ejemplo, la de Mythic Lobby está en mythic.dsmarts.app/privacy."],
      },
      {
        title: "Cambios",
        body: ["Si cambiamos esta política, publicaremos la nueva versión en esta página con su fecha de actualización."],
      },
    ],
  },
};

const en: Content = {
  meta: {
    title: "DSmart — Useful software for everyday life",
    description:
      "DSmart is a software company building apps and web services. Meet our products: Mythic Lobby and Calinv.",
    privacyTitle: "Privacy policy",
  },
  nav: {
    about: "About",
    products: "Products",
    contact: "Contact",
    privacy: "Privacy",
    switchLang: "Español",
  },
  hero: {
    eyebrow: "Software company",
    title: "We build apps and services people use every day.",
    subtitle: "DSmart designs, builds and runs digital products for Android, Windows and the web, from idea to production.",
    ctaProducts: "See products",
    ctaContact: "Get in touch",
  },
  about: {
    title: "What is DSmart",
    paragraphs: [
      "DSmart is an independent software company. We build our own mobile, desktop and web products and take care of the whole cycle: design, development, infrastructure and support.",
      "Each product lives on its own dsmarts.app subdomain and has its own privacy policy and terms of use.",
    ],
    pillars: [
      { title: "Our own products", desc: "We build and maintain our apps end to end." },
      { title: "Mobile, desktop and web", desc: "Apps for Android and Windows, plus web versions that run in any browser." },
      { title: "Privacy by default", desc: "We only ask for the data each product needs to work." },
    ],
  },
  products: {
    title: "Products",
    subtitle: "Apps you can use today.",
    items: [
      {
        name: "Mythic Lobby",
        status: "Available",
        description:
          "A gaming community to find your squad, compete in tournaments, stream matches and talk over voice. Available on Android and the web.",
        icon: "/products/mythic-lobby.png",
        links: [
          { label: "Google Play", href: PRODUCT_LINKS.mythicPlay },
          { label: "Open in browser", href: PRODUCT_LINKS.mythicWeb },
          { label: "Website", href: PRODUCT_LINKS.mythicLanding },
        ],
      },
      {
        name: "Calinv",
        status: "Available",
        description:
          "Stock and cash drawer for small shops, fully offline. Free for one business; Premium syncs phones, stores and staff. On Android, Windows and the web.",
        icon: "/products/calinv.png",
        links: [
          { label: "Google Play", href: PRODUCT_LINKS.calinvPlay },
          { label: "Download for Windows", href: PRODUCT_LINKS.calinvWindows },
          { label: "Open in browser", href: PRODUCT_LINKS.calinvWeb },
          { label: "Website", href: PRODUCT_LINKS.calinvLanding },
        ],
      },
    ],
  },
  contact: {
    title: "Contact",
    subtitle: "Have a question, a proposal or need support? Write to us and we will get back to you.",
    emailLabel: "Email us at",
  },
  footer: { rights: "All rights reserved.", privacy: "Privacy policy" },
  privacy: {
    title: "Privacy policy",
    updated: "Last updated: October 15, 2026",
    intro:
      "This policy explains what data DSmart processes when you visit this website (dsmarts.app). Each DSmart product, such as Mythic Lobby, has its own privacy policy published on its site.",
    sections: [
      {
        title: "Who we are",
        body: ["DSmart is the controller of the data described here. You can reach us at the email address at the end of this page."],
      },
      {
        title: "What data we collect",
        body: [
          "This site has no user accounts, forms or advertising, and it does not use its own cookies or analytics tools.",
          "Our hosting provider (Vercel) automatically logs technical data about each visit, such as IP address, browser and requested page, to serve the site and protect it from abuse.",
          "If you email us, we use your address and the content of your message only to reply.",
        ],
      },
      {
        title: "How we use it",
        body: ["We use this data only to serve the site, keep it secure and answer your messages. We do not sell it or share it with third parties for commercial purposes."],
      },
      {
        title: "How long we keep it",
        body: ["Hosting logs are kept for the limited period set by the provider. Emails are kept as long as needed to handle your request."],
      },
      {
        title: "Your rights",
        body: ["You can ask us to access, correct or delete your personal data, or object to its processing, by writing to the contact email."],
      },
      {
        title: "DSmart products",
        body: ["DSmart apps and services have their own policies. For example, Mythic Lobby's is at mythic.dsmarts.app/privacy."],
      },
      {
        title: "Changes",
        body: ["If we change this policy, we will publish the new version on this page with its update date."],
      },
    ],
  },
};

export const CONTENT: Record<Lang, Content> = { es, en };

export const PATHS: Record<Lang, { home: string; privacy: string }> = {
  es: { home: "/", privacy: "/privacidad" },
  en: { home: "/en", privacy: "/en/privacy" },
};
