import { describe, expect, it } from "vitest";
import { authApi } from "./auth.api";
import axios from "axios";

describe("Auth Test", () => {
	it("Should user register", async () => {
		const email = `example ${new Date()}@gmail.com`;
		try {
			const response = await authApi.register({
				name: "example",
				email,
				password: "12345",
			});

			expect(response).toBeDefined();
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.log("STATUS:", error.response?.status);
				console.log("DATA:", error.response?.data);
				console.log("URL:", error.response?.url);
				console.log("BODY:", error.response?.body);
			}
			throw error;
		}
	});
	it("Should user login", async () => {
		try {
			const response = await authApi.login({
				email: "nala@gmail.com",
				password: "12324",
			});
			console.log("Success login", response);
			expect(response).toBeDefined();
		} catch (error) {
			if (axios.isAxiosError(error)) {
				console.log("STATUS:", error.response?.status);
				console.log("DATA:", error.response?.data);
				console.log("URL:", error.response?.url);
				console.log("BODY:", error.response?.body);
			}
			throw error;
		}
	});
});
