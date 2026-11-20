import { ChevronDown } from "lucide-react";

export function FilterSelect<T extends string>({
  value,
  options,
  onChange,
  label,
}: {
  value: T;
  options: { value: T; label: string }[];
  onChange: (v: T) => void;
  label: string;
}) {
  const current = options.find((o) => o.value === value)?.label ?? label;
  return (
    <label className="relative inline-flex h-10 shrink-0 cursor-pointer items-center gap-2 rounded-full bg-sand-strong px-4 font-ui text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-paper focus-within:ring-2 focus-within:ring-ink/25">
      <span className="sr-only">{label}</span>
      <span>{current}</span>
      <ChevronDown className="size-4" />
      <select
        aria-label={label}
        className="absolute inset-0 cursor-pointer opacity-0"
        value={value}
        onChange={(e) => onChange(e.target.value as T)}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
