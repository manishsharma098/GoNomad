import { describe, expect, it } from "vitest";

import { trips } from "@/app/data/site";
import { filterAndSortTrips, tripCountries } from "./trips";

describe("trip filters", () => {
  it("lists each country once after All", () => {
    const countries = tripCountries(trips);
    expect(countries[0]).toBe("All");
    expect(new Set(countries).size).toBe(countries.length);
    expect(countries).toEqual(expect.arrayContaining(["Morocco", "USA", "Chile"]));
  });

  it("shows only USA trips when USA is picked", () => {
    const usa = filterAndSortTrips(trips, "USA", "featured");
    expect(usa.length).toBeGreaterThan(0);
    expect(usa.every((t) => t.country === "USA")).toBe(true);
  });

  it("orders by cheapest first", () => {
    const prices = filterAndSortTrips(trips, "All", "price-asc").map((t) => t.price);
    const sorted = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sorted);
  });

  it("shows only the chosen category", () => {
    const hiking = filterAndSortTrips(trips, "All", "featured", "Hiking");
    expect(hiking.length).toBeGreaterThan(0);
    expect(hiking.every((t) => t.category === "Hiking")).toBe(true);
  });
});
