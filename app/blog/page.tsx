import type { Metadata } from "next";

import { PageHeader } from "@/app/components/common/PageHeader";
import { FinalCta } from "@/app/components/home/FinalCta";
import { Journal } from "@/app/components/home/Journal";
import { media } from "@/app/data/media";

export const metadata: Metadata = {
  title: "Journal — Travel guides & stories | GoNomad",
  description: "Practical trip guides, honest destination notes and stories from our local guides.",
  openGraph: {
    title: "Journal — Travel guides & stories | GoNomad",
    description:
      "Where to eat, walk and slow down — written by guides who’ve been there a hundred times.",
  },
};

export default function BlogPage() {
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
