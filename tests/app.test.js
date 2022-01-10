import request from "supertest";
import app from "../src/server.js";

test("should return the section list with status 200", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(200);
});

test("should return error with status 400", async () => {
  const response = await request(app).get("/Ablah");
  expect(response.status).toBe(400);
});

test("should return error with status 400", async () => {
  const response = await request(app).get("/ab_lah");
  expect(response.status).toBe(400);
});

test("should return error with status 400", async () => {
  const response = await request(app).get("/123");
  expect(response.status).toBe(400);
});

test("should return error with status 404", async () => {
  const response = await request(app).get("/blah");
  expect(response.status).toBe(404);
});

test("should return error with status 404", async () => {
  const response = await request(app).get("/blah-blah");
  expect(response.status).toBe(404);
});

test("should return error with status 404", async () => {
  const response = await request(app).get("/film");
  expect(response.status).toBe(200);
});
