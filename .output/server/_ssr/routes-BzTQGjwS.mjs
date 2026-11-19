import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as media, n as TransitionLink, r as cn } from "./PageTransition-Dkti0fsL.mjs";
import { c as journeyStyles, m as videoReviews, r as destinations, t as Reveal } from "./Reveal-II7hFHQt.mjs";
import { _ as ChevronDown, c as Pause, o as Play, v as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as ArrowButton } from "./ArrowButton-88YxMJzm.mjs";
import { r as SectionHeading, t as FinalCta } from "./FinalCta-BYCIocI0.mjs";
import { n as HowItWorks, r as Testimonials, t as AboutIntro } from "./Testimonials-CJB-Axv6.mjs";
import { t as Journal } from "./Journal-Cm4rumD7.mjs";
import { t as Faq } from "./Faq-DpdOsVNY.mjs";
import { r as trips } from "./trips-BIDt-70i.mjs";
import { a as tripCountries, i as sortLabels, n as TripCard, r as filterAndSortTrips, t as PriceIncludes } from "./TripCard-D9JLqLj0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BzTQGjwS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DestinationCard({ d }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TransitionLink, {
		to: "/destination/$tripId",
		params: { tripId: d.id },
		"aria-label": `${d.place}, ${d.country}`,
		className: "group relative block h-[460px] w-[300px] shrink-0 overflow-hidden rounded-[28px] md:h-[620px] md:w-[412px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: d.image,
				alt: "",
				loading: "lazy",
				className: "absolute inset-0 size-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-5 right-5 grid size-11 place-items-center rounded-full bg-paper text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-x-6 bottom-6 translate-y-2 transition-transform duration-500 group-hover:translate-y-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg text-paper/85",
					children: d.place
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1 font-ui text-3xl font-semibold tracking-tight text-paper",
					children: d.country
				})]
			})
		]
	});
}
function Destinations() {
	const loop = [...destinations, ...destinations];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "overflow-hidden py-24 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			className: "px-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				label: "Curated Escapes",
				title: "Places to slow down for",
				text: "A handpicked selection of the world’s most extraordinary destinations from ancient coastal villages to untouched alpine frontiers."
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: 150,
			className: "marquee mt-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "marquee-track flex w-max gap-5",
				children: loop.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DestinationCard, { d }, `${d.place}-${i}`))
			})
		})]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative flex min-h-[100svh] items-center justify-center overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: media.heroButte,
				alt: "Red sandstone butte rising above a forest at golden hour",
				className: "absolute inset-0 size-full scale-105 object-cover animate-in fade-in zoom-in-110 duration-[1800ms]"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero-scrim absolute inset-0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex max-w-5xl flex-col items-center px-5 pt-24 text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "text-display-xl text-paper animate-in fade-in slide-in-from-bottom-8 duration-1000",
						children: [
							"Travel",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Without Limits"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lead mt-8 max-w-2xl text-paper/90 animate-in fade-in slide-in-from-bottom-6 duration-1000 [animation-delay:200ms] [animation-fill-mode:backwards]",
						children: "We curate private, low-impact escapes to the world’s most serene destinations. Tailored entirely to your rhythm, led by local experts."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-14 flex flex-wrap items-center justify-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 [animation-delay:400ms] [animation-fill-mode:backwards]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowButton, {
							to: "/trips",
							label: "Begin Your Journey",
							variant: "light"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransitionLink, {
							to: "/destination",
							className: "inline-flex h-14 items-center rounded-full border border-paper/70 bg-ink/20 px-5 font-ui text-base font-medium text-paper backdrop-blur-md transition-colors hover:bg-paper/15",
							children: "Explore Destination"
						})]
					})
				]
			})
		]
	});
}
var journeyBackgrounds = [
	media.patagonia,
	media.mountFuji,
	media.coastBeach,
	media.serengeti,
	media.marrakech,
	media.yosemiteValley,
	media.seaStack,
	media.rainbowHill,
	media.monumentValley,
	media.sierraGranite,
	media.heroButte,
	media.desertDune
];
/** Big blurred word cloud — one travel style comes into focus at a time (or on hover). */
function SelectJourney() {
	const [active, setActive] = (0, import_react.useState)(0);
	const [hovering, setHovering] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (hovering) return;
		const id = window.setInterval(() => setActive((i) => (i + 1) % journeyStyles.length), 1800);
		return () => window.clearInterval(id);
	}, [hovering]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden py-28 md:py-36",
		children: [
			journeyBackgrounds.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src,
				alt: "",
				"aria-hidden": "true",
				className: cn("absolute inset-0 size-full object-cover transition-opacity duration-700", active === i ? "opacity-100" : "opacity-0")
			}, src)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-6xl px-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					tone: "light",
					label: "Curated by Experience",
					title: "Select your journey.",
					text: "Every trip starts with a question: how do you want to feel? From retreats to expeditions, find your travel style."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mx-auto mt-16 flex max-w-5xl flex-wrap items-baseline justify-center gap-x-4 gap-y-2 md:gap-x-6",
					onMouseLeave: () => setHovering(false),
					children: journeyStyles.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-baseline gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onMouseEnter: () => {
									setHovering(true);
									setActive(i);
								},
								onFocus: () => setActive(i),
								className: cn("font-display text-[clamp(2.25rem,5.5vw,4.75rem)] font-medium leading-[1.1] tracking-[-0.04em] text-paper transition-all duration-700", active === i ? "blur-0 opacity-100" : "opacity-60 blur-[6px]"),
								children: s
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("font-mono text-xs text-paper transition-all duration-700", active === i ? "opacity-100" : "opacity-40 blur-[3px]"),
								children: String(i + 1).padStart(2, "0")
							}),
							i < journeyStyles.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-paper/40 blur-[2px]",
								"aria-hidden": "true",
								children: "·"
							}) : null
						]
					}, s))
				})]
			})
		]
	});
}
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
function TripsGrid({ limit }) {
	const [country, setCountry] = (0, import_react.useState)("All");
	const [sort, setSort] = (0, import_react.useState)("featured");
	const shown = (0, import_react.useMemo)(() => {
		const list = filterAndSortTrips(trips, country, sort);
		return limit ? list.slice(0, limit) : list;
	}, [
		country,
		sort,
		limit
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-5 md:px-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-between gap-8 md:flex-row md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "left",
					label: "Trips",
					title: "Find your next trip",
					text: "120+ small-group trips in 40+ countries, led by local guides and limited to twelve travelers."
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 100,
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillSelect, {
						label: "Country",
						value: country,
						onChange: setCountry,
						options: tripCountries(trips).map((c) => ({
							value: c,
							label: c
						}))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillSelect, {
						label: "Sort trips",
						value: sort,
						onChange: setSort,
						options: Object.keys(sortLabels).map((k) => ({
							value: k,
							label: sortLabels[k]
						}))
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3",
				children: shown.map((t, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i % 3 * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TripCard, { trip: t })
				}, t.id))
			})]
		})
	});
}
function VideoCard({ src, label }) {
	const ref = (0, import_react.useRef)(null);
	const [playing, setPlaying] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const v = ref.current;
		if (!v) return;
		const io = new IntersectionObserver(([e]) => {
			if (e?.isIntersecting) v.play().catch(() => {});
			else v.pause();
		});
		io.observe(v);
		return () => io.disconnect();
	}, []);
	const toggle = () => {
		const v = ref.current;
		if (!v) return;
		if (v.paused) v.play().catch(() => {});
		else v.pause();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group relative overflow-hidden rounded-[24px] bg-sand",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
			ref,
			src,
			muted: true,
			loop: true,
			playsInline: true,
			preload: "metadata",
			"aria-label": label,
			onPlay: () => setPlaying(true),
			onPause: () => setPlaying(false),
			className: "aspect-[413/528] w-full object-cover"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: toggle,
			"aria-label": playing ? "Pause video" : "Play video",
			className: "absolute bottom-4 right-4 grid size-12 place-items-center rounded-full bg-paper/80 text-ink opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 focus-visible:opacity-100",
			children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "size-5" })
		})]
	});
}
function VideoReviews() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pb-24 md:pb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-5 md:px-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				align: "left",
				label: "In Their Own Words",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Hear It From the",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Travelers Themselves"
				] }),
				text: "Written reviews tell you what people thought. These tell you how they felt. Short, unscripted, filmed on the trip — no prompts, no edits."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-16 grid gap-5 md:grid-cols-3",
				children: videoReviews.map((v, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoCard, {
						src: v.src,
						label: v.label
					})
				}, v.src))
			})]
		})
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutIntro, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectJourney, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Destinations, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TripsGrid, { limit: 6 }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoReviews, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceIncludes, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Journal, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { HomePage as component };
