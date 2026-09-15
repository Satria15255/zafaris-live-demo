import { api } from "@/lib/api/request";
import {
	LoginPayload,
	RegisterPayload,
	AuthUser,
	AuthResponse,
} from "../types/auth.types";

export const authApi = {
	login: (data: LoginPayload) => api.post<AuthResponse>("/auth/login", data),
	register: (data: RegisterPayload) =>
		api.post<AuthResponse>("/auth/register", data),
};
