import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as media, r as cn } from "./PageTransition-Dkti0fsL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-II7hFHQt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var navLinks = [
	{
		label: "Home",
		to: "/"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Trips",
		to: "/trips"
	},
	{
		label: "Destination",
		to: "/destination"
	},
	{
		label: "Blog",
		to: "/blog"
	}
];
var collagePhotos = [
	{
		src: media.yosemiteValley,
		alt: "Misty Yosemite valley at sunrise",
		rotate: 6
	},
	{
		src: media.heroButte,
		alt: "Red sandstone butte under a blue sky",
		rotate: -6
	},
	{
		src: media.seaStack,
		alt: "Sea stack in golden haze",
		rotate: 0
	},
	{
		src: media.coastBeach,
		alt: "Sunset over a quiet coastal beach",
		rotate: 4
	},
	{
		src: media.cypressCoast,
		alt: "Lone cypress above a rocky coast",
		rotate: -5
	}
];
var journeyStyles = [
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
	"Road Trips"
];
var destinations = [
	{
		id: "japan",
		place: "Mount Fuji",
		country: "Japan",
		image: media.mountFuji
	},
	{
		id: "peru",
		place: "Rainbow Hill",
		country: "Peru",
		image: media.rainbowHill
	},
	{
		id: "brazil",
		place: "Rio de Janeiro",
		country: "Brazil",
		image: media.rio
	},
	{
		id: "tanzania",
		place: "Serengeti",
		country: "Tanzania",
		image: media.serengeti
	}
];
var steps = [
	{
		n: "01",
		title: "Choose",
		text: "Browse by region, month, or activity. Each trip page shows the itinerary.",
		image: media.stepChoose
	},
	{
		n: "02",
		title: "Reserve",
		text: "A 20% deposit secures your spot. The balance is due 60 days before departure.",
		image: media.stepReserve
	},
	{
		n: "03",
		title: "Prepare",
		text: "Your pre-trip pack arrives: itinerary, packing list, guide bio, meeting point, and contacts.",
		image: media.stepPrepare
	},
	{
		n: "04",
		title: "Go",
		text: "Meet your group and guide. Max twelve people, all logistics sorted, with 24/7 support.",
		image: media.stepGo
	}
];
var testimonials = [{
	quote: "It never felt like a tour. It felt like traveling with friends who happened to know everything — where to eat, which trail to take, when to stop talking and just look.",
	name: "Rachel M.",
	trip: "Patagonia Circuit · February 2026",
	photo: media.rachel
}, {
	quote: "I booked solo and left with eleven new friends. Everything was handled from the moment I landed — I just had to show up and walk. Best money I’ve spent in years.",
	name: "Daniel K.",
	trip: "Atlas Foothills · March 2026",
	photo: media.daniel
}];
var raterAvatars = [
	media.avatar1,
	media.avatar2,
	media.avatar3
];
var videoReviews = [
	{
		src: media.video1,
		label: "Traveler review from the trail"
	},
	{
		src: media.video2,
		label: "Traveler review on the beach"
	},
	{
		src: media.video3,
		label: "Traveler review in the city"
	}
];
var inclusions = [
	{
		icon: "users",
		title: "Someone who lives there",
		text: "Your guide is local, knows shortcuts, and stays with you from arrival to departure."
	},
	{
		icon: "clock",
		title: "Every wheel and ticket",
		text: "Trains, ferries, and pickups are arranged and paid. Just get on."
	},
	{
		icon: "home",
		title: "Rooms with a story",
		text: "Boutique guesthouses and family-run pensions chosen for character."
	},
	{
		icon: "meal",
		title: "Meals worth remembering",
		text: "Breakfast and dinners an hour away. The rest is yours to explore."
	}
];
var posts = [
	{
		tag: "Guide",
		date: "September 25, 2026",
		title: "Marrakech at Dusk: Where to Eat Before the Crowds",
		image: media.marrakech
	},
	{
		tag: "Guide",
		date: "September 25, 2026",
		title: "Kyoto at Dawn: Where to Walk Before the Crowds",
		image: media.canyonRiver
	},
	{
		tag: "Guide",
		date: "September 25, 2026",
		title: "What to Actually See in a Week in Nepal",
		image: media.monumentValley
	}
];
var faqs = [
	{
		q: "How big are the groups?",
		a: "Never more than twelve travelers, plus your local guide. Most departures run with eight to ten people."
	},
	{
		q: "What’s included in the price?",
		a: "Your local guide, every night’s stay, all ground transport and tickets, breakfasts and most dinners. Flights to the start point are not included."
	},
	{
		q: "How fit do I need to be?",
		a: "Each trip lists an activity level. If you can walk three to four hours a day at an easy pace, most of our trips will suit you."
	},
	{
		q: "Can I book solo?",
		a: "Yes — around half of our travelers come alone. We pair solo travelers in shared rooms, or you can choose a private room."
	},
	{
		q: "What’s the deposit and cancellation policy?",
		a: "A 20% deposit secures your spot and the balance is due 60 days before departure. Cancel earlier than that and your deposit moves to any future trip."
	},
	{
		q: "Do you cater for dietary requirements?",
		a: "Always. Tell us when you book and your guide will plan every meal around it."
	},
	{
		q: "What happens if a trip is cancelled?",
		a: "If we ever cancel a departure, you get a full refund or a free move to another date — your choice."
	}
];
var footerColumns = [{
	title: "Pages",
	links: [
		{
			label: "Home",
			to: "/"
		},
		{
			label: "About",
			to: "/about"
		},
		{
			label: "Trip",
			to: "/trips"
		},
		{
			label: "Destination",
			to: "/destination"
		},
		{
			label: "Blog",
			to: "/blog"
		}
	]
}];
var footerInfo = {
	destinations: [
		"Japan",
		"Peru",
		"Brazil",
		"Tanzania",
		"Bali",
		"Greece"
	],
	contact: [
		"+123 (456) 789-0",
		"info@gonomad.com",
		"142 West 57th Street, NY"
	]
};
/** Fades + un-blurs its children the first time they scroll into view. */
function Reveal({ children, className, delay = 0, as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	const [visible, setVisible] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver((entries) => {
			if (entries.some((e) => e.isIntersecting)) {
				setVisible(true);
				io.disconnect();
			}
		}, { rootMargin: "0px 0px -8% 0px" });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: cn("reveal", className),
		"data-visible": visible,
		style: { "--reveal-delay": `${delay}ms` },
		children
	});
}
//#endregion
export { footerColumns as a, journeyStyles as c, raterAvatars as d, steps as f, faqs as i, navLinks as l, videoReviews as m, collagePhotos as n, footerInfo as o, testimonials as p, destinations as r, inclusions as s, Reveal as t, posts as u };
