export interface OrderProductPayload {
	product: string;
	size: number;
}

export type OrderPaymentMethod = "Cash on Delivery" | "Transfer";
export type OrderPaymentStatus = "Unpaid" | "Paid" | "Expired";
export type OrderStatus =
	| "Pending"
	| "Processing"
	| "Shipped"
	| "Delivered"
	| "Cancelled"
	| "Expired"
	| "Completed";

export interface OrderProduct {
	product: string;
	name: string;
	brand: string;
	image: string;
	size: number;
	quantity: number;
	originalPrice: number;
	discountPercent: number;
	pricePerUnit: number;
	subtotal: number;
}
export interface CreateOrderPayload {
	products: OrderProduct[];

	name: string;
	phoneNumber: string;

	message?: string;

	paymentMethod: OrderPaymentMethod;
	shippingMethod: string;
	shippingAddress: string;
	transferProvider?: string;
	voucherCode?: string;
}

export interface Order {
	_id: string;
	user: string;
	products: OrderProductPayload;
	name: string;
	totalProducts: number;
	finalPrice: number;
	totalPrice: number;
	phoneNumber: string;
	message?: string;
	shippingMethod: string;
	shippingAdress: string;
	voucherCode?: string;
	discountAmount: number;
	paymentMethod: OrderPaymentMethod;
	transferProvider?: string;
	paymentStatus: OrderPaymentStatus;
	paymentExpiredAt: string | null;
	status: OrderStatus;
	createdAt: string;
	updatedAt: string;
}

export interface CreateOrderResponse {
	message: string;
	transaction: Order;
}
