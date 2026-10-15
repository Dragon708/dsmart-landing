import Link from "next/link";
import { CONTENT, PATHS, type Lang } from "@/lib/content";
import { Wordmark } from "./wordmark";

type SiteHeaderProps = { lang: Lang; switchHref: string };

export const SiteHeader = ({ lang, switchHref }: SiteHeaderProps) => {
  const { nav } = CONTENT[lang];
  const home = PATHS[lang].home;
  const anchor = (id: string) => (home === "/" ? `/#${id}` : `${home}#${id}`);

  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
        <Wordmark href={home} />
        <nav className="flex items-center gap-1 text-sm text-muted sm:gap-2">
          <Link href={anchor("about")} className="hidden rounded-md px-2 py-1 hover:text-foreground sm:block">
            {nav.about}
          </Link>
          <Link href={anchor("products")} className="hidden rounded-md px-2 py-1 hover:text-foreground sm:block">
            {nav.products}
          </Link>
          <Link href={anchor("contact")} className="hidden rounded-md px-2 py-1 hover:text-foreground sm:block">
            {nav.contact}
          </Link>
          <Link
            href={switchHref}
            hrefLang={lang === "es" ? "en" : "es"}
            className="rounded-md border border-border px-3 py-1 text-foreground hover:bg-surface"
          >
            {nav.switchLang}
          </Link>
        </nav>
      </div>
    </header>
  );
};
