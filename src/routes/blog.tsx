import { createFileRoute } from "@tanstack/react-router";

import { PageHeader } from "@/app/components/common/PageHeader";
import { FinalCta } from "@/app/components/home/FinalCta";
import { Journal } from "@/app/components/home/Journal";
import { media } from "@/app/data/media";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — Travel guides & stories | GoNomad" },
      {
        name: "description",
        content: "Practical trip guides, honest destination notes and stories from our local guides.",
      },
      { property: "og:title", content: "Journal — Travel guides & stories | GoNomad" },
      {
        property: "og:description",
        content: "Where to eat, walk and slow down — written by guides who’ve been there a hundred times.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <>
      <PageHeader
        label="Journal"
        title="Insights & News"
        text="Practical trip guides, honest destination notes, and the occasional story from a guide who’s been there a hundred times."
        image={media.marrakech}
        imageAlt="Desert cactus and wildflowers before blue mountains"
      />
      <Journal />
      <FinalCta />
    </>
  );
}
