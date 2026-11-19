import { ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";

import { footerColumns, footerInfo } from "@/app/data/site";
import { Reveal } from "@/app/components/common/Reveal";
import { Wordmark } from "./Logo";
import { TransitionLink } from "./PageTransition";
import { Luggage } from "lucide-react";

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="font-sans text-xl font-normal tracking-tight text-ink">{title}</h3>
      <ul className="flex flex-col gap-3 text-base text-ink-soft">{children}</ul>
    </div>
  );
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSent(true);
    setEmail("");
  };

  return (
    <footer className="bg-sand">
      <div className="mx-auto max-w-[1440px] overflow-hidden px-5 pt-16 md:px-20">
        <Reveal>
          <p
            aria-hidden="true"
            className="select-none text-center font-display font-medium leading-[0.8] tracking-[-0.06em] text-wordmark"
            style={{ fontSize: "clamp(5rem, 22vw, 20rem)" }}
          >
            GoNomad
          </p>
        </Reveal>

        <div className="mt-20 grid gap-12 md:grid-cols-2">
          <div className="max-w-md">
            <div className="flex items-center gap-2 text-ink">
              <Luggage className="size-6" strokeWidth={1.75} />
              <Wordmark className="text-2xl" />
            </div>
            <p className="mt-6 leading-relaxed text-ink-soft">
              Small-group tours for people who’d rather feel a place than rush through it. Twelve
              travelers, local guides, and trips built with room to breathe. And time to let the
              moments find you. Because the best stories aren’t scheduled.
            </p>
          </div>

          <div className="md:justify-self-end md:w-full md:max-w-md">
            <h3 className="text-xl text-ink">Subscribe our newsletter</h3>
            <p className="mt-2 text-sm text-ink-soft">
              New departures, early-bird fares, and stories from the road. Sent once a month, never
              more.
            </p>
            <form onSubmit={onSubmit} className="mt-6 flex items-center rounded-full bg-field p-1 pl-4">
              <label htmlFor="newsletter" className="sr-only">
                Email
              </label>
              <input
                id="newsletter"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSent(false);
                }}
                placeholder={sent ? "Thanks — you’re on the list!" : "Enter your email here..."}
                className="min-w-0 flex-1 bg-transparent text-base text-ink outline-none placeholder:text-ink-soft"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="grid size-11 shrink-0 place-items-center rounded-full bg-ink text-paper transition-transform hover:rotate-45"
              >
                <ArrowUpRight className="size-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-10 sm:grid-cols-3">
          {footerColumns.map((col) => (
            <Column key={col.title} title={col.title}>
              {col.links.map((l) => (
                <li key={l.label}>
                  <TransitionLink to={l.to} className="transition-colors hover:text-ink">
                    {l.label}
                  </TransitionLink>
                </li>
              ))}
              <li>
                <a href="mailto:info@gonomad.com" className="transition-colors hover:text-ink">
                  Contact Us
                </a>
              </li>
            </Column>
          ))}
          <Column title="Destinations">
            {footerInfo.destinations.map((x) => (
              <li key={x}>
                <TransitionLink to="/destination" className="transition-colors hover:text-ink">
                  {x}
                </TransitionLink>
              </li>
            ))}
          </Column>
          <Column title="Contact">
            {footerInfo.contact.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </Column>
        </div>

        <div className="mt-20 pb-10 text-sm text-ink-soft">
          <p>
            All rights reserved <span className="text-ink">©2026 GoNomad Inc.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
