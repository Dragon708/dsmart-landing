import type { MetadataRoute } from "next";
import { COMPANY_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${COMPANY_NAME} Solutions`,
    short_name: COMPANY_NAME,
    start_url: "/",
    display: "standalone",
    background_color: "#040817",
    theme_color: "#040817",
    icons: [
      { src: "/brand/dsmart-icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/dsmart-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
