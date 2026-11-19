import { collagePhotos } from "@/app/data/site";
import { cn } from "@/lib/utils";

/** Row of tilted, framed photos that drifts from right to left. */
export function PhotoCollage({ fade = false, className }: { fade?: boolean; className?: string }) {
  const loop = [...collagePhotos, ...collagePhotos];

  return (
    <div className={cn("marquee relative w-full overflow-hidden py-10", className)}>
      <div className="marquee-track flex w-max items-center">
        {loop.map((p, i) => (
          <div
            key={`${p.src}-${i}`}
            className="group -mx-2 shrink-0 rounded-[22px] bg-sand p-2 shadow-[var(--shadow-soft)] transition-transform duration-700 ease-out hover:z-10 hover:scale-[1.03]"
            style={{
              transform: `rotate(${p.rotate}deg)`,
              zIndex: i % collagePhotos.length === 2 ? 2 : 1,
            }}
          >
            <img
              src={p.src}
              alt={p.alt}
              loading="lazy"
              className={cn(
                "aspect-square w-[62vw] rounded-[16px] object-cover sm:w-[44vw] lg:w-[28vw] xl:w-[400px]",
                fade && "fade-bottom",
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}