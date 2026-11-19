import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as media, r as cn } from "./PageTransition-Dkti0fsL.mjs";
import { t as Reveal } from "./Reveal-II7hFHQt.mjs";
import { _ as ChevronDown, g as ChevronLeft, h as ChevronRight } from "../_libs/lucide-react.mjs";
import { r as SectionHeading, t as FinalCta } from "./FinalCta-BYCIocI0.mjs";
import { t as PageHeader } from "./PageHeader-6yxfsWlq.mjs";
import { t as Faq } from "./Faq-DpdOsVNY.mjs";
import { n as tripCategories, r as trips } from "./trips-BIDt-70i.mjs";
import { a as tripCountries, i as sortLabels, n as TripCard, r as filterAndSortTrips, t as PriceIncludes } from "./TripCard-D9JLqLj0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/trips-eA-Vidj8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PAGE_SIZE = 6;
function PillSelect({ value, options, onChange, label }) {
	const current = options.find((o) => o.value === value)?.label ?? label;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "relative inline-flex h-13 cursor-pointer items-center gap-2 rounded-full border border-sand-strong bg-sand px-5 font-ui text-base font-medium text-ink transition-colors hover:bg-sand-strong",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: current }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
				className: "absolute inset-0 cursor-pointer opacity-0",
				value,
				onChange: (e) => onChange(e.target.value),
				children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
					value: o.value,
					children: o.label
				}, o.value))
			})
		]
	});
}
function DestinationTrips({ embedded = false }) {
	const [category, setCategory] = (0, import_react.useState)("All");
	const [country, setCountry] = (0, import_react.useState)("All");
	const [sort, setSort] = (0, import_react.useState)("featured");
	const [page, setPage] = (0, import_react.useState)(1);
	const shown = (0, import_react.useMemo)(() => filterAndSortTrips(trips, country, sort, category), [
		country,
		sort,
		category
	]);
	const pageCount = Math.max(1, Math.ceil(shown.length / PAGE_SIZE));
	const safePage = Math.min(page, pageCount);
	const pageTrips = shown.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);
	function pickCategory(next) {
		setCategory(next);
		setPage(1);
	}
	function goToPage(next) {
		setPage(next);
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: embedded ? "pb-24 md:pb-32" : "pt-40 pb-24 md:pt-52 md:pb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-5 md:px-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between gap-8 md:flex-row md:items-end",
					children: [embedded ? null : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
						align: "left",
						label: "Trips",
						title: "Find your next trip",
						text: "Small-group trips with local guides. Pick a style, then open a trip for the full plan."
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						delay: 100,
						className: "flex gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillSelect, {
							label: "Country",
							value: country,
							onChange: (value) => {
								setCountry(value);
								setPage(1);
							},
							options: tripCountries(trips).map((c) => ({
								value: c,
								label: c
							}))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillSelect, {
							label: "Sort trips",
							value: sort,
							onChange: (value) => {
								setSort(value);
								setPage(1);
							},
							options: Object.keys(sortLabels).map((k) => ({
								value: k,
								label: sortLabels[k]
							}))
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex gap-2 overflow-x-auto pb-1",
					children: tripCategories.map((item) => {
						const active = item === category;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => pickCategory(item),
							className: cn("shrink-0 rounded-full px-4 py-2 font-ui text-sm font-medium transition-colors", active ? "bg-ink text-paper" : "bg-sand text-ink hover:bg-sand-strong"),
							"aria-pressed": active,
							children: item
						}, item);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 font-ui text-sm text-ink-soft",
					children: [
						shown.length,
						" ",
						shown.length === 1 ? "trip" : "trips",
						category !== "All" ? ` in ${category}` : ""
					]
				}),
				pageTrips.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-16 text-2xl tracking-tight text-ink",
					children: "No trips in this mix yet."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
					children: pageTrips.map((trip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TripCard, { trip }, trip.id))
				}),
				pageCount > 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "mt-12 flex items-center justify-center gap-2",
					"aria-label": "Trip pages",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageButton, {
							label: "Previous page",
							disabled: safePage === 1,
							onClick: () => goToPage(safePage - 1),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
						}),
						Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => goToPage(n),
							"aria-current": n === safePage ? "page" : void 0,
							className: cn("grid size-11 place-items-center rounded-full font-ui text-sm font-medium", n === safePage ? "bg-ink text-paper" : "bg-sand text-ink hover:bg-sand-strong"),
							children: n
						}, n)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageButton, {
							label: "Next page",
							disabled: safePage === pageCount,
							onClick: () => goToPage(safePage + 1),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
						})
					]
				}) : null
			]
		})
	});
}
function PageButton({ label, disabled, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		disabled,
		onClick,
		className: "grid size-11 place-items-center rounded-full bg-sand text-ink transition-colors hover:bg-sand-strong disabled:cursor-not-allowed disabled:opacity-40",
		children
	});
}
function TripsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			label: "Trips",
			title: "Every trip, one place",
			text: "Local guides, small groups and everything handled. Filter by country or sort by price to find the one that fits.",
			image: media.patagonia,
			imageAlt: "Rock dome rising from a misty Patagonian beach"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DestinationTrips, { embedded: true }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceIncludes, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { TripsPage as component };
