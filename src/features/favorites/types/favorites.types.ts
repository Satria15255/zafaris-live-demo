import { Product } from "@/features/products/types/product.types";

export interface FavoritesResponse {
	message: string;
	favorites: Product[];
}
