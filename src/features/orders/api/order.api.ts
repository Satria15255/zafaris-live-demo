import { api } from "@/lib/api/request";
import { CreateOrderPayload, CreateOrderResponse } from "../types/order.types";

export const createOrder = (
	data: CreateOrderPayload,
): Promise<CreateOrderResponse> => {
	return api.post<CreateOrderResponse, CreateOrderPayload>(
		"/transactions",
		data,
	);
};
