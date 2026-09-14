export interface ProductVariants {
	_id: string;
	product: string;
	size: number;
	stock: number;
	createdAt: string;
	updatedAt: string;
}

export interface Product {
	_id: string;

	name: string;
	price: number;

	description?: string;
	brand?: string;
	category?: string;
	image?: string[];

	totalSold: number;
	isBestSeller: boolean;
	sizes: number[];

	variants: ProductVariants[];

	createdBy?: string | null;
	createdAt: string;
	updatedAt: string;
}

export interface ProductDetail extends Product {
	discountPrice: number;
	discountPercent: number | null;
	isDiscount: boolean;
}

export interface DailyDiscount {
	_id: string;
	productId: product;
	discountPrice: number;
	discountPercent: number;
	expiresAt: string;
}

export interface ProductQueryParams {
	search?: string;
}
