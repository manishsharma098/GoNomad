import { cn } from "@/lib/utils";

const logoSrc = "/GoNomad%20Flight%20Pin%20Logo.png";

export function LogoMark({ className }: { className?: string }) {
  return (
    <span className={cn("grid size-9 shrink-0 overflow-hidden rounded-full", className)}>
      <img src={logoSrc} alt="" className="size-full origin-center scale-[1.48] object-cover" />
    </span>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return <span className={cn("font-ui text-[1.9rem] font-medium tracking-tight", className)}>GoNomad</span>;
}
