import { describe, expect, it, vi, beforeEach } from "vitest";
import { api } from "@/lib/api/request";
import { getCart, addToCart, removeCart } from "./cart.api";

vi.mock("@/lib/api/request", () => ({
	api: {
		get: vi.fn(),
		post: vi.fn(),
		delete: vi.fn(),
	},
}));

describe("Cart API test", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});
	it("Should user get Cart", async () => {
		const fakeCart = {
			cart: [],
		};

		vi.mocked(api.get).mockResolvedValue(fakeCart);

		const result = await getCart();

		expect(api.get).toHaveBeenCalledWith("/cart");

		expect(result).toEqual(fakeCart);
	});

	it("Should user add product to cart", async () => {
		const payload: CartPayload = {
			productId: "product-test",
			quantity: 1,
			size: 40,
		};

		const fakeCart = {
			cart: [],
		};

		vi.mocked(api.post).mockResolvedValue(fakeCart);
		const result = await addToCart(payload);
		expect(api.post).toHaveBeenCalledWith("/cart/add", payload);
		expect(result).toEqual(fakeCart);
	});

	it("Should user remove products from cart", async () => {
		const productId = "product-test";
		const size = 40;

		const fakeCart = {
			cart: [],
		};

		vi.mocked(api.delete).mockResolvedValue(fakeCart);
		const result = await removeCart(productId, size);
		expect(api.delete).toHaveBeenCalledWith(
			`/cart/remove/${productId}/${size}`,
		);
		expect(result).toEqual(fakeCart);
	});
});
