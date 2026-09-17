import { Product } from "@/features/products/types/product.types";

export interface CartPayload {
	product: string;
	size: number;
	quantity: number;
}

export interface ItemsSummary {
	productId: string;
	quantity: number;
	size: number;
	price: number;
	discountPercent: number;
	finalPrice: number;
	_id: string;
}

export interface CartSummary {
	_id: string;
	userId: string;
	cart: ItemsSummary[];
}

export interface CartResponse {
	message: string;
	cart: CartSummary;
}
