import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as media, n as TransitionLink, r as cn } from "./PageTransition-Dkti0fsL.mjs";
import { s as inclusions, t as Reveal } from "./Reveal-II7hFHQt.mjs";
import { i as Soup, m as Clock, n as Users, p as House, r as Star } from "../_libs/lucide-react.mjs";
import { i as SectionLabel } from "./FinalCta-BYCIocI0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/TripCard-D9JLqLj0.js
var import_jsx_runtime = require_jsx_runtime();
var icons = {
	users: Users,
	clock: Clock,
	home: House,
	meal: Soup
};
function Item({ item }) {
	const Icon = icons[item.icon];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex min-h-[305px] flex-col rounded-[22px] bg-sand p-5 transition-colors duration-500 hover:bg-sand-strong",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "grid size-11 place-items-center rounded-lg bg-background text-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "size-5",
				strokeWidth: 1.5
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-2xl tracking-tight text-ink",
				children: item.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 leading-relaxed text-ink-soft",
				children: item.text
			})]
		})]
	});
}
function PriceIncludes() {
	const [a, b, c, d] = inclusions;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-5 md:px-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-8 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "flex flex-col gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "What’s in the price" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-display text-ink",
						children: [
							"Pay once.",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Then just go."
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lead max-w-md text-ink-soft md:text-right",
						children: "No surprises at the gate, no taxis to haggle, and no extra moments. Here’s what your booking covers."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid gap-5 lg:grid-cols-[1fr_1.45fr_1fr] lg:grid-rows-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: a ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { item: a }) : null }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 100,
						className: "lg:row-span-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: media.coastBeach,
							alt: "Traveler walking down to a sunset beach below palm-lined cliffs",
							loading: "lazy",
							className: "h-80 w-full rounded-[22px] object-cover lg:h-full"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 200,
						children: b ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { item: b }) : null
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: c ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { item: c }) : null }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 200,
						children: d ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, { item: d }) : null
					})
				]
			})]
		})
	});
}
var sortLabels = {
	featured: "Sort By",
	"price-asc": "Price: Low to High",
	"price-desc": "Price: High to Low",
	rating: "Top Rated",
	duration: "Shortest First"
};
function tripCountries(trips) {
	return ["All", ...Array.from(new Set(trips.map((t) => t.country)))];
}
/** Filters trips by country and category ("All" keeps everything) and orders them. */
function filterAndSortTrips(trips, country, sort, category = "All") {
	const list = trips.filter((t) => (country === "All" || t.country === country) && (category === "All" || t.category === category));
	switch (sort) {
		case "price-asc": return list.sort((a, b) => a.price - b.price);
		case "price-desc": return list.sort((a, b) => b.price - a.price);
		case "rating": return list.sort((a, b) => b.rating - a.rating);
		case "duration": return list.sort((a, b) => a.days - b.days);
		default: return list;
	}
}
var toneClasses = {
	olive: "from-trip-olive via-trip-olive/80",
	rust: "from-trip-rust via-trip-rust/80",
	amber: "from-trip-amber via-trip-amber/80",
	moss: "from-trip-moss via-trip-moss/80",
	earth: "from-trip-earth via-trip-earth/80",
	navy: "from-trip-navy via-trip-navy/80"
};
var toneBg = {
	olive: "bg-trip-olive",
	rust: "bg-trip-rust",
	amber: "bg-trip-amber",
	moss: "bg-trip-moss",
	earth: "bg-trip-earth",
	navy: "bg-trip-navy"
};
function TripCard({ trip }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("group relative flex min-h-[600px] flex-col overflow-hidden rounded-[24px] md:min-h-[630px]", toneBg[trip.tone]),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: trip.image,
				alt: trip.title,
				loading: "lazy",
				className: "absolute inset-x-0 top-0 h-[78%] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("absolute inset-0 bg-gradient-to-t from-35% via-50% to-transparent to-75%", toneClasses[trip.tone]) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex items-center justify-between p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-2",
					children: [trip.country, `${trip.days} Days`].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-eyebrow rounded-full bg-paper px-3 py-1.5 text-ink",
						children: t
					}, t))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1 rounded-full bg-paper px-3 py-1.5 font-mono text-xs text-ink",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
						className: "size-3.5 fill-ink",
						strokeWidth: 0
					}), trip.rating.toFixed(1)]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-auto p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "flex items-baseline gap-1 text-paper",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-display text-5xl font-medium tracking-[-0.04em]",
							children: ["$", trip.price.toLocaleString("en-US")]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-paper-soft",
							children: "/per person"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-5 text-2xl tracking-tight text-paper",
						children: trip.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-[0.95rem] leading-relaxed text-paper-soft",
						children: trip.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransitionLink, {
						to: "/destination/$tripId",
						params: { tripId: trip.id },
						className: "mt-6 flex h-11 items-center justify-center rounded-full bg-paper font-ui font-medium text-ink transition-transform duration-300 hover:-translate-y-0.5",
						children: "See this trip"
					})
				]
			})
		]
	});
}
//#endregion
export { tripCountries as a, sortLabels as i, TripCard as n, filterAndSortTrips as r, PriceIncludes as t };
