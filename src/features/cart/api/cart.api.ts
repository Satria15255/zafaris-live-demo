import { api } from "@/lib/api/request";

import type {
	AddToCartPayload,
	UpdateCartQuantityPayload,
	GetCartResponse,
	CartMutationResponse,
	CartMessageResponse,
} from "../types/cart.types";

export const cartApi = {
	get: () => api.get<GetCartResponse>("/cart"),

	add: (payload: AddToCartPayload) =>
		api.post<CartMutationResponse, AddToCartPayload>("/cart/add", payload),

	updateQuantity: (payload: UpdateCartQuantityPayload) =>
		api.patch<CartMutationResponse, UpdateCartQuantityPayload>(
			"/cart/update",
			payload,
		),

	remove: (productId: string, size: number) =>
		api.delete<CartMutationResponse>(`/cart/remove/${productId}/${size}`),

	clear: () => api.delete<CartMessageResponse>("/cart/clear"),
};
