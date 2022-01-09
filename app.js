import express from "express";
import { config } from "dotenv";
import sectionRouter from "./src/router/sections.js";

// configuring env varaibles

config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(sectionRouter);

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
