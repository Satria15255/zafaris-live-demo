// src/lib/api/apiClient.ts

import axios from "axios";
import { getAccessToken } from "@/lib/auth/tokenStorage";

type GetAccessToken = () => string | null;

export const createApiClient = (getToken: GetAccessToken) => {
	const client = axios.create({
		baseURL: import.meta.env.VITE_API_URL,
		headers: {
			"Content-Type": "application/json",
		},
	});

	client.interceptors.request.use((config) => {
		const token = getToken();

		if (token) {
			config.headers.set("Authorization", `Bearer ${token}`);
		}

		return config;
	});

	return client;
};

export const apiClient = createApiClient(getAccessToken);
