import { n as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as lazyRouteComponent, b as Link, d as Scripts, f as HeadContent, g as Outlet, h as createRouter, p as useRouterState, v as createFileRoute, x as useRouter, y as createRootRouteWithContext } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as TransitionLink, r as cn, t as PageTransitionProvider } from "./PageTransition-Dkti0fsL.mjs";
import { a as footerColumns, l as navLinks, o as footerInfo, t as Reveal } from "./Reveal-II7hFHQt.mjs";
import { f as Luggage, l as Menu, t as X, v as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { t as Route$8 } from "./destination._tripId-BL4UGQ9j.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DDg1DdQp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-T5MWurKh.css";
var logoSrc = "/GoNomad%20Flight%20Pin%20Logo.png";
function LogoMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("grid size-9 shrink-0 overflow-hidden rounded-full", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: logoSrc,
			alt: "",
			className: "size-full origin-center scale-[1.48] object-cover"
		})
	});
}
function Wordmark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("font-ui text-[1.9rem] font-medium tracking-tight", className),
		children: "GoNomad"
	});
}
function Column({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-sans text-xl font-normal tracking-tight text-ink",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "flex flex-col gap-3 text-base text-ink-soft",
			children
		})]
	});
}
function Footer() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	const onSubmit = (e) => {
		e.preventDefault();
		if (!email.includes("@")) return;
		setSent(true);
		setEmail("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-sand",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-[1440px] overflow-hidden px-5 pt-16 md:px-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					"aria-hidden": "true",
					className: "select-none text-center font-display font-medium leading-[0.8] tracking-[-0.06em] text-wordmark",
					style: { fontSize: "clamp(5rem, 22vw, 20rem)" },
					children: "GoNomad"
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-20 grid gap-12 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2 text-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Luggage, {
								className: "size-6",
								strokeWidth: 1.75
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, { className: "text-2xl" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 leading-relaxed text-ink-soft",
							children: "Small-group tours for people who’d rather feel a place than rush through it. Twelve travelers, local guides, and trips built with room to breathe. And time to let the moments find you. Because the best stories aren’t scheduled."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:justify-self-end md:w-full md:max-w-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl text-ink",
								children: "Subscribe our newsletter"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-ink-soft",
								children: "New departures, early-bird fares, and stories from the road. Sent once a month, never more."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
								onSubmit,
								className: "mt-6 flex items-center rounded-full bg-field p-1 pl-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: "newsletter",
										className: "sr-only",
										children: "Email"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "newsletter",
										type: "email",
										required: true,
										value: email,
										onChange: (e) => {
											setEmail(e.target.value);
											setSent(false);
										},
										placeholder: sent ? "Thanks — you’re on the list!" : "Enter your email here...",
										className: "min-w-0 flex-1 bg-transparent text-base text-ink outline-none placeholder:text-ink-soft"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "submit",
										"aria-label": "Subscribe",
										className: "grid size-11 shrink-0 place-items-center rounded-full bg-ink text-paper transition-transform hover:rotate-45",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-5" })
									})
								]
							})
						]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-16 grid grid-cols-2 gap-10 sm:grid-cols-3",
					children: [
						footerColumns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Column, {
							title: col.title,
							children: [col.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransitionLink, {
								to: l.to,
								className: "transition-colors hover:text-ink",
								children: l.label
							}) }, l.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "mailto:info@gonomad.com",
								className: "transition-colors hover:text-ink",
								children: "Contact Us"
							}) })]
						}, col.title)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
							title: "Destinations",
							children: footerInfo.destinations.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransitionLink, {
								to: "/destination",
								className: "transition-colors hover:text-ink",
								children: x
							}) }, x))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Column, {
							title: "Contact",
							children: footerInfo.contact.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: x }, x))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-20 pb-10 text-sm text-ink-soft",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["All rights reserved ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-ink",
						children: "©2026 GoNomad Inc."
					})] })
				})
			]
		})
	});
}
function Navbar() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-6 md:pt-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			className: "w-full max-w-[846px] rounded-[40px] bg-sand/90 p-1.5 shadow-[var(--shadow-soft)] backdrop-blur-xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TransitionLink, {
						to: "/",
						"aria-label": "GoNomad home",
						className: "flex items-center gap-2 text-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogoMark, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Wordmark, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "hidden items-center gap-7 md:flex",
						children: navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransitionLink, {
							to: l.to,
							className: cn("font-ui text-sm font-medium transition-opacity hover:opacity-60", pathname === l.to ? "text-ink" : "text-ink/80"),
							children: l.label
						}) }, l.to))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransitionLink, {
						to: "/contact",
						className: "hidden rounded-full bg-ink px-5 py-3 font-ui text-base font-medium text-paper transition-transform hover:-translate-y-0.5 md:inline-flex",
						children: "Plan a Trip Now"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						className: "grid size-11 place-items-center rounded-full bg-ink text-paper md:hidden",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("grid transition-all duration-500 md:hidden", open ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"),
				inert: !open,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "flex flex-col gap-1 overflow-hidden px-4",
					children: [navLinks.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "first:pt-4",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransitionLink, {
							to: l.to,
							onNavigate: () => setOpen(false),
							className: "block py-2 font-ui text-2xl font-medium text-ink",
							children: l.label
						})
					}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "pb-4 pt-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransitionLink, {
							to: "/contact",
							onNavigate: () => setOpen(false),
							className: "flex justify-center rounded-full bg-ink px-5 py-3 font-ui font-medium text-paper",
							children: "Plan a Trip Now"
						})
					})]
				})
			})]
		})
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageTransitionProvider, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "GoNomad — Small-group travel without limits" },
			{
				name: "description",
				content: "Private, low-impact small-group trips led by local guides. Twelve travelers max."
			},
			{
				property: "og:site_name",
				content: "GoNomad"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.png",
				type: "image/png"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600&family=Geist+Mono:wght@400;500&family=Instrument+Sans:wght@400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var $$splitComponentImporter$6 = () => import("./routes-BzTQGjwS.mjs");
var Route$6 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "GoNomad — Travel Without Limits" },
		{
			name: "description",
			content: "Private, low-impact escapes to the world’s most serene destinations, led by local experts in groups of twelve or fewer."
		},
		{
			property: "og:title",
			content: "GoNomad — Travel Without Limits"
		},
		{
			property: "og:description",
			content: "Small-group trips in 40+ countries, led by local guides. Find your next trip."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./about-DHjEoVgE.mjs");
var Route$5 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About GoNomad — Who We Are" },
		{
			name: "description",
			content: "Why we build slow, small-group trips with local guides — and how a trip with us works."
		},
		{
			property: "og:title",
			content: "About GoNomad — Who We Are"
		},
		{
			property: "og:description",
			content: "Fewer stops, longer stays and local guides. Meet the people behind GoNomad."
		},
		{
			property: "og:type",
			content: "article"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./blog-CZtN96q7.mjs");
var Route$4 = createFileRoute("/blog")({
	head: () => ({ meta: [
		{ title: "Journal — Travel guides & stories | GoNomad" },
		{
			name: "description",
			content: "Practical trip guides, honest destination notes and stories from our local guides."
		},
		{
			property: "og:title",
			content: "Journal — Travel guides & stories | GoNomad"
		},
		{
			property: "og:description",
			content: "Where to eat, walk and slow down — written by guides who’ve been there a hundred times."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-DrnuBVoW.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact GoNomad — Where to go?" },
		{
			name: "description",
			content: "Tell us where you want to travel. Real people, real replies, usually within a day."
		},
		{
			property: "og:title",
			content: "Contact GoNomad — Where to go?"
		},
		{
			property: "og:description",
			content: "Send a message, call, or email. We’ll help you pick the trip."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./destination-76lPgqtD.mjs");
var Route$2 = createFileRoute("/destination")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./trips-eA-Vidj8.mjs");
var Route$1 = createFileRoute("/trips")({
	head: () => ({ meta: [
		{ title: "Trips — Small-group tours | GoNomad" },
		{
			name: "description",
			content: "Browse small-group trips to Morocco, Utah, Yosemite, Patagonia and more. Twelve travelers max."
		},
		{
			property: "og:title",
			content: "Trips — Small-group tours | GoNomad"
		},
		{
			property: "og:description",
			content: "Filter by country, sort by price or rating, and book your next small-group trip."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./destination.index-Cwf6nTy9.mjs");
var Route = createFileRoute("/destination/")({
	head: () => ({ meta: [
		{ title: "Places — Where next? | GoNomad" },
		{
			name: "description",
			content: "Pick a place. See the photo, then the small-group trips that start there."
		},
		{
			property: "og:title",
			content: "Places — Where next? | GoNomad"
		},
		{
			property: "og:description",
			content: "Japan, Morocco, Patagonia, the Serengeti, and more."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$6.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$5.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var BlogRoute = Route$4.update({
	id: "/blog",
	path: "/blog",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var DestinationRoute = Route$2.update({
	id: "/destination",
	path: "/destination",
	getParentRoute: () => Route$7
});
var TripsRoute = Route$1.update({
	id: "/trips",
	path: "/trips",
	getParentRoute: () => Route$7
});
var DestinationIndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => DestinationRoute
});
var DestinationRouteChildren = {
	DestinationTripIdRoute: Route$8.update({
		id: "/$tripId",
		path: "/$tripId",
		getParentRoute: () => DestinationRoute
	}),
	DestinationIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	BlogRoute,
	ContactRoute,
	DestinationRoute: DestinationRoute._addFileChildren(DestinationRouteChildren),
	TripsRoute
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
