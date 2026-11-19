"use client";

import { useEffect, useState } from "react";

import { Reveal } from "@/app/components/common/Reveal";
import { SectionHeading } from "@/app/components/common/SectionLabel";
import { media } from "@/app/data/media";
import { journeyStyles } from "@/app/data/site";
import { cn } from "@/lib/utils";

const journeyBackgrounds = [
  media.patagonia,
  media.mountFuji,
  media.coastBeach,
  media.serengeti,
  media.marrakech,
  media.yosemiteValley,
  media.seaStack,
  media.rainbowHill,
  media.monumentValley,
  media.sierraGranite,
  media.heroButte,
  media.desertDune,
];

/** Big blurred word cloud — one travel style comes into focus at a time (or on hover). */
export function SelectJourney() {
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (hovering) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % journeyStyles.length), 1800);
    return () => window.clearInterval(id);
  }, [hovering]);

  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      {journeyBackgrounds.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className={cn(
            "absolute inset-0 size-full object-cover transition-opacity duration-700",
            active === i ? "opacity-100" : "opacity-0",
          )}
        />
      ))}
      <div className="absolute inset-0 bg-ink/25" />

      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <SectionHeading
            tone="light"
            label="Curated by Experience"
            title="Select your journey."
            text="Every trip starts with a question: how do you want to feel? From retreats to expeditions, find your travel style."
          />
        </Reveal>

        <ul
          className="mx-auto mt-16 flex max-w-5xl flex-wrap items-baseline justify-center gap-x-4 gap-y-2 md:gap-x-6"
          onMouseLeave={() => setHovering(false)}
        >
          {journeyStyles.map((s, i) => (
            <li key={s} className="flex items-baseline gap-2">
              <button
                type="button"
                onMouseEnter={() => {
                  setHovering(true);
                  setActive(i);
                }}
                onFocus={() => setActive(i)}
                className={cn(
                  "font-display text-[clamp(2.25rem,5.5vw,4.75rem)] font-medium leading-[1.1] tracking-[-0.04em] text-paper transition-all duration-700",
                  active === i ? "blur-0 opacity-100" : "opacity-60 blur-[6px]",
                )}
              >
                {s}
              </button>
              <span
                className={cn(
                  "font-mono text-xs text-paper transition-all duration-700",
                  active === i ? "opacity-100" : "opacity-40 blur-[3px]",
                )}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {i < journeyStyles.length - 1 ? (
                <span className="text-paper/40 blur-[2px]" aria-hidden="true">
                  ·
                </span>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}