import Link from "next/link";
import { CONTENT, PATHS, type Lang } from "@/lib/content";
import { COMPANY_NAME, CONTACT_EMAIL } from "@/lib/site";

type SiteFooterProps = { lang: Lang };

export const SiteFooter = ({ lang }: SiteFooterProps) => {
  const { footer } = CONTENT[lang];
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {year} {COMPANY_NAME}. {footer.rights}
        </p>
        <div className="flex gap-4">
          <Link href={PATHS[lang].privacy} className="hover:text-foreground">
            {footer.privacy}
          </Link>
          <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-foreground">
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
};
