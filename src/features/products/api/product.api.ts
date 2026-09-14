import { api } from "@/lib/api/request";
import type {
	DailyDiscount,
	Product,
	ProductDetail,
	ProductQueryParams,
} from "../types/product.types";

export const productApi = {
	getAll: (params?: ProductQueryParams) =>
		api.get<Product[]>("/products", { params }),
	getById: (id: string) => api.get<ProductDetail>(`/products/${id}`),
	getLatest: () => api.get<Product[]>("/products/latest"),
	getBestSeller: () => api.get<Product[]>("/products/best-seller"),
	getDiscountToday: () =>
		api.get<DailyDiscount[]>("/products/discounts/today"),
};
