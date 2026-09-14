import { AxiosRequestConfig } from "axios";
import { apiClient } from "./client";

export const api = {
	get: async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
		const response = await apiClient.get<T>(url, config);

		return response.data;
	},

	post: async <T, D = uknown>(
		url: string,
		data?: D,
		config?: AxiosRequestConfig,
	): Promise<T> => {
		const response = await apiClient.post<T>(url, data, config);

		return response.data;
	},
};
