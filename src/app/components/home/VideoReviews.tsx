"use client";

import { Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Reveal } from "@/app/components/common/Reveal";
import { SectionHeading } from "@/app/components/common/SectionLabel";
import { videoReviews } from "@/app/data/site";

function VideoCard({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(false);

  // Play only while on screen, pause when scrolled away.
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
    io.observe(v);
    return () => io.disconnect();
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  return (
    <div className="group relative overflow-hidden rounded-[24px] bg-sand">
      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="aspect-[413/528] w-full object-cover"
      />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause video" : "Play video"}
        className="absolute bottom-4 right-4 grid size-12 place-items-center rounded-full bg-paper/80 text-ink opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 focus-visible:opacity-100"
      >
        {playing ? <Pause className="size-5" /> : <Play className="size-5" />}
      </button>
    </div>
  );
}

export function VideoReviews() {
  return (
    <section className="pb-24 md:pb-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-20">
        <Reveal>
          <SectionHeading
            align="left"
            label="In Their Own Words"
            title={
              <>
                Hear It From the
                <br />
                Travelers Themselves
              </>
            }
            text="Written reviews tell you what people thought. These tell you how they felt. Short, unscripted, filmed on the trip — no prompts, no edits."
          />
        </Reveal>
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {videoReviews.map((v, i) => (
            <Reveal key={v.src} delay={i * 100}>
              <VideoCard src={v.src} label={v.label} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}