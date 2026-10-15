import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { PrivacyPage } from "@/components/privacy-page";
import { PATHS } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("es", "privacy");

export default function Page() {
  return (
    <>
      <SiteHeader lang="es" switchHref={PATHS.en.privacy} />
      <PrivacyPage lang="es" />
      <SiteFooter lang="es" />
    </>
  );
}
