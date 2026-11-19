import { Clock, Home, Soup, Users } from "lucide-react";

import { Reveal } from "@/app/components/common/Reveal";
import { SectionLabel } from "@/app/components/common/SectionLabel";
import { media } from "@/app/data/media";
import { inclusions } from "@/app/data/site";

const icons = { users: Users, clock: Clock, home: Home, meal: Soup };

function Item({ item }: { item: (typeof inclusions)[number] }) {
  const Icon = icons[item.icon];
  return (
    <article className="flex min-h-[305px] flex-col rounded-[22px] bg-sand p-5 transition-colors duration-500 hover:bg-sand-strong">
      <span className="grid size-11 place-items-center rounded-lg bg-background text-ink">
        <Icon className="size-5" strokeWidth={1.5} />
      </span>
      <div className="mt-auto">
        <h3 className="text-2xl tracking-tight text-ink">{item.title}</h3>
        <p className="mt-3 leading-relaxed text-ink-soft">{item.text}</p>
      </div>
    </article>
  );
}

export function PriceIncludes() {
  const [a, b, c, d] = inclusions;
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-20">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal className="flex flex-col gap-8">
            <SectionLabel>What’s in the price</SectionLabel>
            <h2 className="text-display text-ink">
              Pay once.
              <br />
              Then just go.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lead max-w-md text-ink-soft md:text-right">
              No surprises at the gate, no taxis to haggle, and no extra moments. Here’s what your
              booking covers.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-[1fr_1.45fr_1fr] lg:grid-rows-2">
          <Reveal>{a ? <Item item={a} /> : null}</Reveal>
          <Reveal delay={100} className="lg:row-span-2">
            <img
              src={media.coastBeach}
              alt="Traveler walking down to a sunset beach below palm-lined cliffs"
              loading="lazy"
              className="h-80 w-full rounded-[22px] object-cover lg:h-full"
            />
          </Reveal>
          <Reveal delay={200}>{b ? <Item item={b} /> : null}</Reveal>
          <Reveal>{c ? <Item item={c} /> : null}</Reveal>
          <Reveal delay={200}>{d ? <Item item={d} /> : null}</Reveal>
        </div>
      </div>
    </section>
  );
}