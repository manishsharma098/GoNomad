import { Star } from "lucide-react";

import { Reveal } from "@/app/components/common/Reveal";
import { SectionHeading } from "@/app/components/common/SectionLabel";
import { media } from "@/app/data/media";
import { raterAvatars, testimonials } from "@/app/data/site";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-20">
        <Reveal>
          <SectionHeading
            align="left"
            label="Testimonial"
            title={
              <>
                Satisfied &amp; happy
                <br />
                travelers
              </>
            }
            text="Unedited reviews from travelers who’ve been on our trips. 4.9 stars across 12,000+ journeys."
          />
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          <Reveal>
            <article className="relative flex min-h-[540px] flex-col overflow-hidden rounded-[24px] p-5">
              <img
                src={media.monumentValley}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute inset-0 size-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-trip-rust via-trip-rust/40 to-transparent" />
              <div className="relative flex items-center gap-4">
                <div className="flex -space-x-3">
                  {raterAvatars.map((a) => (
                    <img
                      key={a}
                      src={a}
                      alt=""
                      className="size-12 rounded-full border-2 border-paper object-cover"
                    />
                  ))}
                </div>
                <div>
                  <p className="font-ui text-2xl font-semibold text-paper">21k+</p>
                  <p className="text-sm text-paper-soft">travelers have rated us</p>
                </div>
              </div>
              <div className="relative mt-auto">
                <p className="font-display text-6xl font-medium tracking-[-0.04em] text-paper">5.0</p>
                <p className="text-eyebrow mt-2 text-paper">Overall rating</p>
                <p className="mt-10 text-xl leading-snug text-paper">
                  Every review comes from a traveler who’s completed a GoNomad trip. No incentives,
                  no edits — just what they said when they got home.
                </p>
              </div>
            </article>
          </Reveal>

          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i + 1) * 100}>
              <article className="relative flex min-h-[540px] flex-col overflow-hidden rounded-[24px] bg-sand p-5">
                <div className="flex gap-1 text-star">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="size-6 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <p className="mt-5 text-2xl leading-snug tracking-tight text-ink">{t.quote}</p>
                <div className="mt-auto flex items-end justify-between">
                  <div className="pb-2">
                    <p className="text-lg text-ink">{t.name}</p>
                    <p className="mt-1 text-sm text-ink-soft">{t.trip}</p>
                  </div>
                  <div className="-mb-5 -mr-5 rounded-tl-[22px] bg-background p-2">
                    <img src={t.photo} alt={t.name} loading="lazy" className="size-24 rounded-[16px] object-cover" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
