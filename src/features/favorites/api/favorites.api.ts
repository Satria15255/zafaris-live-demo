import { api } from "@/lib/api/request";
import type { FavoritesResponse } from "../types/favorites.types";

export const getFavorites = (): Promise<FavoritesResponse> => {
	return api.get<FavoritesResponse>("/favorites");
};

export const addFavorites = (productId: string): Promise<FavoritesResponse> => {
	return api.post<FavoritesResponse>(`/favorites/${productId}`);
};

export const removeFavorites = (
	productId: string,
): Promise<FavoritesResponse> => {
	return api.delete<FavoritesResponse>(`/favorites/${productId}`);
};
