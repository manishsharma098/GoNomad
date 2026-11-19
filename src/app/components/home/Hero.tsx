import { ArrowButton } from "@/app/components/common/ArrowButton";
import { TransitionLink } from "@/app/components/layout/PageTransition";
import { media } from "@/app/data/media";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <img
        src={media.heroButte}
        alt="Red sandstone butte rising above a forest at golden hour"
        className="absolute inset-0 size-full scale-105 object-cover animate-in fade-in zoom-in-110 duration-[1800ms]"
      />
      <div className="hero-scrim absolute inset-0" />

      <div className="relative z-10 flex max-w-5xl flex-col items-center px-5 pt-24 text-center">
        <h1 className="text-display-xl text-paper animate-in fade-in slide-in-from-bottom-8 duration-1000">
          Travel
          <br />
          Without Limits
        </h1>
        <p className="text-lead mt-8 max-w-2xl text-paper/90 animate-in fade-in slide-in-from-bottom-6 duration-1000 [animation-delay:200ms] [animation-fill-mode:backwards]">
          We curate private, low-impact escapes to the world’s most serene destinations. Tailored
          entirely to your rhythm, led by local experts.
        </p>
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 [animation-delay:400ms] [animation-fill-mode:backwards]">
          <ArrowButton to="/trips" label="Begin Your Journey" variant="light" />
          <TransitionLink
            to="/destination"
            className="inline-flex h-14 items-center rounded-full border border-paper/70 bg-ink/20 px-5 font-ui text-base font-medium text-paper backdrop-blur-md transition-colors hover:bg-paper/15"
          >
            Explore Destination
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}
