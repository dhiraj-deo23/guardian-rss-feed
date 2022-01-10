import { createLogger } from "winston";

const logger = createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: "eror.log" })],
});
