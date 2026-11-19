import type { ReactNode } from "react";

import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { PageTransitionProvider } from "./PageTransition";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <PageTransitionProvider>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </PageTransitionProvider>
  );
}
