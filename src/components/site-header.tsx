import Link from "next/link";
import { CONTENT, PATHS, type Lang } from "@/lib/content";
import { Wordmark } from "./wordmark";

type SiteHeaderProps = { lang: Lang; switchHref: string };

export const homeAnchor = (lang: Lang, id: string) => {
  const home = PATHS[lang].home;
  return home === "/" ? `/#${id}` : `${home}#${id}`;
};

export const SiteHeader = ({ lang, switchHref }: SiteHeaderProps) => {
  const { nav } = CONTENT[lang];
  const links = [
    { id: "services", label: nav.services },
    { id: "products", label: nav.products },
    { id: "process", label: nav.process },
    { id: "contact", label: nav.contact },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-white/5 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Wordmark href={PATHS[lang].home} />
        <nav className="flex items-center gap-1 text-sm">
          {links.map((link) => (
            <Link
              key={link.id}
              href={homeAnchor(lang, link.id)}
              className="hidden rounded-md px-3 py-1.5 text-muted transition-colors hover:text-foreground md:block"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={switchHref}
            hrefLang={lang === "es" ? "en" : "es"}
            className="rounded-md px-3 py-1.5 font-medium text-muted transition-colors hover:text-foreground"
          >
            {nav.switchLang}
          </Link>
          <Link
            href={homeAnchor(lang, "contact")}
            className="ml-1 rounded-lg bg-primary px-4 py-2 font-semibold text-on-primary transition-transform active:scale-[0.97]"
          >
            {nav.cta}
          </Link>
        </nav>
      </div>
    </header>
  );
};
