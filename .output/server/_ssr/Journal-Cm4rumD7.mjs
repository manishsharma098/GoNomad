import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as TransitionLink } from "./PageTransition-Dkti0fsL.mjs";
import { t as Reveal, u as posts } from "./Reveal-II7hFHQt.mjs";
import { r as SectionHeading } from "./FinalCta-BYCIocI0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Journal-Cm4rumD7.js
var import_jsx_runtime = require_jsx_runtime();
function Journal() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-5 md:px-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				label: "Journal",
				title: "Insights & News",
				text: "Practical trip guides, honest destination notes, and the occasional story from a guide who’s been there a hundred times."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-5 md:grid-cols-3",
				children: posts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TransitionLink, {
						to: "/blog",
						className: "group block",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "overflow-hidden rounded-[22px]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: p.image,
									alt: p.title,
									loading: "lazy",
									className: "aspect-[413/500] w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-eyebrow mt-5 flex justify-between text-ink-soft",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.tag }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.date })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-2xl leading-snug tracking-tight text-ink transition-opacity group-hover:opacity-70",
								children: p.title
							})
						]
					})
				}, p.title))
			})]
		})
	});
}
//#endregion
export { Journal as t };
