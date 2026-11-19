import { Star } from "lucide-react";

import type { Trip, TripTone } from "@/app/data/site";
import { TransitionLink } from "@/app/components/layout/PageTransition";
import { cn } from "@/lib/utils";

const toneClasses: Record<TripTone, string> = {
  olive: "from-trip-olive via-trip-olive/80",
  rust: "from-trip-rust via-trip-rust/80",
  amber: "from-trip-amber via-trip-amber/80",
  moss: "from-trip-moss via-trip-moss/80",
  earth: "from-trip-earth via-trip-earth/80",
  navy: "from-trip-navy via-trip-navy/80",
};

const toneBg: Record<TripTone, string> = {
  olive: "bg-trip-olive",
  rust: "bg-trip-rust",
  amber: "bg-trip-amber",
  moss: "bg-trip-moss",
  earth: "bg-trip-earth",
  navy: "bg-trip-navy",
};

export function TripCard({ trip }: { trip: Trip }) {
  return (
    <article
      className={cn(
        "group relative flex min-h-[600px] flex-col overflow-hidden rounded-[24px] md:min-h-[630px]",
        toneBg[trip.tone],
      )}
    >
      <img
        src={trip.image}
        alt={trip.title}
        loading="lazy"
        className="absolute inset-x-0 top-0 h-[78%] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
      />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-35% via-50% to-transparent to-75%",
          toneClasses[trip.tone],
        )}
      />

      <div className="relative flex items-center justify-between p-6">
        <div className="flex gap-2">
          {[trip.country, `${trip.days} Days`].map((t) => (
            <span key={t} className="text-eyebrow rounded-full bg-paper px-3 py-1.5 text-ink">
              {t}
            </span>
          ))}
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-paper px-3 py-1.5 font-mono text-xs text-ink">
          <Star className="size-3.5 fill-ink" strokeWidth={0} />
          {trip.rating.toFixed(1)}
        </span>
      </div>

      <div className="relative mt-auto p-6">
        <p className="flex items-baseline gap-1 text-paper">
          <span className="font-display text-5xl font-medium tracking-[-0.04em]">
            ${trip.price.toLocaleString("en-US")}
          </span>
          <span className="text-sm text-paper-soft">/per person</span>
        </p>
        <h3 className="mt-5 text-2xl tracking-tight text-paper">{trip.title}</h3>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-paper-soft">{trip.description}</p>
        <TransitionLink
          to="/destination/$tripId"
          params={{ tripId: trip.id }}
          className="mt-6 flex h-11 items-center justify-center rounded-full bg-paper font-ui font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5"
        >
          See this trip
        </TransitionLink>
      </div>
    </article>
  );
}