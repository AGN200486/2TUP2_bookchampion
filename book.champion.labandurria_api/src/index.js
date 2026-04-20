import express from "express";
import { PORT } from "./config.js";
import bookRoutes from "./routes/books.routes.js";
import { sequelize } from "../db.js";

const app = express();

try {
  app.use(bookRoutes);
  app.listen(PORT);

  await sequelize.authenticate();
  console.log(`Server listening on port ${PORT}`);
} catch (error) {
  console.log("there was an error on initializacion", error);
}
