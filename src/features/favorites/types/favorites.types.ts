export interface ProductSummary {
	_id: string;
	name: string;
	brand: string;
	price: number;
	image: string;
	description: string;
	category: string;
	sizes: number[];
	createdBy: string;
	createdAt: string;
	updatedAt: string;
	isBestSeller: boolean;
	totalSold: number;
	id: string;
}

export interface Favorites {
	message: string;
	favorites: ProductSummary;
}
