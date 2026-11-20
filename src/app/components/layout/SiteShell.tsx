import type { ReactNode } from "react";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { PageTransitionProvider } from "./PageTransition";
import { SmoothScroll } from "./SmoothScroll";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <PageTransitionProvider>
      <SmoothScroll />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </PageTransitionProvider>
  );
}
