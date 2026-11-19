import { Reveal } from "@/app/components/common/Reveal";
import { SectionHeading } from "@/app/components/common/SectionLabel";
import { TransitionLink } from "@/app/components/layout/PageTransition";
import { posts } from "@/app/data/site";

export function Journal() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-20">
        <Reveal>
          <SectionHeading
            label="Journal"
            title="Insights & News"
            text="Practical trip guides, honest destination notes, and the occasional story from a guide who’s been there a hundred times."
          />
        </Reveal>
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <TransitionLink to="/blog" className="group block">
                <div className="overflow-hidden rounded-[22px]">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="aspect-[413/500] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="text-eyebrow mt-5 flex justify-between text-ink-soft">
                  <span>{p.tag}</span>
                  <span>{p.date}</span>
                </div>
                <h3 className="mt-5 text-2xl leading-snug tracking-tight text-ink transition-opacity group-hover:opacity-70">
                  {p.title}
                </h3>
              </TransitionLink>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}