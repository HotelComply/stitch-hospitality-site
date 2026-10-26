import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stitch Hospitality",
    short_name: "Stitch",
    description: "Interim, fractional, and project leadership for hotels across California, Arizona, and Nevada.",
    start_url: "/",
    display: "browser",
    background_color: "#141413",
    theme_color: "#141413",
    icons: [
      { src: "/favicon.ico", sizes: "16x16 32x32 48x48", type: "image/x-icon" },
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
