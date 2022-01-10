import pkg from "winston";
const { createLogger, transports, format } = pkg;

const logger = createLogger({
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.json()
  ),
  transports: [
    new transports.File({ filename: "app.log", level: "info" }),
    new transports.Console({ level: "silly" }),
  ],
});

export { logger };
