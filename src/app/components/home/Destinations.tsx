import { ArrowUpRight } from "lucide-react";

import { Reveal } from "@/app/components/common/Reveal";
import { SectionHeading } from "@/app/components/common/SectionLabel";
import { destinations } from "@/app/data/site";
import { TransitionLink } from "@/app/components/layout/PageTransition";

function DestinationCard({ d }: { d: (typeof destinations)[number] }) {
  return (
    <TransitionLink
      to="/destination/$tripId"
      params={{ tripId: d.id }}
      aria-label={`${d.place}, ${d.country}`}
      className="group relative block h-[460px] w-[300px] shrink-0 overflow-hidden rounded-[28px] md:h-[620px] md:w-[412px]"
    >
      <img
        src={d.image}
        alt=""
        loading="lazy"
        className="absolute inset-0 size-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
      <span className="absolute top-5 right-5 grid size-11 place-items-center rounded-full bg-paper text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <ArrowUpRight className="size-5" />
      </span>
      <div className="absolute inset-x-6 bottom-6 translate-y-2 transition-transform duration-500 group-hover:translate-y-0">
        <p className="text-lg text-paper/85">{d.place}</p>
        <h3 className="mt-1 font-ui text-3xl font-semibold tracking-tight text-paper">{d.country}</h3>
      </div>
    </TransitionLink>
  );
}

export function Destinations() {
  const loop = [...destinations, ...destinations];
  return (
    <section className="overflow-hidden py-24 md:py-32">
      <Reveal className="px-5">
        <SectionHeading
          label="Curated Escapes"
          title="Places to slow down for"
          text="A handpicked selection of the world’s most extraordinary destinations from ancient coastal villages to untouched alpine frontiers."
        />
      </Reveal>

      <Reveal delay={150} className="marquee mt-16">
        <div className="marquee-track flex w-max gap-5">
          {loop.map((d, i) => (
            <DestinationCard key={`${d.place}-${i}`} d={d} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
