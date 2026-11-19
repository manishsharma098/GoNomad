import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { r as cn } from "./PageTransition-Dkti0fsL.mjs";
import { n as collagePhotos, t as Reveal } from "./Reveal-II7hFHQt.mjs";
import { t as ArrowButton } from "./ArrowButton-88YxMJzm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/FinalCta-BYCIocI0.js
var import_jsx_runtime = require_jsx_runtime();
function SectionLabel({ children, className, tone = "dark" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: cn("text-eyebrow inline-flex items-center gap-2", tone === "dark" ? "text-ink-soft" : "text-paper", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full", tone === "dark" ? "bg-ink-soft" : "bg-paper") }), children]
	});
}
/** Section heading block: label + big title + supporting copy. */
function SectionHeading({ label, title, text, align = "center", tone = "dark", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col gap-6", align === "center" ? "items-center text-center" : "items-start text-left", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, {
				tone,
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: cn("text-display max-w-4xl", tone === "light" ? "text-paper" : "text-ink"),
				children: title
			}),
			text ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: cn("text-lead max-w-xl", tone === "light" ? "text-paper-soft" : "text-ink-soft"),
				children: text
			}) : null
		]
	});
}
/** Row of tilted, framed photos that drifts from right to left. */
function PhotoCollage({ fade = false, className }) {
	const loop = [...collagePhotos, ...collagePhotos];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("marquee relative w-full overflow-hidden py-10", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "marquee-track flex w-max items-center",
			children: loop.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "group -mx-2 shrink-0 rounded-[22px] bg-sand p-2 shadow-[var(--shadow-soft)] transition-transform duration-700 ease-out hover:z-10 hover:scale-[1.03]",
				style: {
					transform: `rotate(${p.rotate}deg)`,
					zIndex: i % collagePhotos.length === 2 ? 2 : 1
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: p.src,
					alt: p.alt,
					loading: "lazy",
					className: cn("aspect-square w-[62vw] rounded-[16px] object-cover sm:w-[44vw] lg:w-[28vw] xl:w-[400px]", fade && "fade-bottom")
				})
			}, `${p.src}-${i}`))
		})
	});
}
function FinalCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "overflow-hidden bg-gradient-to-b from-background to-sand pt-24 md:pt-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-3xl flex-col items-center gap-8 px-5 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Departures Filling Fast" }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-display text-ink",
						children: [
							"Your next trip is",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"already out there"
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lead max-w-xl text-ink-soft",
						children: "Tell us where you’ve been dreaming of or let us suggest somewhere. Either way, we’ll take it from here."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 200,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowButton, {
						to: "/trips",
						label: "Begin Your Journey"
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: 150,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoCollage, {
				fade: true,
				className: "mt-10"
			})
		})]
	});
}
//#endregion
export { SectionLabel as i, PhotoCollage as n, SectionHeading as r, FinalCta as t };
