import dotenv from "dotenv";
dotenv.config();

import connectDB from "./src/config/db.js";

import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());

//app.use("/auth", AuthRouter);

app.get("/", (req, res) => {
  console.log("Server is working");
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server started at port: ", port);
  connectDB();
});

export default app;
