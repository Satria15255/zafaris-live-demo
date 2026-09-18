import { describe, expect, it, vi, beforeEach } from "vitest";
import { api } from "@/lib/api/request";
import { favoritesApi } from "./favorites.api";

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
	it("Should fetch current user's favorites", async () => {
		const fakeFavorites = {
			favorites: [],
		};

		vi.mocked(api.get).mockResolvedValue(fakeFavorites);

		const result = await favoritesApi.get();

		expect(api.get).toHaveBeenCalledWith("/favorites");

		expect(result).toEqual(fakeFavorites);
	});

	it("Should user add product to favorites", async () => {
		const productId = "product-=123";

		const fakeFavorites = {
			favorites: [],
		};

		vi.mocked(api.post).mockResolvedValue(fakeFavorites);

		const result = await favoritesApi.add(productId);

		expect(api.post).toHaveBeenCalledWith(`/favorites/${productId}`);

		expect(result).toEqual(fakeFavorites);
	});

	it("Should user remove product from favorites", async () => {
		const productId = "product-123";

		const fakeFavorites = {
			favorites: [],
		};

		vi.mocked(api.delete).mockResolvedValue(fakeFavorites);

		const result = await favoritesApi.remove(productId);

		expect(api.delete).toHaveBeenCalledWith(`/favorites/${productId}`);
		expect(result).toEqual(fakeFavorites);
	});
});
