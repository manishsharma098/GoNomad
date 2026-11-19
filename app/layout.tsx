import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteShell } from "@/app/components/layout/SiteShell";
import "@/styles.css";

export const metadata: Metadata = {
  title: {
    default: "GoNomad — Small-group travel without limits",
    template: "%s",
  },
  description: "Private, low-impact small-group trips led by local guides. Twelve travelers max.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    siteName: "GoNomad",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const fontHref =
  "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600&family=Geist+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600&display=swap";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={fontHref} />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
