import { _ as lazyRouteComponent, v as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as findTrip } from "./trips-BIDt-70i.mjs";
import { t as findPlace } from "./places-CEaloSOL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/destination._tripId-BL4UGQ9j.js
var $$splitComponentImporter = () => import("./destination._tripId-ChnHyzxh.mjs");
var Route = createFileRoute("/destination/$tripId")({
	head: ({ params }) => {
		const place = findPlace(params.tripId);
		if (place) {
			const title = `${place.name} | GoNomad`;
			const description = place.intro;
			return { meta: [
				{ title },
				{
					name: "description",
					content: description
				},
				{
					property: "og:title",
					content: title
				},
				{
					property: "og:description",
					content: description
				},
				{
					property: "og:type",
					content: "article"
				},
				{
					name: "twitter:card",
					content: "summary_large_image"
				}
			] };
		}
		const trip = findTrip(params.tripId);
		const title = trip ? `${trip.title} | GoNomad` : "Trip | GoNomad";
		const description = trip?.description ?? "A small-group trip with a local guide.";
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
