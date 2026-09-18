export type DiscountType = "fixed" | "percentage";

export interface VoucherDiscount {
	type: DiscountType;
	value: number;
}

export interface VoucherUsage {
	limit: number | null;
	usedCount: number;
}

export interface VoucherValidity {
	startDate: string;
	endDate: string;
}

export interface VoucherScope {
	type: string;
	products: string[];
}

export interface Voucher {
	_id: string;
	code: string;
	description: string;

	discount: VoucherDiscount;

	minPurchase?: number;
	maxDiscount?: number | null;

	usage: VoucherUsage;
	usagePerUser: number;

	validity: VoucherValidity;
	scope: VoucherScope;

	isActive: boolean;

	createdAt: string;
	updatedAt: string;
}

export interface VoucherResponse {
	message: string;
	voucher: Voucher;
}

export interface GetAllVoucherResponse {
	message: string;
	count: number;
	vouchers: Voucher[];
}

export interface ApplyVoucherPayload {
	code: string;
}

export interface AppliedVoucher {
	id: string;
	code: string;
	description?: string;
}

export interface ApplyVoucherResult {
	voucher: AppliedVoucher;
	subTotal: number;
	eligibleSubTotal: number;
	discountAmount: number;
	finalTotal: number;
}

export interface ApplyVoucherResponse {
	message: string;
	data: ApplyVoucherResult;
}
