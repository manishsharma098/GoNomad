import { ArrowButton } from "@/app/components/common/ArrowButton";
import { PhotoCollage } from "@/app/components/common/PhotoCollage";
import { Reveal } from "@/app/components/common/Reveal";
import { SectionLabel } from "@/app/components/common/SectionLabel";

export function FinalCta() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-background to-sand pt-24 md:pt-32">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 px-5 text-center">
        <Reveal>
          <SectionLabel>Departures Filling Fast</SectionLabel>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-display text-ink">
            Your next trip is
            <br />
            already out there
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-lead max-w-xl text-ink-soft">
            Tell us where you’ve been dreaming of or let us suggest somewhere. Either way, we’ll take
            it from here.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <ArrowButton to="/trips" label="Begin Your Journey" />
        </Reveal>
      </div>
      <Reveal delay={150}>
        <PhotoCollage fade className="mt-10" />
      </Reveal>
    </section>
  );
}