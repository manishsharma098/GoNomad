import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as TransitionLink, r as cn } from "./PageTransition-Dkti0fsL.mjs";
import { v as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ArrowButton-88YxMJzm.js
var import_jsx_runtime = require_jsx_runtime();
var styles = {
	dark: {
		shell: "bg-ink text-paper",
		dot: "bg-paper text-ink"
	},
	light: {
		shell: "bg-paper text-ink",
		dot: "bg-ink text-paper"
	}
};
/** Pill button with the round arrow badge on the right, as on the original site. */
function ArrowButton({ to, label, variant = "dark", className }) {
	const s = styles[variant];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TransitionLink, {
		to,
		className: cn("group inline-flex items-center gap-3 rounded-full py-1 pl-4 pr-1 font-ui text-base font-medium transition-transform duration-300 hover:-translate-y-0.5", s.shell, className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("grid size-12 place-items-center rounded-full transition-transform duration-500 group-hover:rotate-45", s.dot),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
				className: "size-6",
				strokeWidth: 1.75
			})
		})]
	});
}
//#endregion
export { ArrowButton as t };
