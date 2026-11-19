import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { i as media } from "./PageTransition-Dkti0fsL.mjs";
import { t as FinalCta } from "./FinalCta-BYCIocI0.mjs";
import { t as PageHeader } from "./PageHeader-6yxfsWlq.mjs";
import { n as HowItWorks, r as Testimonials, t as AboutIntro } from "./Testimonials-CJB-Axv6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-DHjEoVgE.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			label: "About Us",
			title: "Trips for people who’d rather feel a place",
			text: "GoNomad started on a Patagonia trail with a simple idea: fewer stops, longer stays, and guides who actually live there.",
			image: media.yosemiteValley,
			imageAlt: "Misty Yosemite valley at sunrise"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutIntro, { showButton: false }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinalCta, {})
	] });
}
//#endregion
export { AboutPage as component };
