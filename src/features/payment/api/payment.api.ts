import { api } from "@/lib/api/request";
import { PaymentPayload, PaymentResponse } from "../types/payment.types";

export const paymentApi = {
	pay: (id: string, data: PaymentPayload) =>
		api.patch<PaymentResponse, PaymentPayload>(
			`/transactions/${id}/payment`,
			data,
		),
};
