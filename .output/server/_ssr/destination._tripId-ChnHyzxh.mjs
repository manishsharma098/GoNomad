import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as TransitionLink } from "./PageTransition-Dkti0fsL.mjs";
import { t as ArrowButton } from "./ArrowButton-88YxMJzm.mjs";
import { r as trips, t as findTrip } from "./trips-BIDt-70i.mjs";
import { t as findPlace } from "./places-CEaloSOL.mjs";
import { t as Route } from "./destination._tripId-BL4UGQ9j.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/destination._tripId-ChnHyzxh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fieldClass = "w-full rounded-xl bg-background px-4 py-3.5 font-ui text-base text-ink outline-none transition-shadow placeholder:text-ink-soft focus:ring-2 focus:ring-ink/20";
function PlaceDetail({ place }) {
	const here = trips.filter((trip) => trip.country === place.country);
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(event) {
		event.preventDefault();
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "pt-40 pb-24 md:pt-48",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-5 md:px-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransitionLink, {
					to: "/destination",
					activeOptions: { exact: true },
					className: "font-ui text-sm font-medium text-ink-soft transition-opacity hover:opacity-60",
					children: "All places"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-eyebrow text-ink-soft",
							children: "Destination Details"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 text-display text-ink",
							children: place.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lead mt-5 max-w-xl text-ink-soft",
							children: place.intro
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-8 grid grid-cols-3 gap-3 border-t border-sand-strong pt-6",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact$1, {
									label: "Region",
									value: place.region
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact$1, {
									label: "Pace",
									value: place.pace
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact$1, {
									label: "Best season",
									value: place.season
								})
							]
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-[320px] overflow-hidden rounded-[32px] md:h-[460px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: place.image,
							alt: "",
							className: "size-full object-cover"
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 flex max-w-3xl flex-col gap-12",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							title: "About this destination",
							children: place.about.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lead text-ink-soft",
								children: paragraph
							}, paragraph))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							title: "Why go with us",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lead text-ink-soft",
								children: place.why
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							title: "Good to know",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lead text-ink-soft",
								children: place.goodToKnow
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
							title: "The pace",
							children: place.paceNotes.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lead text-ink-soft",
								children: paragraph
							}, paragraph))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid gap-5 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex items-center gap-5 rounded-[24px] bg-sand p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: place.guide.photo,
							alt: "",
							className: "size-16 shrink-0 rounded-full object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-ui text-xl font-medium text-ink",
							children: place.guide.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-ink-soft",
							children: place.guide.bio
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "flex flex-col gap-4 rounded-[24px] bg-sand p-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl tracking-tight text-ink",
							children: "Send us a message"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-ink-soft",
							children: "We’ll respond within 5 to 6 hours."
						})] }), sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lead text-ink",
							children: "Message sent. A real person will write back."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-eyebrow text-ink-soft",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "email",
									name: "email",
									required: true,
									placeholder: "Enter your email",
									className: fieldClass
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex flex-col gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-eyebrow text-ink-soft",
									children: "Anything we should know?"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									name: "message",
									required: true,
									rows: 4,
									placeholder: "Anything we should know?",
									className: fieldClass
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "w-fit rounded-full bg-ink px-6 py-3 font-ui text-sm font-medium text-paper transition-opacity hover:opacity-80",
								children: "Send Message"
							})
						] })]
					})]
				}),
				here.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-eyebrow text-ink-soft",
							children: ["Trips in ", place.name]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-3 text-display text-ink",
							children: "Ways to see it"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-6 divide-y divide-sand-strong border-y border-sand-strong",
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
						})
					]
				}) : null
			]
		})
	});
}
function Fact$1({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-eyebrow text-ink-soft",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-2 font-ui text-lg tracking-tight text-ink md:text-xl",
		children: value
	})] });
}
function Block({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-3xl tracking-tight text-ink",
			children: title
		}), children]
	});
}
function TripDetail({ tripId }) {
	const trip = findTrip(tripId);
	if (!trip) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center gap-6 px-5 pt-40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-display text-ink",
			children: "This trip isn’t on the list."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransitionLink, {
			to: "/destination",
			className: "font-ui text-lg text-ink underline",
			children: "Back to all trips"
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "pt-36 pb-24 md:pt-44",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-5 md:px-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransitionLink, {
					to: "/destination",
					activeOptions: { exact: true },
					className: "font-ui text-sm font-medium text-ink-soft transition-opacity hover:opacity-60",
					children: "All trips"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-6 flex min-h-[68vh] flex-col justify-end overflow-hidden rounded-[32px]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: trip.image,
							alt: "",
							className: "absolute inset-0 size-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-ink/10" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative p-6 md:p-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-eyebrow text-paper",
									children: [
										trip.category,
										" · ",
										trip.place,
										", ",
										trip.country
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "mt-4 max-w-3xl text-display text-paper",
									children: trip.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-xl text-lead text-paper-soft",
									children: trip.description
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid items-start gap-8 lg:grid-cols-[1.4fr_0.6fr]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lead text-ink",
							children: trip.story
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-12 text-3xl tracking-tight text-ink",
							children: "Highlights"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 grid gap-3 sm:grid-cols-3",
							children: trip.highlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-[16px] bg-sand px-4 py-5 text-ink",
								children: item
							}, item))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-12 text-3xl tracking-tight text-ink",
							children: "The days"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
							className: "mt-5 flex flex-col gap-3",
							children: trip.daysPlan.map((day) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "rounded-[16px] bg-sand p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-eyebrow text-ink-soft",
										children: day.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-2 text-2xl tracking-tight text-ink",
										children: day.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-ink-soft",
										children: day.text
									})
								]
							}, day.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-12 text-3xl tracking-tight text-ink",
							children: "Included"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-5 grid gap-3 sm:grid-cols-2",
							children: trip.included.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "rounded-[16px] border border-sand-strong px-4 py-4 text-ink",
								children: item
							}, item))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
						className: "rounded-[24px] bg-sand p-6 lg:sticky lg:top-32",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "font-display text-5xl font-medium tracking-[-0.04em] text-ink",
								children: ["$", trip.price.toLocaleString("en-US")]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-ink-soft",
								children: "per person"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-6 flex flex-col gap-4 text-ink",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
										label: "Days",
										value: `${trip.days} days`
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
										label: "Rating",
										value: trip.rating.toFixed(1)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
										label: "Group",
										value: trip.group
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
										label: "Best time",
										value: trip.bestTime
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
										label: "Fitness",
										value: trip.fitness
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
										label: "Meet",
										value: trip.meeting
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowButton, {
								to: "/contact",
								label: "Plan this trip",
								className: "mt-8"
							})
						]
					})]
				})
			]
		})
	});
}
function Fact({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-t border-sand-strong pt-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-eyebrow text-ink-soft",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-1",
			children: value
		})]
	});
}
function TripPage() {
	const { tripId } = Route.useParams();
	const place = findPlace(tripId);
	if (place) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlaceDetail, { place });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TripDetail, { tripId });
}
//#endregion
export { TripPage as component };
