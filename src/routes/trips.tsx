import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/app/components/common/PageHeader";
import { Faq } from "@/app/components/home/Faq";
import { FinalCta } from "@/app/components/home/FinalCta";
import { PriceIncludes } from "@/app/components/home/PriceIncludes";
import { DestinationTrips } from "@/app/components/destination/DestinationTrips";
import { media } from "@/app/data/media";

export const Route = createFileRoute("/trips")({
  head: () => ({
    meta: [
      { title: "Trips — Small-group tours | GoNomad" },
      {
        name: "description",
        content: "Browse small-group trips to Morocco, Utah, Yosemite, Patagonia and more. Twelve travelers max.",
      },
      { property: "og:title", content: "Trips — Small-group tours | GoNomad" },
      {
        property: "og:description",
        content: "Filter by country, sort by price or rating, and book your next small-group trip.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TripsPage,
});

function TripsPage() {
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
