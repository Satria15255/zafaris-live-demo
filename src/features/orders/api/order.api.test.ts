import { describe, it, expect, vi, beforeEach } from "vitest";
import { api } from "@/lib/api/request";
import { createOrder } from "./order.api";
import { orderPayload, orderResponse } from "../test/order.fixture";

vi.mock("@/lib/api/request", () => ({
	api: {
		get: vi.fn(),
		post: vi.fn(),
		delete: vi.fn(),
		patch: vi.fn(),
	},
}));

describe("Order  API  test", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});
	it("Should create a order", async () => {
		vi.mocked(api.post).mockResolvedValue(orderResponse);

		const result = await createOrder(orderPayload);

		expect(api.post).toHaveBeenCalledWith("/transactions", orderPayload);
		expect(result).toEqual(orderResponse);
	});
});
