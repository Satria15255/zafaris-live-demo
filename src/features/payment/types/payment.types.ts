import type { Order } from "@/features/orders/types/order.types";

export interface PaymentPayload {
	transferProvider: string;
}

export interface PaymentResponse {
	message: string;
	transaction: Order;
}
