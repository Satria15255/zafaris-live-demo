const TOKEN_KEY = "token";

export const getAccessToken = (): string | null => {
	if (typeof window === "undefined") {
		return null;
	}

	return window.localStorage.getItem(TOKEN_KEY);
};
