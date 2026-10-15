import type { ReactNode } from "react";
import type { Lang } from "@/lib/content";
import { geistSans } from "@/lib/fonts";

type RootDocumentProps = { lang: Lang; children: ReactNode };

export const RootDocument = ({ lang, children }: RootDocumentProps) => (
  <html lang={lang} className={geistSans.variable}>
    <body className="flex min-h-dvh flex-col font-sans">{children}</body>
  </html>
);
