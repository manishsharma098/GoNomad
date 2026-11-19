import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
  tone = "dark",
}: {
  children: string;
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={cn(
        "text-eyebrow inline-flex items-center gap-2",
        tone === "dark" ? "text-ink-soft" : "text-paper",
        className,
      )}
    >
      <span
        className={cn("size-1.5 rounded-full", tone === "dark" ? "bg-ink-soft" : "bg-paper")}
      />
      {children}
    </p>
  );
}

/** Section heading block: label + big title + supporting copy. */
export function SectionHeading({
  label,
  title,
  text,
  align = "center",
  tone = "dark",
  className,
}: {
  label: string;
  title: React.ReactNode;
  text?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <SectionLabel tone={tone}>{label}</SectionLabel>
      <h2 className={cn("text-display max-w-4xl", tone === "light" ? "text-paper" : "text-ink")}>
        {title}
      </h2>
      {text ? (
        <p
          className={cn(
            "text-lead max-w-xl",
            tone === "light" ? "text-paper-soft" : "text-ink-soft",
          )}
        >
          {text}
        </p>
      ) : null}
    </div>
  );
}