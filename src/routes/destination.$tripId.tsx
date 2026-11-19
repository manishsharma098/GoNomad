import { createFileRoute } from "@tanstack/react-router";

import { PlaceDetail } from "@/app/components/destination/PlaceDetail";
import { TripDetail } from "@/app/components/destination/TripDetail";
import { findPlace } from "@/app/data/places";
import { findTrip } from "@/app/data/trips";

export const Route = createFileRoute("/destination/$tripId")({
  head: ({ params }) => {
    const place = findPlace(params.tripId);
    if (place) {
      const title = `${place.name} | GoNomad`;
      const description = place.intro;
      return {
        meta: [
          { title },
          { name: "description", content: description },
          { property: "og:title", content: title },
          { property: "og:description", content: description },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ],
      };
    }
    const trip = findTrip(params.tripId);
    const title = trip ? `${trip.title} | GoNomad` : "Trip | GoNomad";
    const description = trip?.description ?? "A small-group trip with a local guide.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: TripPage,
});

function TripPage() {
  const { tripId } = Route.useParams();
  const place = findPlace(tripId);
  if (place) return <PlaceDetail place={place} />;
  return <TripDetail tripId={tripId} />;
}
