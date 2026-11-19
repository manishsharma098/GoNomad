import type { Metadata } from "next";

import { PageHeader } from "@/app/components/common/PageHeader";
import { DestinationTrips } from "@/app/components/destination/DestinationTrips";
import { Faq } from "@/app/components/home/Faq";
import { FinalCta } from "@/app/components/home/FinalCta";
import { PriceIncludes } from "@/app/components/home/PriceIncludes";
import { media } from "@/app/data/media";

export const metadata: Metadata = {
  title: "Trips — Small-group tours | GoNomad",
  description:
    "Browse small-group trips to Morocco, Utah, Yosemite, Patagonia and more. Twelve travelers max.",
  openGraph: {
    title: "Trips — Small-group tours | GoNomad",
    description: "Filter by country, sort by price or rating, and book your next small-group trip.",
  },
};

export default function TripsPage() {
  return (
    <>
      <PageHeader
        label="Trips"
        title="Every trip, one place"
        text="Local guides, small groups and everything handled. Filter by country or sort by price to find the one that fits."
        image={media.patagonia}
        imageAlt="Rock dome rising from a misty Patagonian beach"
      />
      <DestinationTrips embedded />
      <PriceIncludes />
      <Faq />
      <FinalCta />
    </>
  );
}
