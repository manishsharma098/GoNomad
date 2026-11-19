import type { Metadata } from "next";

import { PlaceExplorer } from "@/app/components/destination/PlaceExplorer";

export const metadata: Metadata = {
  title: "Places — Where next? | GoNomad",
  description: "Pick a place. See the photo, then the small-group trips that start there.",
  openGraph: {
    title: "Places — Where next? | GoNomad",
    description: "Japan, Morocco, Patagonia, the Serengeti, and more.",
  },
};

export default function DestinationPage() {
  return <PlaceExplorer />;
}
