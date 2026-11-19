import { Reveal } from "@/app/components/common/Reveal";
import { SectionHeading } from "@/app/components/common/SectionLabel";
import { steps } from "@/app/data/site";

/** Cards stick and stack on top of each other while you scroll. */
export function HowItWorks() {
  return (
    <section className="bg-sand py-24 md:py-32">
      <div className="mx-auto max-w-[1064px] px-5">
        <Reveal>
          <SectionHeading
            label="How It Works"
            title={
              <>
                Four Steps From
                <br />
                Browsing to Boarding
              </>
            }
            text="120+ small-group trips in 40+ countries, led by local guides and limited to twelve travelers."
          />
        </Reveal>

        <div className="mt-20 flex flex-col gap-8">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="sticky"
              style={{ top: `calc(7rem + ${i * 1.5}rem)` }}
            >
              <article className="grid min-h-[520px] gap-4 rounded-[32px] bg-background p-4 shadow-[var(--shadow-soft)] md:grid-cols-2 md:p-4">
                <div className="flex flex-col justify-between p-4 md:p-6">
                  <p className="font-display text-5xl font-medium tracking-[-0.04em] text-ink">{s.n}</p>
                  <div className="mt-16">
                    <h3 className="text-3xl tracking-tight text-ink">{s.title}</h3>
                    <p className="text-lead mt-5 max-w-sm text-ink-soft">{s.text}</p>
                  </div>
                </div>
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  className="h-72 w-full rounded-[22px] object-cover md:h-full"
                />
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}