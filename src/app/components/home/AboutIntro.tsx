import { ArrowButton } from "@/app/components/common/ArrowButton";
import { PhotoCollage } from "@/app/components/common/PhotoCollage";
import { Reveal } from "@/app/components/common/Reveal";
import { SectionLabel } from "@/app/components/common/SectionLabel";

export function AboutIntro({ showButton = true }: { showButton?: boolean }) {
  return (
    <section className="overflow-hidden py-24 md:py-32">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-5 text-center">
        <Reveal>
          <SectionLabel>About Us</SectionLabel>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="text-display mt-8 text-ink">
            We create unforgettable journeys that stay with you long after returning home.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={150}>
        <PhotoCollage className="mt-12" />
      </Reveal>

      <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center gap-10 px-5 text-center">
        <Reveal>
          <p className="text-lead text-ink">
            Every destination is curated to turn a map into a journey you’ll cherish. Fewer stops,
            longer stays, and local guides ensure memories last.
          </p>
        </Reveal>
        {showButton ? (
          <Reveal delay={100}>
            <ArrowButton to="/about" label="More About Us" />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}