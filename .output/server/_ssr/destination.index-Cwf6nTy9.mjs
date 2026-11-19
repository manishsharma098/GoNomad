import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as TransitionLink, r as cn } from "./PageTransition-Dkti0fsL.mjs";
import { r as trips } from "./trips-BIDt-70i.mjs";
import { n as places } from "./places-CEaloSOL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/destination.index-Cwf6nTy9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function PlaceExplorer() {
	const [active, setActive] = (0, import_react.useState)(0);
	const [hovering, setHovering] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (hovering) return;
		const id = window.setInterval(() => setActive((i) => (i + 1) % places.length), 3200);
		return () => window.clearInterval(id);
	}, [hovering]);
	const place = places[active] ?? places[0];
	if (!place) return null;
	const here = trips.filter((trip) => trip.country === place.country);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "pt-44 pb-24 md:pt-56 md:pb-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1440px] items-stretch gap-8 px-5 md:grid-cols-[0.85fr_1.15fr] md:px-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "order-2 md:order-1",
				onMouseLeave: () => setHovering(false),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-eyebrow text-ink-soft",
						children: "Places"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-display text-ink",
						children: "Where next?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 flex flex-col",
						children: places.map((item, i) => {
							const selected = i === active;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								onMouseEnter: () => {
									setHovering(true);
									setActive(i);
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransitionLink, {
									to: "/destination/$tripId",
									params: { tripId: item.id },
									onNavigate: () => setActive(i),
									className: cn("block w-full border-t border-sand-strong py-2.5 text-left font-display text-2xl tracking-tight transition-colors md:text-3xl", selected ? "text-ink" : "text-ink/35 hover:text-ink/70"),
									children: item.name
								})
							}, item.id);
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative order-1 min-h-[420px] overflow-hidden rounded-[32px] md:order-2 md:min-h-[640px]",
				children: [
					places.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image,
						alt: "",
						className: cn("absolute inset-0 size-full object-cover transition-opacity duration-700", i === active ? "opacity-100" : "opacity-0")
					}, item.id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransitionLink, {
						to: "/destination/$tripId",
						params: { tripId: place.id },
						className: "absolute inset-0 flex items-end p-6 transition-opacity hover:opacity-90 md:p-10",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-eyebrow text-paper",
							children: place.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-3 block max-w-md text-2xl leading-snug tracking-tight text-paper",
							children: place.line
						})] })
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto mt-10 max-w-[1440px] px-5 md:px-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-eyebrow text-ink-soft",
				children: ["Trips in ", place.name]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 divide-y divide-sand-strong border-y border-sand-strong",
				children: here.map((trip) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TransitionLink, {
					to: "/destination/$tripId",
					params: { tripId: trip.id },
					className: "flex flex-col gap-2 py-5 transition-opacity hover:opacity-60 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block text-2xl tracking-tight text-ink",
						children: trip.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "mt-1 block text-sm text-ink-soft",
						children: [
							trip.category,
							" · ",
							trip.days,
							" days"
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-ui text-lg text-ink",
						children: ["$", trip.price.toLocaleString("en-US")]
					})]
				}) }, trip.id))
			})]
		})]
	});
}
function DestinationPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceExplorer, {});
}
//#endregion
export { DestinationPage as component };
