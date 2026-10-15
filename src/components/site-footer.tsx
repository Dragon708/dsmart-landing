import Link from "next/link";
import { CONTENT, PATHS, type Lang } from "@/lib/content";
import { COMPANY_NAME, CONTACT_EMAIL } from "@/lib/site";
import { homeAnchor } from "./site-header";
import { Wordmark } from "./wordmark";

type SiteFooterProps = { lang: Lang };

export const SiteFooter = ({ lang }: SiteFooterProps) => {
  const { footer, nav } = CONTENT[lang];
  const year = new Date().getFullYear();
  const links = [
    { href: homeAnchor(lang, "services"), label: nav.services },
    { href: homeAnchor(lang, "products"), label: nav.products },
    { href: homeAnchor(lang, "process"), label: nav.process },
    { href: homeAnchor(lang, "contact"), label: nav.contact },
    { href: PATHS[lang].privacy, label: footer.privacy },
  ];

  return (
    <footer className="mt-auto border-t border-white/5">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1fr_auto]">
        <div className="space-y-3">
          <Wordmark href={PATHS[lang].home} />
          <p className="text-sm text-muted">{footer.tagline}</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="block text-sm text-muted hover:text-foreground">
            {CONTACT_EMAIL}
          </a>
        </div>
        <nav aria-label={footer.sections} className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted md:justify-end">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="border-t border-white/5">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-muted sm:px-6">
          © {year} {COMPANY_NAME}. {footer.rights}
        </p>
      </div>
    </footer>
  );
};
