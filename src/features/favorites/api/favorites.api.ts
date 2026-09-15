import { api } from "@/lib/api/request";
import { ProductSummary, Favorites } from "../types/favorites.types";

export const favoritesApi = {
	getAll: () => api.get<Favorites>("/favorites"),
};
