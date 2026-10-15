import type { ReactNode } from "react";
import { RootDocument } from "@/components/root-document";
import "../globals.css";

export { viewport } from "@/lib/metadata";

export default function SpanishLayout({ children }: { children: ReactNode }) {
  return <RootDocument lang="es">{children}</RootDocument>;
}
