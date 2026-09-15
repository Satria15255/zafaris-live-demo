export interface LoginPayload {
	email: string;
	password: string;
}

export interface RegisterPayload {
	name: string;
	email: string;
	password: string;
}

export interface AuthUser {
	_id: string;
	name: string;
	role: string;
}

export interface AuthResponse {
	token: string;
	user: AuthUser;
}
