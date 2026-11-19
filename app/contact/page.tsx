import type { Metadata } from "next";

import { ContactSection } from "@/app/components/contact/ContactSection";
import { Faq } from "@/app/components/home/Faq";
import { FinalCta } from "@/app/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Contact GoNomad — Where to go?",
  description: "Tell us where you want to travel. Real people, real replies, usually within a day.",
  openGraph: {
    title: "Contact GoNomad — Where to go?",
    description: "Send a message, call, or email. We’ll help you pick the trip.",
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactSection />
      <Faq />
      <FinalCta />
    </>
  );
}
