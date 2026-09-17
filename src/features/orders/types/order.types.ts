export interface OrderPayload {
	products: string[];
	name: string;
	phoneNumber: number;
	message: string;
	shippingMethod: string;
	paymentMethod: string;
	transferProvider: string;
	shippingAdress: string;
	voucherCode: string;
}

export interface OrderResponse {}
