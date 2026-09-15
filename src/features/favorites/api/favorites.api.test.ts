import { describe, expect, it } from "vitest";
import { favoritesApi } from "./favorites.api";

describe("Should get user favorites product", () => {
	it("GEt favorites  product list", async () => {
		const response = await favoritesApi.getAll();
		if (response.favorites === 0) {
			return;
		}
		expect(response).toHaveAtribute("message");
		expect(typeof response.message).toBe("string");
		expect(typeof response.favorites).toBe("string");
	});
});
