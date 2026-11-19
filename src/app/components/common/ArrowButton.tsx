import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";
import type { AppPath } from "@/app/data/site";
import { TransitionLink } from "@/app/components/layout/PageTransition";

const styles = {
  dark: {
    shell: "bg-ink text-paper",
    dot: "bg-paper text-ink",
  },
  light: {
    shell: "bg-paper text-ink",
    dot: "bg-ink text-paper",
  },
};

/** Pill button with the round arrow badge on the right, as on the original site. */
export function ArrowButton({
  to,
  label,
  variant = "dark",
  className,
}: {
  to: AppPath;
  label: string;
  variant?: "dark" | "light";
  className?: string;
}) {
  const s = styles[variant];
  return (
    <TransitionLink
      to={to}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full py-1 pl-4 pr-1 font-ui text-base font-medium transition-transform duration-300 hover:-translate-y-0.5",
        s.shell,
        className,
      )}
    >
      <span>{label}</span>
      <span
        className={cn(
          "grid size-12 place-items-center rounded-full transition-transform duration-500 group-hover:rotate-45",
          s.dot,
        )}
      >
        <ArrowUpRight className="size-6" strokeWidth={1.75} />
      </span>
    </TransitionLink>
  );
}