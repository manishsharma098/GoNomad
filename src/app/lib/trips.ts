import type { Trip } from "@/app/data/site";

export type TripSort = "featured" | "price-asc" | "price-desc" | "rating" | "duration";

export const sortLabels: Record<TripSort, string> = {
  featured: "Featured",
  "price-asc": "Price: Low to High",
  "price-desc": "Price: High to Low",
  rating: "Top Rated",
  duration: "Shortest First",
};

export function tripCountries(trips: Trip[]) {
  return ["All", ...Array.from(new Set(trips.map((t) => t.country)))];
}

/** Filters trips by country and category ("All" keeps everything) and orders them. */
export function filterAndSortTrips(
  trips: Trip[],
  country: string,
  sort: TripSort,
  category = "All",
) {
  const list = trips.filter(
    (t) =>
      (country === "All" || t.country === country) &&
      (category === "All" || t.category === category),
  );
  switch (sort) {
    case "price-asc":
      return list.sort((a, b) => a.price - b.price);
    case "price-desc":
      return list.sort((a, b) => b.price - a.price);
    case "rating":
      return list.sort((a, b) => b.rating - a.rating);
    case "duration":
      return list.sort((a, b) => a.days - b.days);
    default:
      return list;
  }
}
