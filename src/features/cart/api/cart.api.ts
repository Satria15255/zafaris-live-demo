import { api } from "@/lib/api/request";
import { CartPayload, CartResponse } from "../types/cart.types";

export const getCart = (): Promise<CartResponse> => {
	return api.get<CartResponse>("/cart");
};

export const addToCart = (data: CartPayload): Promise<CartResponse> => {
	return api.post<CartResponse, CartPayload>("/cart/add", data);
};

export const removeCart = (
	productId: string,
	size: string,
): Promise<CartResponse> => {
	return api.delete<CartResponse>(`/cart/remove/${productId}/${size}`);
};
