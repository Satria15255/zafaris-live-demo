import { describe, expect, it, vi, beforeEach } from "vitest";
import { api } from "@/lib/api/request";
import { getFavorites, addFavorites, removeFavorites } from "./favorites.api";

vi.mock("@/lib/api/request", () => ({
	api: {
		get: vi.fn(),
		post: vi.fn(),
		delete: vi.fn(),
	},
}));

describe("Favorites APi", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});
	it("Should fetch current usere's favorites", async () => {
		const fakeFavorites = {
			favorites: [],
		};

		vi.mocked(api.get).mockResolvedValue(fakeFavorites);

		const result = await getFavorites();

		expect(api.get).toHaveBeenCalledWith("/favorites");

		expect(result).toEqual(fakeFavorites);
	});

	it("Should user add product to favorites", async () => {
		const productId = "product-=123";

		const fakeFavorites = {
			favorites: [],
		};

		vi.mocked(api.post).mockResolvedValue(fakeFavorites);

		const result = await addFavorites(productId);

		expect(api.post).toHaveBeenCalledWith(`/favorites/${productId}`);

		expect(result).toEqual(fakeFavorites);
	});

	it("Should user remove product from favorites", async () => {
		const productId = "product-123";

		const fakeFavorites = {
			favorites: [],
		};

		vi.mocked(api.delete).mockResolvedValue(fakeFavorites);

		const result = await removeFavorites(productId);

		expect(api.delete).toHaveBeenCalledWith(`/favorites/${productId}`);
		expect(result).toEqual(fakeFavorites);
	});
});
