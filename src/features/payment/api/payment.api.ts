import { api } from "@/lib/api/request";
import { PaymentPayload, PaymentResponse } from "../types/payment.types";

export const completedPayment = (
	id: string,
	data: PaymentPayload,
): Promise<PaymentResponse> => {
	return api.patch<PaymentResponse, PaymentPayload>(
		`/transactions/${id}/payment`,
		data,
	);
};
