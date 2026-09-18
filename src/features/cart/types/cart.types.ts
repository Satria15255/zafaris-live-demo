import type { Product } from "@/features/products/types/product.types";

export interface AddToCartPayload {
	productId: string;
	size: number;
	quantity?: number;
}

export interface CartItem<TProduct = string> {
	_id: string;
	productId: TProduct;
	quantity: number;
	size: number;
	price: number;
	discountPercent: number;
	finalPrice: number;
}

export interface Cart<TProduct = string> {
	_id: string;
	userId: string;
	items: CartItems<TProduct>[];
}

export interface UpdateCartQuantityPayload {
	productId: string;
	size: number;
	quantity: number;
}

export interface GetCartResponse {
	cart: CartItem<Prorduct>[];
}

export interface CartMutationResponse {
	message: string;
	cart: Cart<string>;
}

export interface CartMessageRespone {
	message: string;
}
