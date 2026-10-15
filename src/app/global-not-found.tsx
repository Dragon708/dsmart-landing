import type { Metadata } from "next";
import Link from "next/link";
import { RootDocument } from "@/components/root-document";
import "./globals.css";

export const metadata: Metadata = {
  title: "404 · DSmart",
};

export default function GlobalNotFound() {
  return (
    <RootDocument lang="es">
      <main className="mx-auto flex max-w-xl flex-1 flex-col items-start justify-center gap-4 px-4 py-24">
        <p className="text-sm font-medium text-primary">404</p>
        <h1 className="text-3xl font-semibold tracking-tight">Página no encontrada · Page not found</h1>
        <div className="flex gap-4 text-primary">
          <Link href="/" className="hover:underline">Ir al inicio</Link>
          <Link href="/en" className="hover:underline">Go home</Link>
        </div>
      </main>
    </RootDocument>
  );
}
