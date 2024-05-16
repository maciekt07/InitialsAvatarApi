import { expect, test } from "bun:test";

const baseUrl = "http://localhost:3000";

test("fetch success", async () => {
  const response = await fetch(baseUrl);
  expect(response.status).toBe(200);
});

test("fetch failure with 404", async () => {
  const response = await fetch(`${baseUrl}/404`);
  expect(response.status).toBe(404);
});
