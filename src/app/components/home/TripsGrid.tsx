"use client";

import { ChevronDown } from "lucide-react";
import { useMemo, useState } from "react";

import { Reveal } from "@/app/components/common/Reveal";
import { SectionHeading } from "@/app/components/common/SectionLabel";
import { trips } from "@/app/data/site";
import { filterAndSortTrips, sortLabels, tripCountries, type TripSort } from "@/app/lib/trips";
import { TripCard } from "./TripCard";

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

export function TripsGrid({ limit }: { limit?: number }) {
  const [country, setCountry] = useState("All");
  const [sort, setSort] = useState<TripSort>("featured");

  const shown = useMemo(() => {
    const list = filterAndSortTrips(trips, country, sort);
    return limit ? list.slice(0, limit) : list;
  }, [country, sort, limit]);

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-[1440px] px-5 md:px-20">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading
              align="left"
              label="Trips"
              title="Find your next trip"
              text="120+ small-group trips in 40+ countries, led by local guides and limited to twelve travelers."
            />
          </Reveal>
          <Reveal delay={100} className="flex gap-3">
            <PillSelect
              label="Country"
              value={country}
              onChange={setCountry}
              options={tripCountries(trips).map((c) => ({ value: c, label: c }))}
            />
            <PillSelect
              label="Sort trips"
              value={sort}
              onChange={setSort}
              options={(Object.keys(sortLabels) as TripSort[]).map((k) => ({
                value: k,
                label: sortLabels[k],
              }))}
            />
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {shown.map((t, i) => (
            <Reveal key={t.id} delay={(i % 3) * 100}>
              <TripCard trip={t} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}