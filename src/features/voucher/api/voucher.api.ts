import { api } from "@/lib/api/request";
import type {
	VoucherResponse,
	GetAllVoucherResponse,
	ApplyVoucherPayload,
	ApplyVoucherResponse,
} from "../types/voucher.types";

export const voucherApi = {
	getAll: () => api.get<GetAllVoucherResponse>("/voucher"),
	getById: (id: string) => api.get<VoucherResponse>(`/voucher/${id}`),
	applyVoucher: (data: ApplyVoucherPayload) =>
		api.post<ApplyVoucherResponse>("/voucher/apply", data),
};
