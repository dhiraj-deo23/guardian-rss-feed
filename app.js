import app from "./src/server.js";
import { config } from "dotenv";

// configuring env varaibles
config();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is up on port ${port}`);
});
