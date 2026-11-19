import type { Metadata } from "next";

import { AboutIntro } from "@/app/components/home/AboutIntro";
import { Destinations } from "@/app/components/home/Destinations";
import { Faq } from "@/app/components/home/Faq";
import { FinalCta } from "@/app/components/home/FinalCta";
import { Hero } from "@/app/components/home/Hero";
import { HowItWorks } from "@/app/components/home/HowItWorks";
import { Journal } from "@/app/components/home/Journal";
import { PriceIncludes } from "@/app/components/home/PriceIncludes";
import { SelectJourney } from "@/app/components/home/SelectJourney";
import { Testimonials } from "@/app/components/home/Testimonials";
import { TripsGrid } from "@/app/components/home/TripsGrid";
import { VideoReviews } from "@/app/components/home/VideoReviews";

export const metadata: Metadata = {
  title: "GoNomad — Travel Without Limits",
  description:
    "Private, low-impact escapes to the world’s most serene destinations, led by local experts in groups of twelve or fewer.",
  openGraph: {
    title: "GoNomad — Travel Without Limits",
    description: "Small-group trips in 40+ countries, led by local guides. Find your next trip.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutIntro />
      <SelectJourney />
      <Destinations />
      <TripsGrid limit={6} />
      <HowItWorks />
      <Testimonials />
      <VideoReviews />
      <PriceIncludes />
      <Journal />
      <Faq />
      <FinalCta />
    </>
  );
}
