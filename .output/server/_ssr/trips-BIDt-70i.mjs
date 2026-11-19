import { i as media } from "./PageTransition-Dkti0fsL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/trips-BIDt-70i.js
var tripCategories = [
	"All",
	"Adventure",
	"Culture",
	"Beach",
	"Wildlife",
	"Food",
	"Hiking",
	"Wellness",
	"Photography",
	"Road Trips"
];
var included = [
	"Local guide from arrival to departure",
	"Stays, breakfasts, and most dinners",
	"Ground transport and tickets on the route",
	"Packing list, meeting point, and 24/7 support"
];
var trips = [
	{
		id: "marrakech",
		country: "Morocco",
		place: "Marrakech",
		category: "Culture",
		days: 8,
		rating: 4.8,
		price: 3550,
		title: "Marrakech & the Atlas Foothills",
		description: "A guide leads the full circuit, walked 40 times. Experience wind, granite, and quiet campsites.",
		story: "Eight slow days between the medina and the foothills. Mornings in the souks before the crowds, afternoons in villages where the guide grew up, and two nights in a quiet camp above the valley.",
		image: media.marrakech,
		tone: "olive",
		bestTime: "March to May, September to November",
		fitness: "Easy walks, three to four hours on the foothill day",
		group: "8 to 12 travelers",
		meeting: "Marrakech airport, arrivals hall",
		highlights: [
			"Dawn in the medina",
			"Atlas village lunch",
			"Two nights under the stars"
		],
		daysPlan: [
			{
				label: "Days 1–2",
				title: "The medina, slowly",
				text: "Riads, rooftops, and a food walk that skips the main square."
			},
			{
				label: "Days 3–5",
				title: "Into the foothills",
				text: "A short drive, then walking between villages with a local mule team for the bags."
			},
			{
				label: "Days 6–7",
				title: "Camp and quiet",
				text: "No schedule after breakfast. Tea, a ridge walk, and a long dinner."
			},
			{
				label: "Day 8",
				title: "Back to the city",
				text: "A late return and a free evening before flights."
			}
		],
		included
	},
	{
		id: "monument-valley",
		country: "USA",
		place: "Monument Valley",
		category: "Photography",
		days: 7,
		rating: 4.9,
		price: 3250,
		title: "Monument Valley & the Navajo Desert",
		description: "Sandstone buttes, Navajo-led walks, and nights under some of the darkest skies in the country.",
		story: "A photography trip timed for first and last light. A Navajo guide chooses the overlooks, and the group stays small enough that everyone gets the shot without standing in it.",
		image: media.monumentValley,
		tone: "rust",
		bestTime: "April, May, September, October",
		fitness: "Short walks and some uneven sand",
		group: "6 to 10 travelers",
		meeting: "Kayenta, hotel lobby at 7am",
		highlights: [
			"Sunrise buttes",
			"Navajo-led backcountry",
			"Night sky session"
		],
		daysPlan: [
			{
				label: "Days 1–2",
				title: "Learn the light",
				text: "Overlooks at dawn and a slow afternoon on the valley floor."
			},
			{
				label: "Days 3–5",
				title: "Off the loop road",
				text: "Guided walks into areas the scenic drive never reaches."
			},
			{
				label: "Day 6",
				title: "After dark",
				text: "A quiet ridge, long exposures, and hot drinks."
			},
			{
				label: "Day 7",
				title: "One last sunrise",
				text: "Pack up after the light, then a transfer back to Kayenta."
			}
		],
		included
	},
	{
		id: "utah",
		country: "USA",
		place: "Utah",
		category: "Adventure",
		days: 9,
		rating: 4.7,
		price: 3900,
		title: "Canyon Rivers of Utah",
		description: "Red-rock river bends, easy paddles, and canyon walks timed around the best light of the day.",
		story: "Paddling is easy and the days are built around the river. You float the calm bends, walk side canyons when the sun is high, and camp where the walls turn orange.",
		image: media.canyonRiver,
		tone: "amber",
		bestTime: "May, June, September",
		fitness: "Easy paddling. You should be fine getting in and out of a canoe.",
		group: "8 to 12 travelers",
		meeting: "Moab, riverside put-in",
		highlights: [
			"Calm-water paddles",
			"Side-canyon walks",
			"Camp on the river"
		],
		daysPlan: [
			{
				label: "Days 1–2",
				title: "On the water",
				text: "A short paddle to learn the boats, then a longer bend with a swim stop."
			},
			{
				label: "Days 3–6",
				title: "Deeper in",
				text: "Two camps, side hikes, and one layover day with nowhere to be."
			},
			{
				label: "Days 7–8",
				title: "The last walls",
				text: "The canyon narrows. Evenings are for dinner and the light on the rock."
			},
			{
				label: "Day 9",
				title: "Take-out",
				text: "A morning float and a transfer back to Moab."
			}
		],
		included
	},
	{
		id: "yosemite",
		country: "USA",
		place: "Yosemite",
		category: "Hiking",
		days: 8,
		rating: 4.9,
		price: 3700,
		title: "Yosemite Valley & the High Sierra",
		description: "Granite walls, alpine meadows, and quiet trails most visitors never reach.",
		story: "The valley is only the start. After two easy days under the walls, the group climbs to meadows where the day-trippers turn around.",
		image: media.yosemiteValley,
		tone: "moss",
		bestTime: "June to September",
		fitness: "One longer hike of about five hours. The rest are gentler.",
		group: "8 to 12 travelers",
		meeting: "Yosemite Valley lodge, morning of day 1",
		highlights: [
			"Valley floor at dawn",
			"High-country meadow",
			"A night above the crowds"
		],
		daysPlan: [
			{
				label: "Days 1–2",
				title: "The valley, early",
				text: "Waterfalls and short trails before the buses arrive."
			},
			{
				label: "Days 3–5",
				title: "Up to the meadows",
				text: "A steady climb, then two nights in a quieter camp."
			},
			{
				label: "Days 6–7",
				title: "Ridges and lakes",
				text: "Optional longer walk, or a lake day if your legs want a rest."
			},
			{
				label: "Day 8",
				title: "Down and out",
				text: "A slow descent and a transfer to the valley."
			}
		],
		included
	},
	{
		id: "patagonia",
		country: "Chile",
		place: "Torres del Paine",
		category: "Adventure",
		days: 10,
		rating: 4.9,
		price: 4450,
		title: "Patagonia Circuit",
		description: "Torres del Paine on foot, with the detours that made us start GoNomad in the first place.",
		story: "The trip that started GoNomad. Fewer viewpoints, longer stays, and the side valleys the standard circuit walks past. Weather decides the order. The guide decides when to wait it out.",
		image: media.patagonia,
		tone: "earth",
		bestTime: "November to March",
		fitness: "Walking days of four to six hours with a day pack",
		group: "8 to 12 travelers",
		meeting: "Puerto Natales, hotel lobby",
		highlights: [
			"The towers at sunrise",
			"A wind-day in camp",
			"Lakes most groups skip"
		],
		daysPlan: [
			{
				label: "Days 1–2",
				title: "Into the park",
				text: "Transfer, an easy walk, and a night to settle the kit."
			},
			{
				label: "Days 3–6",
				title: "The long valleys",
				text: "Refugios and one camp. One day is left open for weather."
			},
			{
				label: "Days 7–9",
				title: "The towers",
				text: "A pre-dawn start on the clearest morning of the week."
			},
			{
				label: "Day 10",
				title: "Back to town",
				text: "A scenic drive out and a last dinner in Puerto Natales."
			}
		],
		included
	},
	{
		id: "sierra",
		country: "USA",
		place: "High Sierra",
		category: "Hiking",
		days: 6,
		rating: 4.8,
		price: 2850,
		title: "Sierra Granite & Lakes",
		description: "Short, sunlit days among granite domes and alpine lakes, ideal for a first small-group trip.",
		story: "The short one. Days end by mid-afternoon, swims are encouraged, and nobody is racing an itinerary. A good first trip if you have never traveled in a small group.",
		image: media.sierraGranite,
		tone: "navy",
		bestTime: "July to September",
		fitness: "Easy to moderate. Walks stay under four hours.",
		group: "8 to 12 travelers",
		meeting: "Mammoth Lakes, town hotel",
		highlights: [
			"Granite domes",
			"Lake swims",
			"Short walking days"
		],
		daysPlan: [
			{
				label: "Days 1–2",
				title: "Find a rhythm",
				text: "Two short trails and a long lunch by the first lake."
			},
			{
				label: "Days 3–4",
				title: "Higher lakes",
				text: "A gentle climb and a free afternoon to swim or sit."
			},
			{
				label: "Day 5",
				title: "One dome",
				text: "The only bigger walk, with an early finish."
			},
			{
				label: "Day 6",
				title: "Out by noon",
				text: "Breakfast, a transfer, and flights from Mammoth or Reno."
			}
		],
		included
	},
	{
		id: "fuji-dawn",
		country: "Japan",
		place: "Mount Fuji",
		category: "Culture",
		days: 7,
		rating: 4.8,
		price: 4100,
		title: "Fuji, Lakes & a Quiet Onsen",
		description: "The mountain from the lakes, a small onsen town, and meals that take the whole evening.",
		story: "You do not climb Fuji. You live under it for a week: a lake inn, a day with a local potter, and one sunrise when the peak is clear.",
		image: media.mountFuji,
		tone: "navy",
		bestTime: "April, May, October, November",
		fitness: "Town walking and one optional lakeside path",
		group: "6 to 10 travelers",
		meeting: "Kawaguchiko station, north exit",
		highlights: [
			"Fuji at sunrise",
			"A potter’s studio",
			"Onsen evenings"
		],
		daysPlan: [
			{
				label: "Days 1–2",
				title: "The lake",
				text: "Check in, a shoreline walk, and the first clear view if the weather agrees."
			},
			{
				label: "Days 3–4",
				title: "Hands and kitchens",
				text: "A studio visit and a long dinner cooked with the inn."
			},
			{
				label: "Days 5–6",
				title: "Around the mountain",
				text: "Shrines, a forest path, and a free afternoon."
			},
			{
				label: "Day 7",
				title: "Last look",
				text: "Sunrise, then the train back toward Tokyo."
			}
		],
		included
	},
	{
		id: "serengeti",
		country: "Tanzania",
		place: "Serengeti",
		category: "Wildlife",
		days: 8,
		rating: 4.9,
		price: 5200,
		title: "Serengeti at Walking Pace",
		description: "Dawn drives, one walking safari, and camps that move with the herds.",
		story: "Not a checklist of animals. Two camps, long pauses when something is happening, and one morning on foot with a guide who knows when to stop talking.",
		image: media.serengeti,
		tone: "olive",
		bestTime: "June to October",
		fitness: "Mostly seated in the vehicle. The walk is two easy hours.",
		group: "6 to 8 travelers",
		meeting: "Arusha airport",
		highlights: [
			"Moving camps",
			"A morning on foot",
			"Sundowners on the plain"
		],
		daysPlan: [
			{
				label: "Days 1–2",
				title: "Into the park",
				text: "A bush flight and the first slow drive to camp."
			},
			{
				label: "Days 3–5",
				title: "Follow the light",
				text: "Dawn and dusk drives. Midday is for camp, shade, and lunch."
			},
			{
				label: "Day 6",
				title: "On foot",
				text: "A guided walk away from the vehicles."
			},
			{
				label: "Days 7–8",
				title: "Out",
				text: "One last morning drive, then the flight back to Arusha."
			}
		],
		included
	},
	{
		id: "bali-shore",
		country: "Indonesia",
		place: "Bali",
		category: "Beach",
		days: 7,
		rating: 4.6,
		price: 2950,
		title: "A Quiet Shore in North Bali",
		description: "Empty mornings on the sand, a fishing village, and no resort schedule.",
		story: "The north coast, not the south. You stay in a small lodge, swim when you want, and spend one day with fishers who leave before sunrise.",
		image: media.seaStack,
		tone: "moss",
		bestTime: "April to June, September",
		fitness: "None required. One optional coastal walk.",
		group: "8 to 12 travelers",
		meeting: "Lodging in Lovina, from noon on day 1",
		highlights: [
			"Sunrise with fishers",
			"Empty beach mornings",
			"A village lunch"
		],
		daysPlan: [
			{
				label: "Days 1–2",
				title: "Arrive and do little",
				text: "Settle in. The only plan is dinner."
			},
			{
				label: "Day 3",
				title: "Out with the boats",
				text: "An early start and back before the heat."
			},
			{
				label: "Days 4–6",
				title: "The coast is yours",
				text: "Swims, a market, and one short walk to a temple."
			},
			{
				label: "Day 7",
				title: "Leave late",
				text: "A slow morning and a transfer toward the airport."
			}
		],
		included
	},
	{
		id: "greek-coast",
		country: "Greece",
		place: "Peloponnese",
		category: "Beach",
		days: 8,
		rating: 4.7,
		price: 3650,
		title: "Coves of the Peloponnese",
		description: "Swimming coves, a hillside town, and dinners that start when the light goes.",
		story: "A week of coves you reach on foot, not by beach club. Evenings are in one town so you are not packing every day.",
		image: media.coastBeach,
		tone: "amber",
		bestTime: "May, June, September",
		fitness: "Short walks down to the water and back up",
		group: "8 to 12 travelers",
		meeting: "Kalamata airport",
		highlights: [
			"Cove swims",
			"One base for the week",
			"Long dinners"
		],
		daysPlan: [
			{
				label: "Days 1–2",
				title: "The town",
				text: "Arrive, walk the harbor, and learn the two beaches worth the path."
			},
			{
				label: "Days 3–5",
				title: "Coves",
				text: "A different cove each morning. Afternoons are free."
			},
			{
				label: "Days 6–7",
				title: "Inland for a day",
				text: "Olive groves and a ruin, then back to the water."
			},
			{
				label: "Day 8",
				title: "A last swim",
				text: "Morning in the sea, afternoon flight."
			}
		],
		included
	},
	{
		id: "rainbow-hill",
		country: "Peru",
		place: "Vinicunca",
		category: "Hiking",
		days: 6,
		rating: 4.7,
		price: 2750,
		title: "Rainbow Hill, the Quiet Way",
		description: "The colored ridge at first light, then valleys that the day tours never enter.",
		story: "Most people see the hill from a bus window at noon. You walk in early, then spend the rest of the week in the valleys behind it.",
		image: media.rainbowHill,
		tone: "rust",
		bestTime: "May to September",
		fitness: "One high walk of about four hours. Acclimatization day included.",
		group: "8 to 12 travelers",
		meeting: "Cusco, hotel courtyard",
		highlights: [
			"The ridge at dawn",
			"A day to acclimatize",
			"Valley villages"
		],
		daysPlan: [
			{
				label: "Days 1–2",
				title: "Cusco, slowly",
				text: "Altitude first. Short walks and a long sleep."
			},
			{
				label: "Day 3",
				title: "The hill",
				text: "A pre-dawn start and back down before the crowds."
			},
			{
				label: "Days 4–5",
				title: "The valleys",
				text: "Villages, a weaving family, and an easy trail."
			},
			{
				label: "Day 6",
				title: "Return",
				text: "A morning in Cusco and airport transfers."
			}
		],
		included
	},
	{
		id: "marrakech-table",
		country: "Morocco",
		place: "Marrakech",
		category: "Food",
		days: 6,
		rating: 4.8,
		price: 3100,
		title: "Marrakech at the Table",
		description: "Home kitchens, a spice market at opening, and no restaurant with a view.",
		story: "Six days of eating where the guide eats. A family kitchen, a bakery before dawn, and one long lunch in the foothills that takes the whole afternoon.",
		image: media.marrakech,
		tone: "amber",
		bestTime: "October to April",
		fitness: "City walking only",
		group: "6 to 10 travelers",
		meeting: "Marrakech riad, late afternoon of day 1",
		highlights: [
			"A home kitchen",
			"Spice market at opening",
			"One foothill lunch"
		],
		daysPlan: [
			{
				label: "Days 1–2",
				title: "The markets",
				text: "Breakfast with a baker and a slow pass through the spice stalls."
			},
			{
				label: "Days 3–4",
				title: "Cooking",
				text: "A family kitchen and a dinner you help finish."
			},
			{
				label: "Day 5",
				title: "Out of the city",
				text: "Lunch in the foothills, back by evening."
			},
			{
				label: "Day 6",
				title: "One more breakfast",
				text: "Coffee, pastries, and a transfer when you are ready."
			}
		],
		included
	},
	{
		id: "dune-road",
		country: "Morocco",
		place: "Sahara",
		category: "Road Trips",
		days: 9,
		rating: 4.6,
		price: 3400,
		title: "The Road to the Dunes",
		description: "A slow drive south, kasbah stops, and one night in a quiet desert camp.",
		story: "The drive is the trip. Short distances, long stops, and a camp that is not the big one by the parking lot.",
		image: media.desertDune,
		tone: "earth",
		bestTime: "October to April",
		fitness: "A soft sand walk to the camp. Nothing steep.",
		group: "8 to 12 travelers",
		meeting: "Marrakech, riad courtyard at 8am",
		highlights: [
			"Kasbah lunches",
			"A quiet dune camp",
			"No long driving days"
		],
		daysPlan: [
			{
				label: "Days 1–3",
				title: "South, slowly",
				text: "Two or three hours in the car, then the rest of the day on foot."
			},
			{
				label: "Days 4–6",
				title: "The dunes",
				text: "Camp, a sunset ridge, and a day with nothing planned."
			},
			{
				label: "Days 7–8",
				title: "The way back",
				text: "A different road, a gorge, and a last kasbah."
			},
			{
				label: "Day 9",
				title: "Marrakech",
				text: "Arrive by afternoon. The evening is free."
			}
		],
		included
	},
	{
		id: "cypress-quiet",
		country: "USA",
		place: "Big Sur",
		category: "Wellness",
		days: 5,
		rating: 4.8,
		price: 3200,
		title: "Five Quiet Days on the Cypress Coast",
		description: "Ocean air, easy trails, and a schedule with more blank space than plans.",
		story: "A short reset. Mornings outside, afternoons empty, and dinners at the inn. You leave with fewer photos and more sleep.",
		image: media.cypressCoast,
		tone: "navy",
		bestTime: "April, May, September, October",
		fitness: "Optional coastal walks. Rest is the point.",
		group: "6 to 10 travelers",
		meeting: "Carmel, inn lobby",
		highlights: [
			"Unscheduled afternoons",
			"Coastal walks",
			"Inn dinners"
		],
		daysPlan: [
			{
				label: "Day 1",
				title: "Arrive",
				text: "Check in and a short walk if you want one."
			},
			{
				label: "Days 2–3",
				title: "Nothing urgent",
				text: "A morning trail, then the day is yours."
			},
			{
				label: "Day 4",
				title: "The cypress ridge",
				text: "The one planned walk, finished by lunch."
			},
			{
				label: "Day 5",
				title: "Leave when you like",
				text: "Breakfast and a transfer toward Monterey or San Francisco."
			}
		],
		included
	},
	{
		id: "rio-slow",
		country: "Brazil",
		place: "Rio de Janeiro",
		category: "Culture",
		days: 6,
		rating: 4.5,
		price: 3050,
		title: "Rio Before the Beach Clubs",
		description: "Neighborhoods, a neighborhood football match, and the beach only in the morning.",
		story: "Rio with a guide who lives in a hillside neighborhood. The famous views happen, then you leave them and eat where he eats.",
		image: media.rio,
		tone: "rust",
		bestTime: "April to June, August, September",
		fitness: "City walking, including some hills",
		group: "8 to 12 travelers",
		meeting: "Rio hotel in Santa Teresa",
		highlights: [
			"A local neighborhood",
			"Morning swim",
			"A small football match"
		],
		daysPlan: [
			{
				label: "Days 1–2",
				title: "Santa Teresa",
				text: "Streets, a tram if it is running, and dinner nearby."
			},
			{
				label: "Day 3",
				title: "The views, early",
				text: "One famous lookout at opening time, then away."
			},
			{
				label: "Days 4–5",
				title: "The city",
				text: "A market, a match or music night, and a morning on the sand."
			},
			{
				label: "Day 6",
				title: "Out",
				text: "A late checkout and airport transfer."
			}
		],
		included
	},
	{
		id: "butte-road",
		country: "USA",
		place: "Southwest",
		category: "Road Trips",
		days: 8,
		rating: 4.7,
		price: 3600,
		title: "Buttes and Empty Highways",
		description: "Short drives between sandstone country, with nights in towns that shut early.",
		story: "A road trip where the driving is the quiet part. Two or three hours, then a walk, a diner, and a dark sky.",
		image: media.heroButte,
		tone: "olive",
		bestTime: "March to May, September, October",
		fitness: "Easy overlook walks",
		group: "8 to 12 travelers",
		meeting: "Flagstaff, downtown hotel",
		highlights: [
			"Short driving days",
			"Sandstone walks",
			"Small-town nights"
		],
		daysPlan: [
			{
				label: "Days 1–2",
				title: "Leave the city",
				text: "Out of Flagstaff and into the first buttes by lunch."
			},
			{
				label: "Days 3–5",
				title: "The empty miles",
				text: "A new overlook each day and nights in one-street towns."
			},
			{
				label: "Days 6–7",
				title: "A longer stay",
				text: "Two nights in one place so the car can rest."
			},
			{
				label: "Day 8",
				title: "Back",
				text: "A morning drive to Flagstaff."
			}
		],
		included
	},
	{
		id: "fuji-trail",
		country: "Japan",
		place: "Fuji Five Lakes",
		category: "Hiking",
		days: 5,
		rating: 4.6,
		price: 2900,
		title: "Lakeside Trails under Fuji",
		description: "Forest paths and lake loops, with the mountain in view when the cloud lifts.",
		story: "Short trails, onsen at the end of the day, and no summit attempt. For people who want to walk in Japan without a big expedition.",
		image: media.mountFuji,
		tone: "moss",
		bestTime: "May, June, October",
		fitness: "Daily walks of three to four hours",
		group: "8 to 12 travelers",
		meeting: "Kawaguchiko station",
		highlights: [
			"Forest paths",
			"Lake loops",
			"Onsen after the walk"
		],
		daysPlan: [
			{
				label: "Day 1",
				title: "Easy loop",
				text: "A shoreline path to shake out the journey."
			},
			{
				label: "Days 2–3",
				title: "Into the forest",
				text: "Two longer trails with picnic lunches."
			},
			{
				label: "Day 4",
				title: "A second lake",
				text: "A boat or a walk, depending on the weather."
			},
			{
				label: "Day 5",
				title: "Train out",
				text: "Breakfast and the line back toward Tokyo."
			}
		],
		included
	},
	{
		id: "serengeti-lens",
		country: "Tanzania",
		place: "Serengeti",
		category: "Photography",
		days: 9,
		rating: 4.9,
		price: 5600,
		title: "Serengeti for the Long Lens",
		description: "Vehicles that stop, seats by the window, and a guide who waits for the light.",
		story: "Built for cameras. Fewer miles, longer stops, and a vehicle with space for tripods. You will miss animals on purpose to stay with one scene.",
		image: media.serengeti,
		tone: "earth",
		bestTime: "June to October",
		fitness: "Vehicle-based, with short walks around camp",
		group: "4 to 6 travelers",
		meeting: "Arusha airport",
		highlights: [
			"Window seats for everyone",
			"Long stops",
			"Golden-hour only drives"
		],
		daysPlan: [
			{
				label: "Days 1–2",
				title: "Set the pace",
				text: "Into camp and a first drive that ends when the light goes."
			},
			{
				label: "Days 3–6",
				title: "Stay with the scene",
				text: "The guide picks one area a day instead of chasing sightings."
			},
			{
				label: "Days 7–8",
				title: "A second camp",
				text: "A move to different ground and two more dawns."
			},
			{
				label: "Day 9",
				title: "Fly out",
				text: "Morning light, then the bush plane."
			}
		],
		included
	}
];
function findTrip(id) {
	return trips.find((trip) => trip.id === id);
}
//#endregion
export { tripCategories as n, trips as r, findTrip as t };
