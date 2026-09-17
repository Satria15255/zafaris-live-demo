import { describe, expect, it } from "vitest";
import { createApiClient } from "./client";
import { axiosAdapter } from "axios";

const fakeAdapter: axiosAdapter = async (config) => {
	return {
		data: {},
		status: 200,
		statusText: "Ok",
		header: {},
		config,
	};
};

describe("apiClient test interceptor", () => {
	it("should attach bearer token when access token exist", async () => {
		const api = createApiClient(() => "fake-test-token");

		const response = await api.get("/favorites", {
			adapter: fakeAdapter,
		});

		expect(response.config.headers.get("Authorization")).toBe(
			"Bearer fake-test-token",
		);
	});

	it("should not attach bearer token when token does not exist", async () => {
		const api = createApiClient(() => null);

		const response = await api.get("/products", {
			adapter: fakeAdapter,
		});

		expect(response.config.headers.get("Authorization")).toBeUndefined();
	});
});
