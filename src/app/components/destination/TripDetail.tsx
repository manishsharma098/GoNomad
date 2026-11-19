import { ArrowButton } from "@/app/components/common/ArrowButton";
import { TransitionLink } from "@/app/components/layout/PageTransition";
import { findTrip } from "@/app/data/trips";

export function TripDetail({ tripId }: { tripId: string }) {
  const trip = findTrip(tripId);

  if (!trip) {
    return (
      <section className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center gap-6 px-5 pt-40">
        <h1 className="text-display text-ink">This trip isn’t on the list.</h1>
        <TransitionLink to="/destination" className="font-ui text-lg text-ink underline">
          Back to all trips
        </TransitionLink>
      </section>
    );
  }

  return (
    <article className="pt-36 pb-24 md:pt-44">
      <div className="mx-auto max-w-[1440px] px-5 md:px-20">
        <TransitionLink
          to="/destination"
          activeOptions={{ exact: true }}
          className="font-ui text-sm font-medium text-ink-soft transition-opacity hover:opacity-60"
        >
          All trips
        </TransitionLink>

        <div className="relative mt-6 flex min-h-[68vh] flex-col justify-end overflow-hidden rounded-[32px]">
          <img src={trip.image} alt="" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10" />
          <div className="relative p-6 md:p-12">
            <p className="text-eyebrow text-paper">
              {trip.category} · {trip.place}, {trip.country}
            </p>
            <h1 className="mt-4 max-w-3xl text-display text-paper">{trip.title}</h1>
            <p className="mt-4 max-w-xl text-lead text-paper-soft">{trip.description}</p>
          </div>
        </div>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <p className="text-lead text-ink">{trip.story}</p>

            <h2 className="mt-12 text-3xl tracking-tight text-ink">Highlights</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-3">
              {trip.highlights.map((item) => (
                <li key={item} className="rounded-[16px] bg-sand px-4 py-5 text-ink">
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 text-3xl tracking-tight text-ink">The days</h2>
            <ol className="mt-5 flex flex-col gap-3">
              {trip.daysPlan.map((day) => (
                <li key={day.label} className="rounded-[16px] bg-sand p-5">
                  <p className="text-eyebrow text-ink-soft">{day.label}</p>
                  <h3 className="mt-2 text-2xl tracking-tight text-ink">{day.title}</h3>
                  <p className="mt-2 text-ink-soft">{day.text}</p>
                </li>
              ))}
            </ol>

            <h2 className="mt-12 text-3xl tracking-tight text-ink">Included</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {trip.included.map((item) => (
                <li key={item} className="rounded-[16px] border border-sand-strong px-4 py-4 text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-[24px] bg-sand p-6 lg:sticky lg:top-32">
            <p className="font-display text-5xl font-medium tracking-[-0.04em] text-ink">
              ${trip.price.toLocaleString("en-US")}
            </p>
            <p className="mt-1 text-sm text-ink-soft">per person</p>
            <dl className="mt-6 flex flex-col gap-4 text-ink">
              <Fact label="Days" value={`${trip.days} days`} />
              <Fact label="Rating" value={trip.rating.toFixed(1)} />
              <Fact label="Group" value={trip.group} />
              <Fact label="Best time" value={trip.bestTime} />
              <Fact label="Fitness" value={trip.fitness} />
              <Fact label="Meet" value={trip.meeting} />
            </dl>
            <ArrowButton to="/contact" label="Plan this trip" className="mt-8" />
          </aside>
        </div>
      </div>
    </article>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-sand-strong pt-4">
      <dt className="text-eyebrow text-ink-soft">{label}</dt>
      <dd className="mt-1">{value}</dd>
    </div>
  );
}
