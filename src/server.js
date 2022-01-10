import express from "express";
import sectionRouter from "./router/sections.js";

const app = express();

app.use(express.json());
app.use(sectionRouter);

export default app;
