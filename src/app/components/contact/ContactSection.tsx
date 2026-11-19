import { ArrowUpRight, Mail, MapPin, Phone, Star } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";

import { Reveal } from "@/app/components/common/Reveal";
import { SectionHeading, SectionLabel } from "@/app/components/common/SectionLabel";
import { media } from "@/app/data/media";

const locations = [
  "Japan",
  "Peru",
  "Brazil",
  "Tanzania",
  "Bali",
  "Greece",
  "Morocco",
  "Not sure yet",
];

const groupSizes = ["1", "2", "3–4", "5–8", "9–12"];

const ways = [
  {
    icon: MapPin,
    label: "Office",
    value: "14 Harbour Lane, Bristol, UK",
    href: "https://www.google.com/maps/search/?api=1&query=14+Harbour+Lane,+Bristol,+UK",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 234 556-780",
    href: "tel:+1234556780",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@gonomad.com",
    href: "mailto:info@gonomad.com",
  },
];

const fieldClass =
  "w-full rounded-xl bg-field px-4 py-3.5 font-ui text-base text-ink outline-none transition-shadow placeholder:text-ink-soft focus:ring-2 focus:ring-ink/20";

export function ContactSection() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <>
      <section className="pt-40 md:pt-52">
        <div className="mx-auto grid max-w-[1440px] items-start gap-8 px-5 md:px-20 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col items-start gap-6">
              <Reveal>
                <SectionLabel>Get in Touch</SectionLabel>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="text-display text-ink">Where to go?</h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="text-lead max-w-xl text-ink-soft">
                  Whether you’ve got a trip in mind or just a rough idea of when you want to travel,
                  we’re here. Real people, real replies, usually within a day.
                </p>
              </Reveal>
            </div>

            <Reveal delay={180}>
              <article className="relative flex min-h-[280px] flex-col overflow-hidden rounded-[20px] bg-sand p-5">
                <div className="flex gap-1 text-star" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-5 fill-current" strokeWidth={0} />
                  ))}
                </div>
                <h2 className="mt-5 max-w-md text-2xl leading-snug tracking-tight text-ink">
                  I booked solo and left with new friends. Everything was handled from the moment I
                  landed.
                </h2>
                <div className="mt-auto flex items-end justify-between pt-10">
                  <div className="pb-2">
                    <p className="text-lg text-ink">Rachel M.</p>
                    <p className="mt-1 text-sm text-ink-soft">Patagonia Circuit · February 2026</p>
                  </div>
                  <div className="-mb-5 -mr-5 rounded-tl-[16px] bg-background p-2">
                    <img
                      src={media.rachel}
                      alt=""
                      loading="lazy"
                      className="size-[91px] rounded-[8px] object-cover"
                    />
                  </div>
                </div>
              </article>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="rounded-[20px] bg-sand p-6 md:p-8">
              <h2 className="text-2xl tracking-tight text-ink">Send us a message</h2>
              <p className="mt-2 text-ink-soft">
                We’ll get back to you shortly, usually within 5 to 6 hours.
              </p>

              {sent ? (
                <p className="mt-10 text-xl leading-snug tracking-tight text-ink">
                  Message sent. A real person will write back, usually within 5 to 6 hours.
                </p>
              ) : (
                <form className="mt-8 flex flex-col gap-5" onSubmit={onSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="First name">
                      <input
                        required
                        name="first_name"
                        autoComplete="given-name"
                        placeholder="Enter your first name"
                        className={fieldClass}
                      />
                    </Field>
                    <Field label="Last name">
                      <input
                        name="last_name"
                        autoComplete="family-name"
                        placeholder="Enter your last name"
                        className={fieldClass}
                      />
                    </Field>
                  </div>
                  <Field label="Phone number">
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="Enter your number"
                      className={fieldClass}
                    />
                  </Field>
                  <Field label="Email">
                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="Enter your email"
                      className={fieldClass}
                    />
                  </Field>
                  <Field label="Location of traveling">
                    <select name="location" defaultValue="" required className={fieldClass}>
                      <option value="" disabled>
                        Enter your location
                      </option>
                      {locations.map((place) => (
                        <option key={place} value={place}>
                          {place}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="How many people">
                    <select name="people" defaultValue="" required className={fieldClass}>
                      <option value="" disabled>
                        Enter people number
                      </option>
                      {groupSizes.map((size) => (
                        <option key={size} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Message">
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Enter your message"
                      className={`${fieldClass} resize-y`}
                    />
                  </Field>
                  <button
                    type="submit"
                    className="group inline-flex w-fit items-center gap-3 rounded-full bg-ink py-1 pl-4 pr-1 font-ui text-base font-medium text-paper transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <span>Send Message</span>
                    <span className="grid size-12 place-items-center rounded-full bg-paper text-ink transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight className="size-6" strokeWidth={1.75} />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-5 md:px-20">
          <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <SectionHeading
                align="left"
                label="contact way"
                title="Other Ways to Reach Us"
              />
            </Reveal>
            <Reveal delay={80}>
              <p className="text-lead max-w-xl text-ink-soft lg:pb-2">
                Some people like to write. Some like to talk. Either works for us. Email, phone, or
                a quick call whichever suits you best.
              </p>
            </Reveal>
          </div>

          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {ways.map((way, i) => (
              <Reveal as="li" key={way.label} delay={i * 80}>
                <a
                  href={way.href}
                  className="flex h-full flex-col gap-6 rounded-[16px] bg-sand p-6 transition-transform duration-300 hover:-translate-y-0.5"
                  {...(way.href.startsWith("http")
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  <span className="grid size-12 place-items-center rounded-[6px] bg-background text-ink">
                    <way.icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <span>
                    <span className="block text-2xl tracking-tight text-ink">{way.value}</span>
                    <span className="mt-2 block text-ink-soft">{way.label}</span>
                  </span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-eyebrow text-ink-soft">{label}</span>
      {children}
    </label>
  );
}
