import { Order } from "@/features/orders/types/order.types";

export interface PaymentPayload {
	id: string;
	transferProvider: string;
}

export interface PaymentResponse {
	message: string;
	transaction: Order;
}
