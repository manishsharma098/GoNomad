import type { Metadata } from "next";

import { PlaceDetail } from "@/app/components/destination/PlaceDetail";
import { TripDetail } from "@/app/components/destination/TripDetail";
import { findPlace } from "@/app/data/places";
import { findTrip } from "@/app/data/trips";

type Props = { params: Promise<{ tripId: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tripId } = await params;
  const place = findPlace(tripId);
  if (place) {
    return {
      title: `${place.name} | GoNomad`,
      description: place.intro,
      openGraph: { title: `${place.name} | GoNomad`, description: place.intro, type: "article" },
    };
  }
  const trip = findTrip(tripId);
  const title = trip ? `${trip.title} | GoNomad` : "Trip | GoNomad";
  const description = trip?.description ?? "A small-group trip with a local guide.";
  return {
    title,
    description,
    openGraph: { title, description, type: "article" },
  };
}

export default async function DestinationDetailPage({ params }: Props) {
  const { tripId } = await params;
  const place = findPlace(tripId);
  if (place) return <PlaceDetail place={place} />;
  return <TripDetail tripId={tripId} />;
}
