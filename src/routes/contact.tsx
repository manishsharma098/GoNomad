import { createFileRoute } from "@tanstack/react-router";

import { ContactSection } from "@/app/components/contact/ContactSection";
import { Faq } from "@/app/components/home/Faq";
import { FinalCta } from "@/app/components/home/FinalCta";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact GoNomad — Where to go?" },
      {
        name: "description",
        content:
          "Tell us where you want to travel. Real people, real replies, usually within a day.",
      },
      { property: "og:title", content: "Contact GoNomad — Where to go?" },
      {
        property: "og:description",
        content: "Send a message, call, or email. We’ll help you pick the trip.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <ContactSection />
      <Faq />
      <FinalCta />
    </>
  );
}
