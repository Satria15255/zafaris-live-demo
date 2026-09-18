import { api } from "@/lib/api/request";
import type {
	CreateOrderPayload,
	CreateOrderResponse,
} from "../types/order.types";

export const orderApi = {
	create: (data: CreateOrderPayload) =>
		api.post<CreateOrderResponse, CreateOrderPayload>(
			"/transactions",
			data,
		),
};
