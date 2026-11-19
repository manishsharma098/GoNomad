"use client";

import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { navLinks } from "@/app/data/site";
import { cn } from "@/lib/utils";
import { LogoMark, Wordmark } from "./Logo";
import { TransitionLink } from "./PageTransition";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the phone menu as soon as a new page is showing.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-6 md:pt-12">
      <nav className="w-full max-w-[846px] rounded-[40px] bg-sand/90 p-1.5 shadow-[var(--shadow-soft)] backdrop-blur-xl">
        <div className="flex items-center justify-between gap-4">
          <TransitionLink to="/" aria-label="GoNomad home" className="flex items-center gap-2 text-ink">
            <LogoMark />
            <Wordmark />
          </TransitionLink>

          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map((l) => (
              <li key={l.to}>
                <TransitionLink
                  to={l.to}
                  className={cn(
                    "font-ui text-sm font-medium transition-opacity hover:opacity-60",
                    pathname === l.to ? "text-ink" : "text-ink/80",
                  )}
                >
                  {l.label}
                </TransitionLink>
              </li>
            ))}
          </ul>

          <TransitionLink
            to="/contact"
            className="hidden rounded-full bg-ink px-5 py-3 font-ui text-base font-medium text-paper transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Plan a Trip Now
          </TransitionLink>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-11 place-items-center rounded-full bg-ink text-paper md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          className={cn(
            "grid transition-all duration-500 md:hidden",
            open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0",
          )}
          inert={!open}
        >
          <ul className="flex flex-col gap-1 overflow-hidden px-4">
            {navLinks.map((l) => (
              <li key={l.to} className="first:pt-4">
                <TransitionLink
                  to={l.to}
                  onNavigate={() => setOpen(false)}
                  className="block py-2 font-ui text-2xl font-medium text-ink"
                >
                  {l.label}
                </TransitionLink>
              </li>
            ))}
            <li className="pb-4 pt-2">
              <TransitionLink
                to="/contact"
                onNavigate={() => setOpen(false)}
                className="flex justify-center rounded-full bg-ink px-5 py-3 font-ui font-medium text-paper"
              >
                Plan a Trip Now
              </TransitionLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}