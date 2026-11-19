import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as media } from "./PageTransition-Dkti0fsL.mjs";
import { t as Reveal } from "./Reveal-II7hFHQt.mjs";
import { d as Mail, r as Star, s as Phone, u as MapPin, v as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { i as SectionLabel, r as SectionHeading, t as FinalCta } from "./FinalCta-BYCIocI0.mjs";
import { t as Faq } from "./Faq-DpdOsVNY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-DrnuBVoW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var locations = [
	"Japan",
	"Peru",
	"Brazil",
	"Tanzania",
	"Bali",
	"Greece",
	"Morocco",
	"Not sure yet"
];
var groupSizes = [
	"1",
	"2",
	"3–4",
	"5–8",
	"9–12"
];
var ways = [
	{
		icon: MapPin,
		label: "Office",
		value: "14 Harbour Lane, Bristol, UK",
		href: "https://www.google.com/maps/search/?api=1&query=14+Harbour+Lane,+Bristol,+UK"
	},
	{
		icon: Phone,
		label: "Phone",
		value: "+1 234 556-780",
		href: "tel:+1234556780"
	},
	{
		icon: Mail,
		label: "Email",
		value: "info@gonomad.com",
		href: "mailto:info@gonomad.com"
	}
];
var fieldClass = "w-full rounded-xl bg-field px-4 py-3.5 font-ui text-base text-ink outline-none transition-shadow placeholder:text-ink-soft focus:ring-2 focus:ring-ink/20";
function ContactSection() {
	const [sent, setSent] = (0, import_react.useState)(false);
	function onSubmit(event) {
		event.preventDefault();
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pt-40 md:pt-52",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-[1440px] items-start gap-8 px-5 md:px-20 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-start gap-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: "Get in Touch" }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 80,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-display text-ink",
								children: "Where to go?"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: 140,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lead max-w-xl text-ink-soft",
								children: "Whether you’ve got a trip in mind or just a rough idea of when you want to travel, we’re here. Real people, real replies, usually within a day."
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 180,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "relative flex min-h-[280px] flex-col overflow-hidden rounded-[20px] bg-sand p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-1 text-star",
								"aria-label": "5 out of 5 stars",
								children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
									className: "size-5 fill-current",
									strokeWidth: 0
								}, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-5 max-w-md text-2xl leading-snug tracking-tight text-ink",
								children: "I booked solo and left with new friends. Everything was handled from the moment I landed."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-auto flex items-end justify-between pt-10",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-lg text-ink",
										children: "Rachel M."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1 text-sm text-ink-soft",
										children: "Patagonia Circuit · February 2026"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "-mb-5 -mr-5 rounded-tl-[16px] bg-background p-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: media.rachel,
										alt: "",
										loading: "lazy",
										className: "size-[91px] rounded-[8px] object-cover"
									})
								})]
							})
						]
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 120,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-[20px] bg-sand p-6 md:p-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl tracking-tight text-ink",
							children: "Send us a message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-ink-soft",
							children: "We’ll get back to you shortly, usually within 5 to 6 hours."
						}),
						sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-10 text-xl leading-snug tracking-tight text-ink",
							children: "Message sent. A real person will write back, usually within 5 to 6 hours."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "mt-8 flex flex-col gap-5",
							onSubmit,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-5 sm:grid-cols-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "First name",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											required: true,
											name: "first_name",
											autoComplete: "given-name",
											placeholder: "Enter your first name",
											className: fieldClass
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
										label: "Last name",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "last_name",
											autoComplete: "family-name",
											placeholder: "Enter your last name",
											className: fieldClass
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Phone number",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "tel",
										name: "phone",
										autoComplete: "tel",
										placeholder: "Enter your number",
										className: fieldClass
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										type: "email",
										name: "email",
										autoComplete: "email",
										placeholder: "Enter your email",
										className: fieldClass
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Location of traveling",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										name: "location",
										defaultValue: "",
										required: true,
										className: fieldClass,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Enter your location"
										}), locations.map((place) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: place,
											children: place
										}, place))]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "How many people",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										name: "people",
										defaultValue: "",
										required: true,
										className: fieldClass,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "",
											disabled: true,
											children: "Enter people number"
										}), groupSizes.map((size) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: size,
											children: size
										}, size))]
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Message",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										name: "message",
										rows: 4,
										placeholder: "Enter your message",
										className: `${fieldClass} resize-y`
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "group inline-flex w-fit items-center gap-3 rounded-full bg-ink py-1 pl-4 pr-1 font-ui text-base font-medium text-paper transition-transform duration-300 hover:-translate-y-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Send Message" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-12 place-items-center rounded-full bg-paper text-ink transition-transform duration-500 group-hover:rotate-45",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
											className: "size-6",
											strokeWidth: 1.75
										})
									})]
								})
							]
						})
					]
				})
			})]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] px-5 md:px-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-end gap-8 lg:grid-cols-[1.1fr_0.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					align: "left",
					label: "contact way",
					title: "Other Ways to Reach Us"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lead max-w-xl text-ink-soft lg:pb-2",
						children: "Some people like to write. Some like to talk. Either works for us. Email, phone, or a quick call whichever suits you best."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-12 grid gap-4 md:grid-cols-3",
				children: ways.map((way, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					as: "li",
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: way.href,
						className: "flex h-full flex-col gap-6 rounded-[16px] bg-sand p-6 transition-transform duration-300 hover:-translate-y-0.5",
						...way.href.startsWith("http") ? {
							target: "_blank",
							rel: "noreferrer"
						} : {},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-12 place-items-center rounded-[6px] bg-background text-ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(way.icon, {
								className: "size-5",
								strokeWidth: 1.5
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-2xl tracking-tight text-ink",
							children: way.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block text-ink-soft",
							children: way.label
						})] })]
					})
				}, way.label))
			})]
		})
	})] });
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex flex-col gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-eyebrow text-ink-soft",
			children: label
		}), children]
	});
}
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { ContactPage as component };
