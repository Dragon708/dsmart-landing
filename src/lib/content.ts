import { PRODUCT_LINKS, WORK_LINKS } from "./site";

export type Lang = "es" | "en";

export type ServiceIcon = "mobile" | "web" | "desktop" | "api" | "realtime" | "ai";

type ProductLink = { label: string; href: string };

type Product = {
  name: string;
  tagline: string;
  description: string;
  icon: string;
  platforms: string[];
  links: ProductLink[];
};

type WorkItem = { name: string; kind: string; description: string; icon: string; tags: string[]; href: string };

type PrivacySection = { title: string; body: string[] };

export type Content = {
  meta: { title: string; description: string; privacyTitle: string };
  nav: { services: string; products: string; process: string; contact: string; cta: string; switchLang: string };
  hero: {
    eyebrow: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  services: { eyebrow: string; title: string; subtitle: string; items: { icon: ServiceIcon; title: string; desc: string }[] };
  products: { eyebrow: string; title: string; subtitle: string; available: string; items: Product[] };
  work: { eyebrow: string; title: string; subtitle: string; visit: string; items: WorkItem[] };
  process: { eyebrow: string; title: string; steps: { title: string; desc: string }[] };
  stack: { title: string };
  about: { eyebrow: string; title: string; paragraphs: string[]; pillars: { title: string; desc: string }[] };
  contact: { title: string; subtitle: string; email: string; whatsapp: string };
  footer: { tagline: string; rights: string; privacy: string; sections: string };
  privacy: { title: string; updated: string; intro: string; sections: PrivacySection[] };
};

export const STACK = [
  "TypeScript",
  "React",
  "Next.js",
  "React Native",
  "Expo",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "LiveKit",
  "Tailwind CSS",
  "Vercel",
  "Cloudflare",
];

const es: Content = {
  meta: {
    title: "DSmart — Desarrollo de software: apps móviles, web y escritorio",
    description:
      "DSmart diseña y desarrolla apps para Android, Windows y la web: productos propios como Mythic Lobby y Calinv, y software a medida para empresas.",
    privacyTitle: "Política de privacidad",
  },
  nav: {
    services: "Servicios",
    products: "Productos",
    process: "Cómo trabajamos",
    contact: "Contacto",
    cta: "Hablemos",
    switchLang: "EN",
  },
  hero: {
    eyebrow: "Estudio de software",
    titleStart: "Software que ",
    titleHighlight: "funciona",
    titleEnd: " en el mundo real.",
    subtitle:
      "Diseñamos, construimos y operamos apps para Android, Windows y la web. Las mismas manos que lanzaron Mythic Lobby y Calinv pueden construir el tuyo.",
    ctaPrimary: "Cuéntanos tu proyecto",
    ctaSecondary: "Ver productos",
    stats: [
      { value: "5", label: "proyectos en producción" },
      { value: "3", label: "plataformas: Android, Windows y web" },
      { value: "100%", label: "del ciclo: diseño, código, nube y soporte" },
    ],
  },
  services: {
    eyebrow: "Servicios",
    title: "Lo que podemos construir contigo",
    subtitle: "Del prototipo al producto en producción, con el mismo equipo de principio a fin.",
    items: [
      {
        icon: "mobile",
        title: "Apps móviles",
        desc: "Apps para Android e iOS con React Native y Expo, listas para publicar en Google Play y App Store.",
      },
      {
        icon: "web",
        title: "Aplicaciones web y SaaS",
        desc: "Plataformas web rápidas y escalables con Next.js: paneles, portales de clientes y productos por suscripción.",
      },
      {
        icon: "desktop",
        title: "Software de escritorio",
        desc: "Aplicaciones para Windows que funcionan sin conexión y se sincronizan cuando vuelve internet.",
      },
      {
        icon: "api",
        title: "Backend, APIs e integraciones",
        desc: "Bases de datos, autenticación, pagos y APIs a medida para conectar tus sistemas.",
      },
      {
        icon: "realtime",
        title: "Tiempo real: voz, video y chat",
        desc: "Salas de voz, transmisiones en vivo y mensajería en tiempo real, como en Mythic Lobby.",
      },
      {
        icon: "ai",
        title: "IA y automatización",
        desc: "Asistentes, procesamiento de documentos y automatizaciones que ahorran horas de trabajo manual.",
      },
    ],
  },
  products: {
    eyebrow: "Productos",
    title: "Hechos por nosotros, usados cada día",
    subtitle: "Nuestros productos propios son la mejor prueba de cómo trabajamos.",
    available: "Disponible",
    items: [
      {
        name: "Mythic Lobby",
        tagline: "Comunidad gamer",
        description:
          "Arma squad, compite en torneos con árbitros, transmite tus partidas y habla por voz con tu equipo, en cualquier juego.",
        icon: "/products/mythic-lobby.png",
        platforms: ["Android", "Web"],
        links: [
          { label: "Google Play", href: PRODUCT_LINKS.mythicPlay },
          { label: "Abrir en el navegador", href: PRODUCT_LINKS.mythicWeb },
          { label: "Sitio web", href: PRODUCT_LINKS.mythicLanding },
        ],
      },
      {
        name: "Calinv",
        tagline: "Inventario y caja",
        description:
          "Inventario y ventas para tiendas pequeñas, sin internet. Gratis para un negocio; con Premium sincroniza teléfonos, tiendas y personal.",
        icon: "/products/calinv.png",
        platforms: ["Android", "Windows", "Web"],
        links: [
          { label: "Google Play", href: PRODUCT_LINKS.calinvPlay },
          { label: "Descargar para Windows", href: PRODUCT_LINKS.calinvWindows },
          { label: "Abrir en el navegador", href: PRODUCT_LINKS.calinvWeb },
          { label: "Sitio web", href: PRODUCT_LINKS.calinvLanding },
        ],
      },
    ],
  },
  work: {
    eyebrow: "Más proyectos",
    title: "Sitios, tiendas y herramientas que hemos lanzado",
    subtitle: "Además de nuestras apps, construimos sitios y plataformas para negocios reales y herramientas para otros desarrolladores.",
    visit: "Visitar",
    items: [
      {
        name: "Electrónica al Máximo",
        kind: "Sitio web y catálogo",
        description:
          "Sitio para un taller de reparación y venta de laptops: catálogo de equipos con consulta directa por WhatsApp, servicios y agenda de reparaciones.",
        icon: "/products/electronica-al-maximo.png",
        tags: ["Next.js", "Catálogo", "WhatsApp"],
        href: WORK_LINKS.electronica,
      },
      {
        name: "A-Pululu",
        kind: "Tienda online",
        description:
          "Tienda para enviar combos de alimentos, cumpleaños y cárnicos a Cuba desde cualquier país, con varios comercios y pago con Visa o Mastercard.",
        icon: "/products/apululu.png",
        tags: ["E-commerce", "Pagos", "Multitienda"],
        href: WORK_LINKS.apululu,
      },
      {
        name: "DocMind",
        kind: "SDK para desarrolladores",
        description:
          "Convierte PDF, Word, Excel, imágenes y más en texto y Markdown listo para IA, con OCR, en el navegador o en Node. Incluye un playground para probarlo con archivos reales.",
        icon: "/products/docmind.png",
        tags: ["TypeScript", "IA", "OCR", "npm"],
        href: WORK_LINKS.docmind,
      },
    ],
  },
  process: {
    eyebrow: "Cómo trabajamos",
    title: "Un proceso claro, sin sorpresas",
    steps: [
      { title: "Descubrimiento", desc: "Entendemos tu negocio, tus usuarios y qué tiene que resolver el software." },
      { title: "Diseño", desc: "Definimos pantallas, flujos y arquitectura antes de escribir código." },
      { title: "Desarrollo", desc: "Entregas frecuentes que puedes probar desde la primera semana." },
      { title: "Lanzamiento y soporte", desc: "Publicamos en tiendas y en la nube, y seguimos contigo después." },
    ],
  },
  stack: { title: "Tecnologías con las que trabajamos" },
  about: {
    eyebrow: "Qué es DSmart",
    title: "Una compañía de software independiente",
    paragraphs: [
      "En DSmart creamos productos propios y software a medida. Nos encargamos de todo el ciclo: diseño, desarrollo, infraestructura y soporte.",
      "Cada producto vive en su propio subdominio de dsmarts.app y tiene su propia política de privacidad y condiciones de uso.",
    ],
    pillars: [
      { title: "Producto propio", desc: "Construimos y mantenemos nuestras apps de principio a fin." },
      { title: "Móvil, escritorio y web", desc: "Una sola base para llegar a Android, Windows y el navegador." },
      { title: "Privacidad por defecto", desc: "Pedimos solo los datos necesarios para que cada producto funcione." },
    ],
  },
  contact: {
    title: "¿Tienes un proyecto en mente?",
    subtitle: "Cuéntanos qué necesitas y te respondemos con una propuesta. Sin compromiso.",
    email: "Escríbenos un correo",
    whatsapp: "Escríbenos por WhatsApp",
  },
  footer: {
    tagline: "Apps móviles, web y de escritorio.",
    rights: "Todos los derechos reservados.",
    privacy: "Política de privacidad",
    sections: "Secciones",
  },
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
    title: "DSmart — Software development: mobile, web and desktop apps",
    description:
      "DSmart designs and builds apps for Android, Windows and the web: our own products such as Mythic Lobby and Calinv, and custom software for businesses.",
    privacyTitle: "Privacy policy",
  },
  nav: {
    services: "Services",
    products: "Products",
    process: "How we work",
    contact: "Contact",
    cta: "Let's talk",
    switchLang: "ES",
  },
  hero: {
    eyebrow: "Software studio",
    titleStart: "Software that ",
    titleHighlight: "works",
    titleEnd: " in the real world.",
    subtitle:
      "We design, build and run apps for Android, Windows and the web. The same team that launched Mythic Lobby and Calinv can build yours.",
    ctaPrimary: "Tell us about your project",
    ctaSecondary: "See products",
    stats: [
      { value: "5", label: "projects in production" },
      { value: "3", label: "platforms: Android, Windows and web" },
      { value: "100%", label: "of the cycle: design, code, cloud and support" },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "What we can build with you",
    subtitle: "From prototype to production, with the same team from start to finish.",
    items: [
      {
        icon: "mobile",
        title: "Mobile apps",
        desc: "Android and iOS apps built with React Native and Expo, ready for Google Play and the App Store.",
      },
      {
        icon: "web",
        title: "Web apps and SaaS",
        desc: "Fast, scalable web platforms with Next.js: dashboards, client portals and subscription products.",
      },
      {
        icon: "desktop",
        title: "Desktop software",
        desc: "Windows apps that work offline and sync when the connection comes back.",
      },
      {
        icon: "api",
        title: "Backend, APIs and integrations",
        desc: "Databases, authentication, payments and custom APIs to connect your systems.",
      },
      {
        icon: "realtime",
        title: "Real time: voice, video and chat",
        desc: "Voice rooms, live streaming and real-time messaging, as in Mythic Lobby.",
      },
      {
        icon: "ai",
        title: "AI and automation",
        desc: "Assistants, document processing and automations that save hours of manual work.",
      },
    ],
  },
  products: {
    eyebrow: "Products",
    title: "Built by us, used every day",
    subtitle: "Our own products are the best proof of how we work.",
    available: "Available",
    items: [
      {
        name: "Mythic Lobby",
        tagline: "Gaming community",
        description:
          "Find your squad, compete in refereed tournaments, stream your matches and talk over voice with your team, in any game.",
        icon: "/products/mythic-lobby.png",
        platforms: ["Android", "Web"],
        links: [
          { label: "Google Play", href: PRODUCT_LINKS.mythicPlay },
          { label: "Open in browser", href: PRODUCT_LINKS.mythicWeb },
          { label: "Website", href: PRODUCT_LINKS.mythicLanding },
        ],
      },
      {
        name: "Calinv",
        tagline: "Inventory and sales",
        description:
          "Inventory and sales for small shops, no internet needed. Free for one business; Premium syncs phones, stores and staff.",
        icon: "/products/calinv.png",
        platforms: ["Android", "Windows", "Web"],
        links: [
          { label: "Google Play", href: PRODUCT_LINKS.calinvPlay },
          { label: "Download for Windows", href: PRODUCT_LINKS.calinvWindows },
          { label: "Open in browser", href: PRODUCT_LINKS.calinvWeb },
          { label: "Website", href: PRODUCT_LINKS.calinvLanding },
        ],
      },
    ],
  },
  work: {
    eyebrow: "More projects",
    title: "Sites, stores and tools we have shipped",
    subtitle: "Beyond our own apps, we build sites and platforms for real businesses and tools for other developers.",
    visit: "Visit",
    items: [
      {
        name: "Electrónica al Máximo",
        kind: "Website and catalog",
        description:
          "Website for a laptop repair and sales shop: a product catalog with one-tap WhatsApp inquiries, services and repair booking.",
        icon: "/products/electronica-al-maximo.png",
        tags: ["Next.js", "Catalog", "WhatsApp"],
        href: WORK_LINKS.electronica,
      },
      {
        name: "A-Pululu",
        kind: "Online store",
        description:
          "Store for sending food bundles, birthday packages and meat to Cuba from any country, with multiple merchants and Visa or Mastercard checkout.",
        icon: "/products/apululu.png",
        tags: ["E-commerce", "Payments", "Multi-store"],
        href: WORK_LINKS.apululu,
      },
      {
        name: "DocMind",
        kind: "Developer SDK",
        description:
          "Turns PDF, Word, Excel, images and more into text and AI-ready Markdown, with OCR, in the browser or on Node. Includes a playground to try it with real files.",
        icon: "/products/docmind.png",
        tags: ["TypeScript", "AI", "OCR", "npm"],
        href: WORK_LINKS.docmind,
      },
    ],
  },
  process: {
    eyebrow: "How we work",
    title: "A clear process, no surprises",
    steps: [
      { title: "Discovery", desc: "We learn your business, your users and what the software has to solve." },
      { title: "Design", desc: "We define screens, flows and architecture before writing code." },
      { title: "Development", desc: "Frequent deliveries you can try from the first week." },
      { title: "Launch and support", desc: "We ship to the stores and the cloud, and stay with you afterwards." },
    ],
  },
  stack: { title: "Technologies we work with" },
  about: {
    eyebrow: "About DSmart",
    title: "An independent software company",
    paragraphs: [
      "At DSmart we build our own products and custom software. We take care of the whole cycle: design, development, infrastructure and support.",
      "Each product lives on its own dsmarts.app subdomain and has its own privacy policy and terms of use.",
    ],
    pillars: [
      { title: "Our own products", desc: "We build and maintain our apps end to end." },
      { title: "Mobile, desktop and web", desc: "One codebase to reach Android, Windows and the browser." },
      { title: "Privacy by default", desc: "We only ask for the data each product needs to work." },
    ],
  },
  contact: {
    title: "Have a project in mind?",
    subtitle: "Tell us what you need and we will reply with a proposal. No strings attached.",
    email: "Send us an email",
    whatsapp: "Message us on WhatsApp",
  },
  footer: {
    tagline: "Mobile, web and desktop apps.",
    rights: "All rights reserved.",
    privacy: "Privacy policy",
    sections: "Sections",
  },
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
