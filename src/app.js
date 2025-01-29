import express from "express";
import dotenv from "dotenv";
import { router } from "./routes/index.js";

import { connectDB } from "../Database/db.js";
connectDB();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("api", router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("servidor Escuchando en Puerto", PORT);
});
