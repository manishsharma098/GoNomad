"use client";

import { useState, type FormEvent, type ReactNode } from "react";

import { TransitionLink } from "@/app/components/layout/PageTransition";
import { type Place } from "@/app/data/places";
import { trips } from "@/app/data/trips";

const fieldClass =
  "w-full rounded-xl bg-background px-4 py-3.5 font-ui text-base text-ink outline-none transition-shadow placeholder:text-ink-soft focus:ring-2 focus:ring-ink/20";

export function PlaceDetail({ place }: { place: Place }) {
  const here = trips.filter((trip) => trip.country === place.country);
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <article className="pt-40 pb-24 md:pt-48">
      <div className="mx-auto max-w-[1440px] px-5 md:px-20">
        <TransitionLink
          to="/destination"
          activeOptions={{ exact: true }}
          className="font-ui text-sm font-medium text-ink-soft transition-opacity hover:opacity-60"
        >
          All places
        </TransitionLink>

        <div className="mt-8 grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="text-eyebrow text-ink-soft">Destination Details</p>
            <h1 className="mt-4 text-display text-ink">{place.name}</h1>
            <p className="text-lead mt-5 max-w-xl text-ink-soft">{place.intro}</p>
            <dl className="mt-8 grid grid-cols-3 gap-3 border-t border-sand-strong pt-6">
              <Fact label="Region" value={place.region} />
              <Fact label="Pace" value={place.pace} />
              <Fact label="Best season" value={place.season} />
            </dl>
          </div>
          <div className="h-[320px] overflow-hidden rounded-[32px] md:h-[460px]">
            <img src={place.image} alt="" className="size-full object-cover" />
          </div>
        </div>

        <div className="mt-16 flex max-w-3xl flex-col gap-12">
          <Block title="About this destination">
            {place.about.map((paragraph) => (
              <p key={paragraph} className="text-lead text-ink-soft">
                {paragraph}
              </p>
            ))}
          </Block>
          <Block title="Why go with us">
            <p className="text-lead text-ink-soft">{place.why}</p>
          </Block>
          <Block title="Good to know">
            <p className="text-lead text-ink-soft">{place.goodToKnow}</p>
          </Block>
          <Block title="The pace">
            {place.paceNotes.map((paragraph) => (
              <p key={paragraph} className="text-lead text-ink-soft">
                {paragraph}
              </p>
            ))}
          </Block>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          <article className="flex items-center gap-5 rounded-[24px] bg-sand p-6">
            <img
              src={place.guide.photo}
              alt=""
              className="size-16 shrink-0 rounded-full object-cover"
            />
            <div>
              <p className="font-ui text-xl font-medium text-ink">{place.guide.name}</p>
              <p className="mt-1 text-ink-soft">{place.guide.bio}</p>
            </div>
          </article>

          <form onSubmit={onSubmit} className="flex flex-col gap-4 rounded-[24px] bg-sand p-6">
            <div>
              <h2 className="text-2xl tracking-tight text-ink">Send us a message</h2>
              <p className="mt-1 text-sm text-ink-soft">We’ll respond within 5 to 6 hours.</p>
            </div>
            {sent ? (
              <p className="text-lead text-ink">Message sent. A real person will write back.</p>
            ) : (
              <>
                <label className="flex flex-col gap-2">
                  <span className="text-eyebrow text-ink-soft">Email</span>
                  <input type="email" name="email" required placeholder="Enter your email" className={fieldClass} />
                </label>
                <label className="flex flex-col gap-2">
                  <span className="text-eyebrow text-ink-soft">Anything we should know?</span>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Anything we should know?"
                    className={fieldClass}
                  />
                </label>
                <button
                  type="submit"
                  className="w-fit rounded-full bg-ink px-6 py-3 font-ui text-sm font-medium text-paper transition-opacity hover:opacity-80"
                >
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>

        {here.length > 0 ? (
          <div className="mt-16">
            <p className="text-eyebrow text-ink-soft">Trips in {place.name}</p>
            <h2 className="mt-3 text-display text-ink">Ways to see it</h2>
            <ul className="mt-6 divide-y divide-sand-strong border-y border-sand-strong">
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
                    <span className="font-ui text-lg text-ink">${trip.price.toLocaleString("en-US")}</span>
                  </TransitionLink>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </article>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-eyebrow text-ink-soft">{label}</dt>
      <dd className="mt-2 font-ui text-lg tracking-tight text-ink md:text-xl">{value}</dd>
    </div>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-3xl tracking-tight text-ink">{title}</h2>
      {children}
    </section>
  );
}
