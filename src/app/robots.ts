import type { MetadataRoute } from "next";
// This branch is for preview only. Revisit indexing before production publication.
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:"*",disallow:"/"}};}
