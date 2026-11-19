import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { r as cn } from "./PageTransition-Dkti0fsL.mjs";
import { i as faqs, t as Reveal } from "./Reveal-II7hFHQt.mjs";
import { a as Plus } from "../_libs/lucide-react.mjs";
import { r as SectionHeading } from "./FinalCta-BYCIocI0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Faq-DpdOsVNY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Faq() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[846px] px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				label: "FAQ",
				title: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					"Frequently Asked",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"Question"
				] }),
				text: "Everything you need to know before you pick a trip. Still unsure? Talk to a real person — we reply within a day."
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-16 flex flex-col gap-3",
				children: faqs.map((f, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						as: "li",
						delay: i * 50,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-[20px] bg-sand transition-colors hover:bg-sand-strong/70",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								"aria-expanded": isOpen,
								onClick: () => setOpen(isOpen ? null : i),
								className: "flex w-full items-center gap-4 p-4 text-left",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "grid size-12 shrink-0 place-items-center rounded-full bg-background font-mono text-xs text-ink",
										children: String(i + 1).padStart(2, "0")
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "flex-1 text-xl tracking-tight text-ink md:text-2xl",
										children: f.q
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: cn("size-6 shrink-0 text-ink transition-transform duration-500", isOpen && "rotate-45") })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: cn("grid transition-all duration-500 ease-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "overflow-hidden pl-20 pr-12 text-ink-soft",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block pb-6 leading-relaxed",
										children: f.a
									})
								})
							})]
						})
					}, f.q);
				})
			})]
		})
	});
}
//#endregion
export { Faq as t };
