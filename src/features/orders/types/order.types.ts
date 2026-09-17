export interface OrderProductsPayload {
	product: string;
	size: number;
}

export type OrderPaymentMethod = "Cash on Delivery" | "Transfer";

export interface CreateOrderPayload {
	products: OrderProductsPayload[];

	name: string;
	phoneNumber: number;

	message?: string;

	paymentMethod: OrderPaymentMethod;
	shippingMethod: string;
	shippingAdress: string;
	transferProvider?: string;
	voucherCode?: string;
}

export interface OrderProduct {
	product: string[];
	name: string;
	brand: string;
	image: string[];
	size: number;
	quantity: number;
	originalPrice: number;
	discountPercent: number;
	pricePerUnit: number;
	subTotal: number;
}

export interface Order {
	_id: string;
	user: string;
	products: OrderProductsPayload;
	name: string;
	totalProduct: number;
	finalPrice: number;
	totalPrice: number;
	phoneNumber: number;
	message?: string;
	shippingMethod: string;
	shippingAdress: string;
	voucherCode: string;
	discountAmount: number;
	paymentMethod: OrderPaymentMethod;
	transferProvider?: string;
	paymentStatus: string;
	paymentExpiresAt: string | null;
	status: string;
	createdAt: string;
	updatedAt: string;
}

export interface CreateOrderResponse {
	message: string;
	transaction: Order;
}
