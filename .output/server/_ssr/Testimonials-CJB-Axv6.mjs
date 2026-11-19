import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as media } from "./PageTransition-Dkti0fsL.mjs";
import { d as raterAvatars, f as steps, p as testimonials, t as Reveal } from "./Reveal-II7hFHQt.mjs";
import { r as Star } from "../_libs/lucide-react.mjs";
import { t as ArrowButton } from "./ArrowButton-88YxMJzm.mjs";
import { i as SectionLabel, n as PhotoCollage, r as SectionHeading } from "./FinalCta-BYCIocI0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Testimonials-CJB-Axv6.js
var import_jsx_runtime = require_jsx_runtime();
function AboutIntro({ showButton = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "overflow-hidden py-24 md:py-32",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-5xl flex-col items-center px-5 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "About Us" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-display mt-8 text-ink",
						children: "We create unforgettable journeys that stay with you long after returning home."
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 150,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhotoCollage, { className: "mt-12" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto mt-12 flex max-w-2xl flex-col items-center gap-10 px-5 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lead text-ink",
					children: "Every destination is curated to turn a map into a journey you’ll cherish. Fewer stops, longer stays, and local guides ensure memories last."
				}) }), showButton ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowButton, {
						to: "/about",
						label: "More About Us"
					})
				}) : null]
			})
		]
	});
}
/** Cards stick and stack on top of each other while you scroll. */
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-sand py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1064px] px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				label: "How It Works",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Four Steps From",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Browsing to Boarding"
				] }),
				text: "120+ small-group trips in 40+ countries, led by local guides and limited to twelve travelers."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-20 flex flex-col gap-8",
				children: steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sticky",
					style: { top: `calc(7rem + ${i * 1.5}rem)` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "grid min-h-[520px] gap-4 rounded-[32px] bg-background p-4 shadow-[var(--shadow-soft)] md:grid-cols-2 md:p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col justify-between p-4 md:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-5xl font-medium tracking-[-0.04em] text-ink",
								children: s.n
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-16",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-3xl tracking-tight text-ink",
									children: s.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lead mt-5 max-w-sm text-ink-soft",
									children: s.text
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.image,
							alt: s.title,
							loading: "lazy",
							className: "h-72 w-full rounded-[22px] object-cover md:h-full"
						})]
					})
				}, s.n))
			})]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-5 md:px-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "left",
				label: "Testimonial",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Satisfied & happy",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"travelers"
				] }),
				text: "Unedited reviews from travelers who’ve been on our trips. 4.9 stars across 12,000+ journeys."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16 grid gap-5 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "relative flex min-h-[540px] flex-col overflow-hidden rounded-[24px] p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: media.monumentValley,
							alt: "",
							"aria-hidden": "true",
							loading: "lazy",
							className: "absolute inset-0 size-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-trip-rust via-trip-rust/40 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex -space-x-3",
								children: raterAvatars.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: a,
									alt: "",
									className: "size-12 rounded-full border-2 border-paper object-cover"
								}, a))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-ui text-2xl font-semibold text-paper",
								children: "21k+"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-paper-soft",
								children: "travelers have rated us"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative mt-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-6xl font-medium tracking-[-0.04em] text-paper",
									children: "5.0"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-eyebrow mt-2 text-paper",
									children: "Overall rating"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-10 text-xl leading-snug text-paper",
									children: "Every review comes from a traveler who’s completed a GoNomad trip. No incentives, no edits — just what they said when they got home."
								})
							]
						})
					]
				}) }), testimonials.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: (i + 1) * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "relative flex min-h-[540px] flex-col overflow-hidden rounded-[24px] bg-sand p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1 text-star",
								children: Array.from({ length: 5 }).map((_, k) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									className: "size-6 fill-current",
									strokeWidth: 0
								}, k))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-5 text-2xl leading-snug tracking-tight text-ink",
								children: t.quote
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-auto flex items-end justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-lg text-ink",
										children: t.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-ink-soft",
										children: t.trip
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "-mb-5 -mr-5 rounded-tl-[22px] bg-background p-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: t.photo,
										alt: t.name,
										loading: "lazy",
										className: "size-24 rounded-[16px] object-cover"
									})
								})]
							})
						]
					})
				}, t.name))]
			})]
		})
	});
}
//#endregion
export { HowItWorks as n, Testimonials as r, AboutIntro as t };
