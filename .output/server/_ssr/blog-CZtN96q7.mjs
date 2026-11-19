import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as media } from "./PageTransition-Dkti0fsL.mjs";
import { t as FinalCta } from "./FinalCta-BYCIocI0.mjs";
import { t as PageHeader } from "./PageHeader-6yxfsWlq.mjs";
import { t as Journal } from "./Journal-Cm4rumD7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/blog-CZtN96q7.js
var import_jsx_runtime = require_jsx_runtime();
function BlogPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			label: "Journal",
			title: "Insights & News",
			text: "Practical trip guides, honest destination notes, and the occasional story from a guide who’s been there a hundred times.",
			image: media.marrakech,
			imageAlt: "Desert cactus and wildflowers before blue mountains"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Journal, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { BlogPage as component };
