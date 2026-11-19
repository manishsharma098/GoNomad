import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { b as Link, p as useRouterState, x as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as extendTailwindMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageTransition-Dkti0fsL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var media = {
	heroButte: { url: "/assets/gonomad/hero-butte.jpeg" }.url,
	yosemiteValley: { url: "/assets/gonomad/yosemite-valley.jpeg" }.url,
	seaStack: { url: "/assets/gonomad/sea-stack.jpeg" }.url,
	coastBeach: { url: "/assets/gonomad/coast-beach.jpeg" }.url,
	cypressCoast: { url: "/assets/gonomad/cypress-coast.jpeg" }.url,
	desertDune: { url: "/assets/gonomad/desert-dune.jpeg" }.url,
	mountFuji: { url: "/assets/gonomad/mount-fuji.jpeg" }.url,
	rainbowHill: { url: "/assets/gonomad/rainbow-hill.webp" }.url,
	rio: { url: "/assets/gonomad/patagonia.jpeg" }.url,
	serengeti: { url: "/assets/gonomad/serengeti.jpeg" }.url,
	marrakech: { url: "/assets/gonomad/marrakech.jpeg" }.url,
	monumentValley: { url: "/assets/gonomad/monument-valley.jpeg" }.url,
	canyonRiver: { url: "/assets/gonomad/canyon-river.jpeg" }.url,
	patagonia: { url: "/assets/gonomad/patagonia.jpeg" }.url,
	sierraGranite: { url: "/assets/gonomad/sierra-granite.jpeg" }.url,
	stepChoose: { url: "/assets/gonomad/step-choose.png" }.url,
	stepReserve: { url: "/assets/gonomad/step-reserve.png" }.url,
	stepPrepare: { url: "/assets/gonomad/step-prepare.jpeg" }.url,
	stepGo: { url: "/assets/gonomad/step-go.jpeg" }.url,
	avatar1: { url: "/assets/gonomad/avatar-1.png" }.url,
	avatar2: { url: "/assets/gonomad/avatar-2.png" }.url,
	avatar3: { url: "/assets/gonomad/avatar-3.png" }.url,
	rachel: { url: "/assets/gonomad/rachel.jpeg" }.url,
	daniel: { url: "/assets/gonomad/daniel.jpeg" }.url,
	video1: { url: "/assets/gonomad/video-1.mp4" }.url,
	video2: { url: "/assets/gonomad/video-2.mp4" }.url,
	video3: { url: "/assets/gonomad/video-3.mp4" }.url
};
var twMerge = extendTailwindMerge({ extend: { classGroups: { "font-size": [{ text: [
	"display-xl",
	"display",
	"eyebrow",
	"lead"
] }] } } });
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var FLIP_MS = 700;
var TransitionContext = (0, import_react.createContext)({ go: () => {} });
function usePageTransition() {
	return (0, import_react.useContext)(TransitionContext);
}
/** Wraps the app and plays a two-sided flip (doors from left + right) between pages. */
function PageTransitionProvider({ children }) {
	const router = useRouter();
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [phase, setPhase] = (0, import_react.useState)("idle");
	const busy = (0, import_react.useRef)(false);
	const timers = (0, import_react.useRef)([]);
	(0, import_react.useEffect)(() => () => timers.current.forEach((t) => window.clearTimeout(t)), []);
	const go = (0, import_react.useCallback)((to, params) => {
		const target = params ? `/destination/${params.tripId}` : to;
		if (busy.current) return;
		if (target === pathname) {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
			return;
		}
		busy.current = true;
		setPhase("closing");
		timers.current.push(window.setTimeout(async () => {
			await router.navigate(params ? {
				to: "/destination/$tripId",
				params
			} : { to });
			window.scrollTo({
				top: 0,
				behavior: "instant"
			});
			timers.current.push(window.setTimeout(() => {
				setPhase("opening");
				timers.current.push(window.setTimeout(() => {
					setPhase("idle");
					busy.current = false;
				}, FLIP_MS));
			}, 120));
		}, FLIP_MS));
	}, [pathname, router]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TransitionContext.Provider, {
		value: { go },
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flip-stage",
			"data-phase": phase,
			"aria-hidden": "true",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flip-panel flip-panel--left",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flip-word pr-1",
					children: "Go"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flip-panel flip-panel--right",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "flip-word",
					children: "Nomad"
				})
			})]
		})]
	});
}
/** A real link (href, cmd-click still work) that plays the flip before changing page. */
function TransitionLink({ to, params, className, children, onNavigate, activeOptions, ...rest }) {
	const { go } = usePageTransition();
	const handleClick = (e) => {
		if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
		e.preventDefault();
		onNavigate?.();
		go(to, params);
	};
	const activity = activeOptions ? { activeOptions } : {};
	if (params) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/destination/$tripId",
		params,
		className,
		onClick: handleClick,
		...activity,
		...rest,
		children
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		className,
		onClick: handleClick,
		...activity,
		...rest,
		children
	});
}
//#endregion
export { media as i, TransitionLink as n, cn as r, PageTransitionProvider as t };
