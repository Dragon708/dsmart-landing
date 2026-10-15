import type { ReactNode } from "react";
import { RootDocument } from "@/components/root-document";
import "../../globals.css";

export { viewport } from "@/lib/metadata";

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
