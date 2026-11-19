import { media } from "./media";

export type AppPath =
  "/" | "/about" | "/trips" | "/destination" | "/blog" | "/contact";

export const navLinks: { label: string; to: AppPath }[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Trips", to: "/trips" },
  { label: "Destination", to: "/destination" },
  { label: "Blog", to: "/blog" },
];

export const collagePhotos = [
  {
    src: media.yosemiteValley,
    alt: "Misty Yosemite valley at sunrise",
    rotate: 6,
  },
  {
    src: media.heroButte,
    alt: "Red sandstone butte under a blue sky",
    rotate: -6,
  },
  { src: media.seaStack, alt: "Sea stack in golden haze", rotate: 0 },
  {
    src: media.coastBeach,
    alt: "Sunset over a quiet coastal beach",
    rotate: 4,
  },
  {
    src: media.cypressCoast,
    alt: "Lone cypress above a rocky coast",
    rotate: -5,
  },
];

export const journeyStyles = [
  "Adventure",
  "Culture",
  "Beach",
  "Wildlife",
  "Food",
  "Hiking",
  "Sailing",
  "Wellness",
  "Photography",
  "Cycling",
  "History",
  "Road Trips",
];

export const destinations = [
  {
    id: "japan",
    place: "Mount Fuji",
    country: "Japan",
    image: media.mountFuji,
  },
  {
    id: "peru",
    place: "Rainbow Hill",
    country: "Peru",
    image: media.rainbowHill,
  },
  {
    id: "brazil",
    place: "Rio de Janeiro",
    country: "Brazil",
    image: media.rio,
  },
  {
    id: "tanzania",
    place: "Serengeti",
    country: "Tanzania",
    image: media.serengeti,
  },
];

export type { Trip, TripCategory, TripDay, TripTone } from "./trips";
export { findTrip, tripCategories, trips } from "./trips";

export const steps = [
  {
    n: "01",
    title: "Choose",
    text: "Browse by region, month, or activity. Each trip page shows the itinerary.",
    image: media.stepChoose,
  },
  {
    n: "02",
    title: "Reserve",
    text: "A 20% deposit secures your spot. The balance is due 60 days before departure.",
    image: media.stepReserve,
  },
  {
    n: "03",
    title: "Prepare",
    text: "Your pre-trip pack arrives: itinerary, packing list, guide bio, meeting point, and contacts.",
    image: media.stepPrepare,
  },
  {
    n: "04",
    title: "Go",
    text: "Meet your group and guide. Max twelve people, all logistics sorted, with 24/7 support.",
    image: media.stepGo,
  },
];

export const testimonials = [
  {
    quote:
      "It never felt like a tour. It felt like traveling with friends who happened to know everything — where to eat, which trail to take, when to stop talking and just look.",
    name: "Rachel M.",
    trip: "Patagonia Circuit · February 2026",
    photo: media.rachel,
  },
  {
    quote:
      "I booked solo and left with eleven new friends. Everything was handled from the moment I landed — I just had to show up and walk. Best money I’ve spent in years.",
    name: "Daniel K.",
    trip: "Atlas Foothills · March 2026",
    photo: media.daniel,
  },
];

export const raterAvatars = [media.avatar1, media.avatar2, media.avatar3];

export const videoReviews = [
  { src: media.video1, label: "Traveler review from the trail" },
  { src: media.video2, label: "Traveler review on the beach" },
  { src: media.video3, label: "Traveler review in the city" },
];

export const inclusions = [
  {
    icon: "users",
    title: "Someone who lives there",
    text: "Your guide is local, knows shortcuts, and stays with you from arrival to departure.",
  },
  {
    icon: "clock",
    title: "Every wheel and ticket",
    text: "Trains, ferries, and pickups are arranged and paid. Just get on.",
  },
  {
    icon: "home",
    title: "Rooms with a story",
    text: "Boutique guesthouses and family-run pensions chosen for character.",
  },
  {
    icon: "meal",
    title: "Meals worth remembering",
    text: "Breakfast and dinners an hour away. The rest is yours to explore.",
  },
] as const;

export const posts = [
  {
    tag: "Guide",
    date: "September 25, 2026",
    title: "Marrakech at Dusk: Where to Eat Before the Crowds",
    image: media.marrakech,
  },
  {
    tag: "Guide",
    date: "September 25, 2026",
    title: "Kyoto at Dawn: Where to Walk Before the Crowds",
    image: media.canyonRiver,
  },
  {
    tag: "Guide",
    date: "September 25, 2026",
    title: "What to Actually See in a Week in Nepal",
    image: media.monumentValley,
  },
];

export const faqs = [
  {
    q: "How big are the groups?",
    a: "Never more than twelve travelers, plus your local guide. Most departures run with eight to ten people.",
  },
  {
    q: "What’s included in the price?",
    a: "Your local guide, every night’s stay, all ground transport and tickets, breakfasts and most dinners. Flights to the start point are not included.",
  },
  {
    q: "How fit do I need to be?",
    a: "Each trip lists an activity level. If you can walk three to four hours a day at an easy pace, most of our trips will suit you.",
  },
  {
    q: "Can I book solo?",
    a: "Yes — around half of our travelers come alone. We pair solo travelers in shared rooms, or you can choose a private room.",
  },
  {
    q: "What’s the deposit and cancellation policy?",
    a: "A 20% deposit secures your spot and the balance is due 60 days before departure. Cancel earlier than that and your deposit moves to any future trip.",
  },
  {
    q: "Do you cater for dietary requirements?",
    a: "Always. Tell us when you book and your guide will plan every meal around it.",
  },
  {
    q: "What happens if a trip is cancelled?",
    a: "If we ever cancel a departure, you get a full refund or a free move to another date — your choice.",
  },
];

export const footerColumns = [
  {
    title: "Pages",
    links: [
      { label: "Home", to: "/" as AppPath },
      { label: "About", to: "/about" as AppPath },
      { label: "Trip", to: "/trips" as AppPath },
      { label: "Destination", to: "/destination" as AppPath },
      { label: "Blog", to: "/blog" as AppPath },
    ],
  },
];

export const footerInfo = {
  destinations: ["Japan", "Peru", "Brazil", "Tanzania", "Bali", "Greece"],
  contact: ["+123 (456) 789-0", "info@gonomad.com", "142 West 57th Street, NY"],
};
