import { describe, it, expect, vi, beforeEach } from "vitest";
import { api } from "@/lib/api/request";
import { completedPayment } from "./payment.api";
import { OrderResponse } from "@/features/orders/test/order.fixture";

vi.mock("@/lib/api/request", () => ({
	api: {
		patch: vi.fn(),
	},
}));

describe("Paid the orders", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});
	it("Orders has paid", async () => {
		const id = "orders--123";
		const payload: PaymentPayload = {
			transferProvider: "Visa",
		};

		vi.mocked(api.patch).mockResolvedValue(OrderResponse);
		const result = await completedPayment(id, payload);
		expect(api.patch).toHaveBeenCalledWith(
			`/transactions/${id}/payment`,
			payload,
		);
		expect(result).toEqual(OrderResponse);
	});
});
