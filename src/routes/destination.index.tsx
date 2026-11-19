import { createFileRoute } from "@tanstack/react-router";

import { PlaceExplorer } from "@/app/components/destination/PlaceExplorer";

export const Route = createFileRoute("/destination/")({
  head: () => ({
    meta: [
      { title: "Places — Where next? | GoNomad" },
      {
        name: "description",
        content: "Pick a place. See the photo, then the small-group trips that start there.",
      },
      { property: "og:title", content: "Places — Where next? | GoNomad" },
      {
        property: "og:description",
        content: "Japan, Morocco, Patagonia, the Serengeti, and more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DestinationPage,
});

function DestinationPage() {
  return <PlaceExplorer />;
}
