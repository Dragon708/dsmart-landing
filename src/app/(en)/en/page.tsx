import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { HomePage } from "@/components/home-page";
import { PATHS } from "@/lib/content";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata("en", "home");

export default function Page() {
  return (
    <>
      <SiteHeader lang="en" switchHref={PATHS.es.home} />
      <HomePage lang="en" />
      <SiteFooter lang="en" />
    </>
  );
}
