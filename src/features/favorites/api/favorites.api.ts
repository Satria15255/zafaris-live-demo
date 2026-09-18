import { api } from "@/lib/api/request";
import type { FavoritesResponse } from "../types/favorites.types";

export const favoritesApi = {
	get: () => api.get<FavoritesResponse>("/favorites"),
	add: (productId: string) =>
		api.post<FavoritesResponse>(`/favorites/${productId}`),
	remove: (productId: string) =>
		api.delete<FavoritesResponse>(`/favorites/${productId}`),
};
