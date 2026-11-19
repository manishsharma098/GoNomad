import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Reveal } from "./Reveal-II7hFHQt.mjs";
import { i as SectionLabel } from "./FinalCta-BYCIocI0.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHeader-6yxfsWlq.js
var import_jsx_runtime = require_jsx_runtime();
/** Intro block for inner pages: label, big title, short copy and a wide photo. */
function PageHeader({ label, title, text, image, imageAlt }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "pt-40 md:pt-52",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-4xl flex-col items-center gap-8 px-5 text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionLabel, { children: label }) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 100,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-display text-ink",
						children: title
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 150,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lead max-w-xl text-ink-soft",
						children: text
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
			delay: 200,
			className: "mx-auto mt-16 max-w-[1440px] px-5 md:px-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: imageAlt,
				className: "h-[52vh] min-h-[320px] w-full rounded-[32px] object-cover"
			})
		})]
	});
}
//#endregion
export { PageHeader as t };
