import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PrivacyPage } from "@/components/privacy-page";
import { PATHS } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("en", "privacy");

export default function Page() {
  return (
    <>
      <SiteHeader lang="en" switchHref={PATHS.es.privacy} />
      <PrivacyPage lang="en" />
      <SiteFooter lang="en" />
    </>
  );
}
