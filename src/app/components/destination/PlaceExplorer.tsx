import { useEffect, useState } from "react";

import { TransitionLink } from "@/app/components/layout/PageTransition";
import { places } from "@/app/data/places";
import { trips } from "@/app/data/trips";
import { cn } from "@/lib/utils";

export function PlaceExplorer() {
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (hovering) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % places.length), 3200);
    return () => window.clearInterval(id);
  }, [hovering]);

  const place = places[active] ?? places[0];
  if (!place) return null;
  const here = trips.filter((trip) => trip.country === place.country);

  return (
    <section className="pt-44 pb-24 md:pt-56 md:pb-32">
      <div className="mx-auto grid max-w-[1440px] items-stretch gap-8 px-5 md:grid-cols-[0.85fr_1.15fr] md:px-20">
        <div className="order-2 md:order-1" onMouseLeave={() => setHovering(false)}>
          <p className="text-eyebrow text-ink-soft">Places</p>
          <h1 className="mt-4 text-display text-ink">Where next?</h1>
          <ul className="mt-8 flex flex-col">
            {places.map((item, i) => {
              const selected = i === active;
              return (
                <li
                  key={item.id}
                  onMouseEnter={() => {
                    setHovering(true);
                    setActive(i);
                  }}
                >
                  <TransitionLink
                    to="/destination/$tripId"
                    params={{ tripId: item.id }}
                    onNavigate={() => setActive(i)}
                    className={cn(
                      "block w-full border-t border-sand-strong py-2.5 text-left font-display text-2xl tracking-tight transition-colors md:text-3xl",
                      selected ? "text-ink" : "text-ink/35 hover:text-ink/70",
                    )}
                  >
                    {item.name}
                  </TransitionLink>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="relative order-1 min-h-[420px] overflow-hidden rounded-[32px] md:order-2 md:min-h-[640px]">
          {places.map((item, i) => (
            <img
              key={item.id}
              src={item.image}
              alt=""
              className={cn(
                "absolute inset-0 size-full object-cover transition-opacity duration-700",
                i === active ? "opacity-100" : "opacity-0",
              )}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
          <TransitionLink
            to="/destination/$tripId"
            params={{ tripId: place.id }}
            className="absolute inset-0 flex items-end p-6 transition-opacity hover:opacity-90 md:p-10"
          >
            <span>
              <span className="text-eyebrow text-paper">{place.name}</span>
              <span className="mt-3 block max-w-md text-2xl leading-snug tracking-tight text-paper">
                {place.line}
              </span>
            </span>
          </TransitionLink>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-[1440px] px-5 md:px-20">
        <p className="text-eyebrow text-ink-soft">Trips in {place.name}</p>
        <ul className="mt-4 divide-y divide-sand-strong border-y border-sand-strong">
          {here.map((trip) => (
            <li key={trip.id}>
              <TransitionLink
                to="/destination/$tripId"
                params={{ tripId: trip.id }}
                className="flex flex-col gap-2 py-5 transition-opacity hover:opacity-60 sm:flex-row sm:items-center sm:justify-between"
              >
                <span>
                  <span className="block text-2xl tracking-tight text-ink">{trip.title}</span>
                  <span className="mt-1 block text-sm text-ink-soft">
                    {trip.category} · {trip.days} days
                  </span>
                </span>
                <span className="font-ui text-lg text-ink">
                  ${trip.price.toLocaleString("en-US")}
                </span>
              </TransitionLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
