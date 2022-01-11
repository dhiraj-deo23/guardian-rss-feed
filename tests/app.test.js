import request from "supertest";
import app from "../src/server.js";

test("should return the section list with status 200", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(200);
});

test("should return error with status 400 for capital letter not allowed", async () => {
  const response = await request(app).get("/Ablah");
  expect(response.status).toBe(400);
});

test("should return error with status 400 for underscore not allowed", async () => {
  const response = await request(app).get("/ab_lah");
  expect(response.status).toBe(400);
});

test("should return error with status 400 for numbers not allowed as endpoint", async () => {
  const response = await request(app).get("/123");
  expect(response.status).toBe(400);
});

test("should return error with status 404 for invalid section", async () => {
  const response = await request(app).get("/blah");
  expect(response.status).toBe(404);
});

test("should return error with status 404 for invalid section", async () => {
  const response = await request(app).get("/blah-blah");
  expect(response.status).toBe(404);
});

test("should return rss feed for the film with status 200", async () => {
  const response = await request(app).get("/film");
  expect(response.status).toBe(200);
});
