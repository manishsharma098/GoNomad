"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

import { Reveal } from "@/app/components/common/Reveal";
import { SectionHeading } from "@/app/components/common/SectionLabel";
import { faqs } from "@/app/data/site";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[846px] px-5">
        <Reveal>
          <SectionHeading
            label="FAQ"
            title={
              <>
                Frequently Asked
                <br />
                Question
              </>
            }
            text="Everything you need to know before you pick a trip. Still unsure? Talk to a real person — we reply within a day."
          />
        </Reveal>

        <ul className="mt-16 flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal as="li" key={f.q} delay={i * 50}>
                <div className="rounded-[20px] bg-sand transition-colors hover:bg-sand-strong/70">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center gap-4 p-4 text-left"
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-full bg-background font-mono text-xs text-ink">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-xl tracking-tight text-ink md:text-2xl">{f.q}</span>
                    <Plus
                      className={cn(
                        "size-6 shrink-0 text-ink transition-transform duration-500",
                        isOpen && "rotate-45",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-500 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <p className="overflow-hidden pl-20 pr-12 text-ink-soft">
                      <span className="block pb-6 leading-relaxed">{f.a}</span>
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
