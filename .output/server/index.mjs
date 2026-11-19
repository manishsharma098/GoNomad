globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/favicon.png": {
		"type": "image/png",
		"etag": "\"107e-PhDuU2hWWezw+WO3qFYZvgBNqo4\"",
		"mtime": "2026-11-19T11:29:26.749Z",
		"size": 4222,
		"path": "../public/favicon.png"
	},
	"/assets/ArrowButton-BvZR8S55.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"321-0MEV37716/SCB+ONn6jQlarFDU4\"",
		"mtime": "2026-11-19T11:29:26.372Z",
		"size": 801,
		"path": "../public/assets/ArrowButton-BvZR8S55.js"
	},
	"/assets/Faq-oc354wRc.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"71d-OBZs/201kvhCUE9frxTNh/jW7wE\"",
		"mtime": "2026-11-19T11:29:26.372Z",
		"size": 1821,
		"path": "../public/assets/Faq-oc354wRc.js"
	},
	"/assets/FinalCta-Dvpw4gZf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9e6-l6DbCGSxksBlBSmKbbcKNxexZVo\"",
		"mtime": "2026-11-19T11:29:26.372Z",
		"size": 2534,
		"path": "../public/assets/FinalCta-Dvpw4gZf.js"
	},
	"/assets/Journal-NFathVEi.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"52c-eg1BaCviHiAYyhAqMZF1EA/PqGY\"",
		"mtime": "2026-11-19T11:29:26.372Z",
		"size": 1324,
		"path": "../public/assets/Journal-NFathVEi.js"
	},
	"/assets/PageHeader-DZUpHdKA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"341-8+X5/abwmL2zN/F2aT2tpYy1ukw\"",
		"mtime": "2026-11-19T11:29:26.372Z",
		"size": 833,
		"path": "../public/assets/PageHeader-DZUpHdKA.js"
	},
	"/GoNomad Flight Pin Logo.png": {
		"type": "image/png",
		"etag": "\"446b7-dNErXiw8zwzcN8EEueX2tB37f54\"",
		"mtime": "2026-11-19T11:29:26.749Z",
		"size": 280247,
		"path": "../public/GoNomad Flight Pin Logo.png"
	},
	"/assets/Testimonials-Coz0jlFl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1495-FGg6RoZuV21fHW6Ri748gqFYLaI\"",
		"mtime": "2026-11-19T11:29:26.372Z",
		"size": 5269,
		"path": "../public/assets/Testimonials-Coz0jlFl.js"
	},
	"/assets/TripCard-3kB3OZzS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1767-so7SaSLMRmH9DZFbfguOgIumgR8\"",
		"mtime": "2026-11-19T11:29:26.372Z",
		"size": 5991,
		"path": "../public/assets/TripCard-3kB3OZzS.js"
	},
	"/assets/about-HWTwTF9G.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2b0-m14ZDs2s04vP4bC3ynHd3TNrcKg\"",
		"mtime": "2026-11-19T11:29:26.372Z",
		"size": 688,
		"path": "../public/assets/about-HWTwTF9G.js"
	},
	"/assets/blog-CXtcHnCs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"263-ptA4d/bJhP6v5N0eeqkA9utyc3s\"",
		"mtime": "2026-11-19T11:29:26.372Z",
		"size": 611,
		"path": "../public/assets/blog-CXtcHnCs.js"
	},
	"/assets/contact-BbgyOOPT.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1d0e-YQC+xHObkYnySfYE1s3aCJ4yeDs\"",
		"mtime": "2026-11-19T11:29:26.373Z",
		"size": 7438,
		"path": "../public/assets/contact-BbgyOOPT.js"
	},
	"/assets/destination-Dp0KhI6J.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9a-M8YjTSQfE8WnCvWNWOMcU9DB88Q\"",
		"mtime": "2026-11-19T11:29:26.373Z",
		"size": 154,
		"path": "../public/assets/destination-Dp0KhI6J.js"
	},
	"/assets/destination._tripId-D_kfVO8E.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2275-eHHqFS/MtWYF7iJOjBpHsbJgXCc\"",
		"mtime": "2026-11-19T11:29:26.373Z",
		"size": 8821,
		"path": "../public/assets/destination._tripId-D_kfVO8E.js"
	},
	"/assets/destination.index-CnzyXN9m.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"be1-WLYTnGaPOPbPZAFgO8O/u/L4jes\"",
		"mtime": "2026-11-19T11:29:26.373Z",
		"size": 3041,
		"path": "../public/assets/destination.index-CnzyXN9m.js"
	},
	"/assets/PageTransition-DxU9bWd0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a281-6wxlydOdn+Ay2LcyGgFLGAG+aCg\"",
		"mtime": "2026-11-19T11:29:26.372Z",
		"size": 41601,
		"path": "../public/assets/PageTransition-DxU9bWd0.js"
	},
	"/assets/routes-B5iCX6HA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"24b2-vtfvRhuqP1eUw2PFyrzi2jIxNQM\"",
		"mtime": "2026-11-19T11:29:26.373Z",
		"size": 9394,
		"path": "../public/assets/routes-B5iCX6HA.js"
	},
	"/assets/star-DKvSUwVY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1cd-Wq9EFjoa07EaBARizVNC2vxR/R8\"",
		"mtime": "2026-11-19T11:29:26.373Z",
		"size": 461,
		"path": "../public/assets/star-DKvSUwVY.js"
	},
	"/assets/styles-T5MWurKh.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"c5a9-0hlEJJ2H0YRVPdO0bQoH7EFjfO4\"",
		"mtime": "2026-11-19T11:29:26.373Z",
		"size": 50601,
		"path": "../public/assets/styles-T5MWurKh.css"
	},
	"/assets/trips-DAI38bDV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1112-0Gii5+pHbv1Tveg74nq+13UTY1I\"",
		"mtime": "2026-11-19T11:29:26.373Z",
		"size": 4370,
		"path": "../public/assets/trips-DAI38bDV.js"
	},
	"/assets/useSelector-BcTnCC3_.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2ac1-Mcc5zfUDnXrZ5K3Bqz6rWmQmJLc\"",
		"mtime": "2026-11-19T11:29:26.373Z",
		"size": 10945,
		"path": "../public/assets/useSelector-BcTnCC3_.js"
	},
	"/assets/gonomad/avatar-1.png": {
		"type": "image/png",
		"etag": "\"19f7-jbql0GpJnFYmcW7251UnRPgeC9k\"",
		"mtime": "2026-11-19T11:29:26.648Z",
		"size": 6647,
		"path": "../public/assets/gonomad/avatar-1.png"
	},
	"/assets/gonomad/avatar-1.png.asset.json": {
		"type": "application/json",
		"etag": "\"28-If3TKVk1gUw7ERnxJcbjMGMEJNM\"",
		"mtime": "2026-11-19T11:29:26.648Z",
		"size": 40,
		"path": "../public/assets/gonomad/avatar-1.png.asset.json"
	},
	"/assets/gonomad/avatar-2.png": {
		"type": "image/png",
		"etag": "\"16c4-8rpYqriXc/8to2DrGm2FQpkpIIs\"",
		"mtime": "2026-11-19T11:29:26.648Z",
		"size": 5828,
		"path": "../public/assets/gonomad/avatar-2.png"
	},
	"/assets/index-DqOatTtJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"61642-VI1tHRyaCCzttnobHDoRkDHuzCw\"",
		"mtime": "2026-11-19T11:29:26.372Z",
		"size": 398914,
		"path": "../public/assets/index-DqOatTtJ.js"
	},
	"/assets/gonomad/avatar-2.png.asset.json": {
		"type": "application/json",
		"etag": "\"28-a3L97sk3bZXLczsqeY/gOrE1wVs\"",
		"mtime": "2026-11-19T11:29:26.650Z",
		"size": 40,
		"path": "../public/assets/gonomad/avatar-2.png.asset.json"
	},
	"/assets/gonomad/avatar-3.png": {
		"type": "image/png",
		"etag": "\"199d-br229edInzz2R+jnLPWRlQJPpFA\"",
		"mtime": "2026-11-19T11:29:26.648Z",
		"size": 6557,
		"path": "../public/assets/gonomad/avatar-3.png"
	},
	"/assets/gonomad/avatar-3.png.asset.json": {
		"type": "application/json",
		"etag": "\"28-YTu0iiTHap/fPfQzJK0FpP2xqGM\"",
		"mtime": "2026-11-19T11:29:26.648Z",
		"size": 40,
		"path": "../public/assets/gonomad/avatar-3.png.asset.json"
	},
	"/assets/gonomad/canyon-river.png.asset.json": {
		"type": "application/json",
		"etag": "\"2d-jDa6nB5Zt/GQSxJYUd/NIXYsYEA\"",
		"mtime": "2026-11-19T11:29:26.648Z",
		"size": 45,
		"path": "../public/assets/gonomad/canyon-river.png.asset.json"
	},
	"/assets/gonomad/coast-beach.png.asset.json": {
		"type": "application/json",
		"etag": "\"2c-V2U1E/8wCfBKLwvu57aNwxKIYzg\"",
		"mtime": "2026-11-19T11:29:26.648Z",
		"size": 44,
		"path": "../public/assets/gonomad/coast-beach.png.asset.json"
	},
	"/assets/gonomad/coast-beach.jpeg": {
		"type": "image/jpeg",
		"etag": "\"1998f-wUJZuzhL0FdJL2yQYU5wf2+R5ZM\"",
		"mtime": "2026-11-19T11:29:26.650Z",
		"size": 104847,
		"path": "../public/assets/gonomad/coast-beach.jpeg"
	},
	"/assets/gonomad/cypress-coast.png.asset.json": {
		"type": "application/json",
		"etag": "\"2e-ZiG0MdoXQ2/lK7LhTtRW33TG9+A\"",
		"mtime": "2026-11-19T11:29:26.649Z",
		"size": 46,
		"path": "../public/assets/gonomad/cypress-coast.png.asset.json"
	},
	"/assets/gonomad/daniel.jpeg": {
		"type": "image/jpeg",
		"etag": "\"8e46-855kk7iboWtD5Oxk6hRvkcnZgU8\"",
		"mtime": "2026-11-19T11:29:26.650Z",
		"size": 36422,
		"path": "../public/assets/gonomad/daniel.jpeg"
	},
	"/assets/gonomad/daniel.png.asset.json": {
		"type": "application/json",
		"etag": "\"27-bvwKgsDn8SK2Nk9YEFy+r+N2wzw\"",
		"mtime": "2026-11-19T11:29:26.651Z",
		"size": 39,
		"path": "../public/assets/gonomad/daniel.png.asset.json"
	},
	"/assets/gonomad/desert-dune.jpeg": {
		"type": "image/jpeg",
		"etag": "\"445f7-jr/3Y6AzNJ4yDTX47avISLbbgxw\"",
		"mtime": "2026-11-19T11:29:26.659Z",
		"size": 280055,
		"path": "../public/assets/gonomad/desert-dune.jpeg"
	},
	"/assets/gonomad/desert-dune.png.asset.json": {
		"type": "application/json",
		"etag": "\"2c-VzxBQ0harEpigSjyrGaY8reB9gY\"",
		"mtime": "2026-11-19T11:29:26.651Z",
		"size": 44,
		"path": "../public/assets/gonomad/desert-dune.png.asset.json"
	},
	"/assets/gonomad/hero-butte.png.asset.json": {
		"type": "application/json",
		"etag": "\"2b-/XoGOvWeG/b/x2tZFKfO/UgP30g\"",
		"mtime": "2026-11-19T11:29:26.659Z",
		"size": 43,
		"path": "../public/assets/gonomad/hero-butte.png.asset.json"
	},
	"/assets/gonomad/hero-butte.jpeg": {
		"type": "image/jpeg",
		"etag": "\"532b9-xzKVdjf3wAmhNYnOAr/bE2UDgm8\"",
		"mtime": "2026-11-19T11:29:26.660Z",
		"size": 340665,
		"path": "../public/assets/gonomad/hero-butte.jpeg"
	},
	"/assets/gonomad/marrakech.png.asset.json": {
		"type": "application/json",
		"etag": "\"2a-98FRGOnh8KgWDV3YrV3pFL0tIAM\"",
		"mtime": "2026-11-19T11:29:26.662Z",
		"size": 42,
		"path": "../public/assets/gonomad/marrakech.png.asset.json"
	},
	"/assets/gonomad/monument-valley.png.asset.json": {
		"type": "application/json",
		"etag": "\"30-SteTm+zi6b0ASLdYr49LrJ9xcjQ\"",
		"mtime": "2026-11-19T11:29:26.665Z",
		"size": 48,
		"path": "../public/assets/gonomad/monument-valley.png.asset.json"
	},
	"/assets/gonomad/mount-fuji.png.asset.json": {
		"type": "application/json",
		"etag": "\"2b-Ce83BjRiRGKHObaQtUBlCyBSHvc\"",
		"mtime": "2026-11-19T11:29:26.664Z",
		"size": 43,
		"path": "../public/assets/gonomad/mount-fuji.png.asset.json"
	},
	"/assets/gonomad/mount-fuji.jpeg": {
		"type": "image/jpeg",
		"etag": "\"5050f-2jkq7YGa6QY9Kx77M0sG4zd7O1A\"",
		"mtime": "2026-11-19T11:29:26.677Z",
		"size": 328975,
		"path": "../public/assets/gonomad/mount-fuji.jpeg"
	},
	"/assets/gonomad/patagonia.png.asset.json": {
		"type": "application/json",
		"etag": "\"2a-0a/0dExYFnWQnkLMMiunAJUYxPI\"",
		"mtime": "2026-11-19T11:29:26.665Z",
		"size": 42,
		"path": "../public/assets/gonomad/patagonia.png.asset.json"
	},
	"/assets/gonomad/patagonia.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2c50a-yiQ/Uuseq8VfLY0soIcQG62t1v4\"",
		"mtime": "2026-11-19T11:29:26.671Z",
		"size": 181514,
		"path": "../public/assets/gonomad/patagonia.jpeg"
	},
	"/assets/gonomad/rachel.png.asset.json": {
		"type": "application/json",
		"etag": "\"27-E8F7uVIJ7Cf/PpUUUk7T/goemNM\"",
		"mtime": "2026-11-19T11:29:26.677Z",
		"size": 39,
		"path": "../public/assets/gonomad/rachel.png.asset.json"
	},
	"/assets/gonomad/rachel.jpeg": {
		"type": "image/jpeg",
		"etag": "\"f720-4lUn2fNYju0w4bq1FZsHXJroozY\"",
		"mtime": "2026-11-19T11:29:26.677Z",
		"size": 63264,
		"path": "../public/assets/gonomad/rachel.jpeg"
	},
	"/assets/gonomad/canyon-river.jpeg": {
		"type": "image/jpeg",
		"etag": "\"a0222-Y8gWuNc0oTC/ILyAu5ip2QXIviM\"",
		"mtime": "2026-11-19T11:29:26.663Z",
		"size": 655906,
		"path": "../public/assets/gonomad/canyon-river.jpeg"
	},
	"/assets/gonomad/cypress-coast.jpeg": {
		"type": "image/jpeg",
		"etag": "\"849c5-4HSB1+Gv2BryxgL4fUr8eXOOyA4\"",
		"mtime": "2026-11-19T11:29:26.661Z",
		"size": 543173,
		"path": "../public/assets/gonomad/cypress-coast.jpeg"
	},
	"/assets/gonomad/marrakech.jpeg": {
		"type": "image/jpeg",
		"etag": "\"965d0-nQC9RzpZgFhP30LwhAfA8CmmgrQ\"",
		"mtime": "2026-11-19T11:29:26.680Z",
		"size": 615888,
		"path": "../public/assets/gonomad/marrakech.jpeg"
	},
	"/assets/gonomad/monument-valley.jpeg": {
		"type": "image/jpeg",
		"etag": "\"ae314-YL+LRHv2udj38GT4cWN85ALiDdg\"",
		"mtime": "2026-11-19T11:29:26.688Z",
		"size": 713492,
		"path": "../public/assets/gonomad/monument-valley.jpeg"
	},
	"/assets/gonomad/rainbow-hill.webp.asset.json": {
		"type": "application/json",
		"etag": "\"2d-55aSXafk9ZKF6BEmSH7uj7a9HXc\"",
		"mtime": "2026-11-19T11:29:26.677Z",
		"size": 45,
		"path": "../public/assets/gonomad/rainbow-hill.webp.asset.json"
	},
	"/assets/gonomad/rainbow-hill.webp": {
		"type": "image/webp",
		"etag": "\"3b208-0Gs4y+QGFOJfPD+CRLYY+gIDpb4\"",
		"mtime": "2026-11-19T11:29:26.708Z",
		"size": 242184,
		"path": "../public/assets/gonomad/rainbow-hill.webp"
	},
	"/assets/gonomad/sea-stack.png.asset.json": {
		"type": "application/json",
		"etag": "\"2a-H4pAgSLEqKv//xW12m40Y4nJrZM\"",
		"mtime": "2026-11-19T11:29:26.679Z",
		"size": 42,
		"path": "../public/assets/gonomad/sea-stack.png.asset.json"
	},
	"/assets/gonomad/rio.avif.asset.json": {
		"type": "application/json",
		"etag": "\"2a-0a/0dExYFnWQnkLMMiunAJUYxPI\"",
		"mtime": "2026-11-19T11:29:26.678Z",
		"size": 42,
		"path": "../public/assets/gonomad/rio.avif.asset.json"
	},
	"/assets/gonomad/sea-stack.jpeg": {
		"type": "image/jpeg",
		"etag": "\"28bf9-fm5kAIj6EqVZlmo1lldXLua1Me0\"",
		"mtime": "2026-11-19T11:29:26.692Z",
		"size": 166905,
		"path": "../public/assets/gonomad/sea-stack.jpeg"
	},
	"/assets/gonomad/serengeti.png.asset.json": {
		"type": "application/json",
		"etag": "\"2a-yzjLF2lnO9Mqh/EHgpTsjx6A88E\"",
		"mtime": "2026-11-19T11:29:26.696Z",
		"size": 42,
		"path": "../public/assets/gonomad/serengeti.png.asset.json"
	},
	"/assets/gonomad/step-choose.png.asset.json": {
		"type": "application/json",
		"etag": "\"2b-Gm1SNRzNPtOWDFK7r4wlHU0e/LA\"",
		"mtime": "2026-11-19T11:29:26.696Z",
		"size": 43,
		"path": "../public/assets/gonomad/step-choose.png.asset.json"
	},
	"/assets/gonomad/sierra-granite.jpeg": {
		"type": "image/jpeg",
		"etag": "\"2af47-hTsiS6tZ2GAR+qbwWY5dIUHGtcU\"",
		"mtime": "2026-11-19T11:29:26.696Z",
		"size": 175943,
		"path": "../public/assets/gonomad/sierra-granite.jpeg"
	},
	"/assets/gonomad/step-go.jpeg": {
		"type": "image/jpeg",
		"etag": "\"20da5-TWJc6/mPjpRgMgSYFGzZrzsJg9g\"",
		"mtime": "2026-11-19T11:29:26.705Z",
		"size": 134565,
		"path": "../public/assets/gonomad/step-go.jpeg"
	},
	"/assets/gonomad/sierra-granite.png.asset.json": {
		"type": "application/json",
		"etag": "\"2f-cSiYdCcKGNRv9N9nyDxSLML8Al4\"",
		"mtime": "2026-11-19T11:29:26.697Z",
		"size": 47,
		"path": "../public/assets/gonomad/sierra-granite.png.asset.json"
	},
	"/assets/gonomad/step-go.png.asset.json": {
		"type": "application/json",
		"etag": "\"28-ZJwMq3FAJrwxE8JlSzRSXekrQ5s\"",
		"mtime": "2026-11-19T11:29:26.701Z",
		"size": 40,
		"path": "../public/assets/gonomad/step-go.png.asset.json"
	},
	"/assets/gonomad/serengeti.jpeg": {
		"type": "image/jpeg",
		"etag": "\"71408-O68K2jIgPXxquOmboDQHxego7yc\"",
		"mtime": "2026-11-19T11:29:26.700Z",
		"size": 463880,
		"path": "../public/assets/gonomad/serengeti.jpeg"
	},
	"/assets/gonomad/step-prepare.png.asset.json": {
		"type": "application/json",
		"etag": "\"2d-jxqX9BN0VziFqErrNyHY2imvsEo\"",
		"mtime": "2026-11-19T11:29:26.701Z",
		"size": 45,
		"path": "../public/assets/gonomad/step-prepare.png.asset.json"
	},
	"/assets/gonomad/step-reserve.png.asset.json": {
		"type": "application/json",
		"etag": "\"2c-RYPoKjc0mpvBJp06zZ5UoLlHCY0\"",
		"mtime": "2026-11-19T11:29:26.702Z",
		"size": 44,
		"path": "../public/assets/gonomad/step-reserve.png.asset.json"
	},
	"/assets/gonomad/step-prepare.jpeg": {
		"type": "image/jpeg",
		"etag": "\"13351-npRTj7bbZiYAcCt57uNxM+saE5U\"",
		"mtime": "2026-11-19T11:29:26.710Z",
		"size": 78673,
		"path": "../public/assets/gonomad/step-prepare.jpeg"
	},
	"/assets/gonomad/video-1.mp4.asset.json": {
		"type": "application/json",
		"etag": "\"27-3xnoEAfGz1BpODCyxzGAyX5KMCQ\"",
		"mtime": "2026-11-19T11:29:26.702Z",
		"size": 39,
		"path": "../public/assets/gonomad/video-1.mp4.asset.json"
	},
	"/assets/gonomad/step-choose.png": {
		"type": "image/png",
		"etag": "\"4d3b4-1kigMiQO/zDU4KDuy43QlMHb510\"",
		"mtime": "2026-11-19T11:29:26.701Z",
		"size": 316340,
		"path": "../public/assets/gonomad/step-choose.png"
	},
	"/assets/gonomad/video-2.mp4.asset.json": {
		"type": "application/json",
		"etag": "\"27-PNTrgjEHZ1dVU9UHxWdD+IjSJtw\"",
		"mtime": "2026-11-19T11:29:26.708Z",
		"size": 39,
		"path": "../public/assets/gonomad/video-2.mp4.asset.json"
	},
	"/assets/gonomad/step-reserve.png": {
		"type": "image/png",
		"etag": "\"5db47-Vbm2czLoPHYQ4S9TuiQBWvD+IRU\"",
		"mtime": "2026-11-19T11:29:26.721Z",
		"size": 383815,
		"path": "../public/assets/gonomad/step-reserve.png"
	},
	"/assets/gonomad/video-3.mp4.asset.json": {
		"type": "application/json",
		"etag": "\"27-mmMjVbaN/uYGOJsiShABkMJhqfk\"",
		"mtime": "2026-11-19T11:29:26.710Z",
		"size": 39,
		"path": "../public/assets/gonomad/video-3.mp4.asset.json"
	},
	"/assets/gonomad/yosemite-valley.png.asset.json": {
		"type": "application/json",
		"etag": "\"30-pJQ+LHb9dlooe9LcYDB841htmlU\"",
		"mtime": "2026-11-19T11:29:26.710Z",
		"size": 48,
		"path": "../public/assets/gonomad/yosemite-valley.png.asset.json"
	},
	"/assets/gonomad/yosemite-valley.jpeg": {
		"type": "image/jpeg",
		"etag": "\"482c7-BFRP4wYmjcmt4rg/SEUI9wbGKck\"",
		"mtime": "2026-11-19T11:29:26.732Z",
		"size": 295623,
		"path": "../public/assets/gonomad/yosemite-valley.jpeg"
	},
	"/assets/gonomad/video-2.mp4": {
		"type": "video/mp4",
		"etag": "\"4c7d28-5Zyvw/Cv8uYEu3sLhmox66CtbAM\"",
		"mtime": "2026-11-19T11:29:26.860Z",
		"size": 5012776,
		"path": "../public/assets/gonomad/video-2.mp4"
	},
	"/assets/gonomad/video-1.mp4": {
		"type": "video/mp4",
		"etag": "\"4b6e71-ZvhiMhUoeRWFzrwXqmjZxTwaIGM\"",
		"mtime": "2026-11-19T11:29:26.865Z",
		"size": 4943473,
		"path": "../public/assets/gonomad/video-1.mp4"
	},
	"/assets/gonomad/video-3.mp4": {
		"type": "video/mp4",
		"etag": "\"50cc18-7TxFdNyoZu4kvUzWuoGKrBNiE5s\"",
		"mtime": "2026-11-19T11:29:26.870Z",
		"size": 5295128,
		"path": "../public/assets/gonomad/video-3.mp4"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_6QBTgh = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_6QBTgh
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
