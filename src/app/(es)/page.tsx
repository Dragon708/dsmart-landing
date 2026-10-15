import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HomePage } from "@/components/home-page";
import { PATHS } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("es", "home");

export default function Page() {
  return (
    <>
      <SiteHeader lang="es" switchHref={PATHS.en.home} />
      <HomePage lang="es" />
      <SiteFooter lang="es" />
    </>
  );
}
