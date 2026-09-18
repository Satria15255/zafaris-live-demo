import { voucherApi } from "./voucher.api";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { api } from "@/lib/api/request";

vi.mock("@/lib/api/request", () => ({
	api: {
		get: vi.fn(),
		post: vi.fn(),
	},
}));

describe("Voucher API shouled be ", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});
	it("Should get all voucher", async () => {
		const fakeVoucher = {
			voucher: [],
		};

		vi.mocked(api.get).mockResolvedValue(fakeVoucher);

		const result = await voucherApi.getAll();
		expect(api.get).toBeCalledWith("/voucher");
		expect(result).toEqual(fakeVoucher);
	});

	it("Should get voucher by id", async () => {
		const id = "ZAFARIS20";

		const fakeVoucher = {
			voucher: [],
		};

		vi.mocked(api.get).mockResolvedValue(fakeVoucher);
		const result = await voucherApi.getById(id);
		expect(api.get).toBeCalledWith(`/voucher/${id}`);
		expect(result).toEqual(fakeVoucher);
	});

	it("Should apply a voucher", async () => {
		const codes = "ZAFARIS50";

		const fakeVoucher = {
			voucher: [],
		};

		vi.mocked(api.post).mockResolvedValue(fakeVoucher);
		const result = await voucherApi.applyVoucher(codes);
		expect(api.post).toBeCalledWith(`/voucher/apply`, codes);
		expect(result).toEqual(fakeVoucher);
	});
});
