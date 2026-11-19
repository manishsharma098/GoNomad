"use client";

import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";

import { Reveal } from "@/app/components/common/Reveal";
import { SectionHeading } from "@/app/components/common/SectionLabel";
import { TripCard } from "@/app/components/home/TripCard";
import { tripCategories, trips, type TripCategory } from "@/app/data/trips";
import { filterAndSortTrips, sortLabels, tripCountries, type TripSort } from "@/app/lib/trips";
import { cn } from "@/lib/utils";

const PAGE_SIZE = 6;

function PillSelect<T extends string>({
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
    <label className="relative inline-flex h-13 cursor-pointer items-center gap-2 rounded-full border border-sand-strong bg-sand px-5 font-ui text-base font-medium text-ink transition-colors hover:bg-sand-strong">
      <span className="sr-only">{label}</span>
      <span>{current}</span>
      <ChevronDown className="size-4" />
      <select
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

export function DestinationTrips({ embedded = false }: { embedded?: boolean }) {
  const [category, setCategory] = useState<TripCategory>("All");
  const [country, setCountry] = useState("All");
  const [sort, setSort] = useState<TripSort>("featured");
  const [page, setPage] = useState(1);

  const shown = useMemo(
    () => filterAndSortTrips(trips, country, sort, category),
    [country, sort, category],
  );
  const pageCount = Math.max(1, Math.ceil(shown.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount);
  const pageTrips = shown.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  function pickCategory(next: TripCategory) {
    setCategory(next);
    setPage(1);
  }

  function goToPage(next: number) {
    setPage(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section className={embedded ? "pb-24 md:pb-32" : "pt-40 pb-24 md:pt-52 md:pb-32"}>
      <div className="mx-auto max-w-[1440px] px-5 md:px-20">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          {embedded ? null : (
            <Reveal>
              <SectionHeading
                align="left"
                label="Trips"
                title="Find your next trip"
                text="Small-group trips with local guides. Pick a style, then open a trip for the full plan."
              />
            </Reveal>
          )}
          <Reveal delay={100} className="flex gap-3">
            <PillSelect
              label="Country"
              value={country}
              onChange={(value) => {
                setCountry(value);
                setPage(1);
              }}
              options={tripCountries(trips).map((c) => ({ value: c, label: c }))}
            />
            <PillSelect
              label="Sort trips"
              value={sort}
              onChange={(value) => {
                setSort(value);
                setPage(1);
              }}
              options={(Object.keys(sortLabels) as TripSort[]).map((k) => ({
                value: k,
                label: sortLabels[k],
              }))}
            />
          </Reveal>
        </div>

        <div className="mt-10 flex gap-2 overflow-x-auto pb-1">
          {tripCategories.map((item) => {
            const active = item === category;
            return (
              <button
                key={item}
                type="button"
                onClick={() => pickCategory(item)}
                className={cn(
                  "shrink-0 rounded-full px-4 py-2 font-ui text-sm font-medium transition-colors",
                  active ? "bg-ink text-paper" : "bg-sand text-ink hover:bg-sand-strong",
                )}
                aria-pressed={active}
              >
                {item}
              </button>
            );
          })}
        </div>

        <p className="mt-6 font-ui text-sm text-ink-soft">
          {shown.length} {shown.length === 1 ? "trip" : "trips"}
          {category !== "All" ? ` in ${category}` : ""}
        </p>

        {pageTrips.length === 0 ? (
          <p className="mt-16 text-2xl tracking-tight text-ink">No trips in this mix yet.</p>
        ) : (
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pageTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>
        )}

        {pageCount > 1 ? (
          <nav className="mt-12 flex items-center justify-center gap-2" aria-label="Trip pages">
            <PageButton
              label="Previous page"
              disabled={safePage === 1}
              onClick={() => goToPage(safePage - 1)}
            >
              <ChevronLeft className="size-4" />
            </PageButton>
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => goToPage(n)}
                aria-current={n === safePage ? "page" : undefined}
                className={cn(
                  "grid size-11 place-items-center rounded-full font-ui text-sm font-medium",
                  n === safePage ? "bg-ink text-paper" : "bg-sand text-ink hover:bg-sand-strong",
                )}
              >
                {n}
              </button>
            ))}
            <PageButton
              label="Next page"
              disabled={safePage === pageCount}
              onClick={() => goToPage(safePage + 1)}
            >
              <ChevronRight className="size-4" />
            </PageButton>
          </nav>
        ) : null}
      </div>
    </section>
  );
}

function PageButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string;
  disabled: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="grid size-11 place-items-center rounded-full bg-sand text-ink transition-colors hover:bg-sand-strong disabled:cursor-not-allowed disabled:opacity-40"
    >
      {children}
    </button>
  );
}
