import { describe, expect, it } from "vitest";

import { productApi } from "./product.api";

describe("Product API Integration", () => {
	it("should fetch all products from backend", async () => {
		const products = await productApi.getAll();

		expect(Array.isArray(products)).toBe(true);
	});

	it("should return products with correct structure", async () => {
		const products = await productApi.getAll();

		if (products.length === 0) {
			return;
		}

		const product = products[0];

		expect(typeof product._id).toBe("string");
		expect(typeof product.name).toBe("string");
		expect(typeof product.price).toBe("number");

		expect(Array.isArray(product.variants)).toBe(true);
	});

	it("should fetch product by id", async () => {
		const products = await productApi.getAll();

		expect(products.length).toBeGreaterThan(0);

		const selectedProduct = products[0];

		const product = await productApi.getById(selectedProduct._id);

		expect(product._id).toBe(selectedProduct._id);

		expect(product).toHaveProperty("discountPercent");

		expect(product).toHaveProperty("discountPrice");

		expect(product).toHaveProperty("isDiscount");
	});

	it("should return maximum 9 latest products", async () => {
		const products = await productApi.getLatest();

		expect(products.length).toBeLessThanOrEqual(9);
	});

	it("should return latest products from newest to oldest", async () => {
		const products = await productApi.getLatest();

		for (let i = 0; i < products.length - 1; i++) {
			const current = new Date(products[i].createdAt).getTime();

			const next = new Date(products[i + 1].createdAt).getTime();

			expect(current).toBeGreaterThanOrEqual(next);
		}
	});

	it("should return only best seller products", async () => {
		const products = await productApi.getBestSeller();

		expect(products.length).toBeLessThanOrEqual(4);

		products.forEach((product) => {
			expect(product.isBestSeller).toBe(true);
		});
	});

	it("should search products", async () => {
		const allProducts = await productApi.getAll();

		expect(allProducts.length).toBeGreaterThan(0);

		const selectedProduct = allProducts[0];

		const query = selectedProduct.name.split(" ")[0];

		const result = await productApi.getAll({
			search: query,
		});

		expect(result.length).toBeGreaterThan(0);
	});

	it("should fetch daily discounts", async () => {
		const discounts = await productApi.getDiscountToday();

		expect(Array.isArray(discounts)).toBe(true);

		if (discounts.length === 0) {
			return;
		}

		const discount = discounts[0];

		expect(typeof discount.discountPercent).toBe("number");

		expect(typeof discount.discountPrice).toBe("number");

		expect(typeof discount.productId).toBe("object");

		expect(Array.isArray(discount.productId.variants)).toBe(true);
	});
});
