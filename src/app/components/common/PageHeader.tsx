import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

/** Intro block for inner pages: label, big title, short copy and a wide photo. */
export function PageHeader({
  label,
  title,
  text,
  image,
  imageAlt,
}: {
  label: string;
  title: React.ReactNode;
  text: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="pt-40 md:pt-52">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 px-5 text-center">
        <Reveal>
          <SectionLabel>{label}</SectionLabel>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="text-display text-ink">{title}</h1>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-lead max-w-xl text-ink-soft">{text}</p>
        </Reveal>
      </div>
      <Reveal delay={200} className="mx-auto mt-16 max-w-[1440px] px-5 md:px-20">
        <img
          src={image}
          alt={imageAlt}
          className="h-[52vh] min-h-[320px] w-full rounded-[32px] object-cover"
        />
      </Reveal>
    </section>
  );
}