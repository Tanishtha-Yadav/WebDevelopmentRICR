import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./src/config/db.js";
import AuthRouter from "./src/routers/myRouter.js";

const app = express();

app.use(express.json());

app.use("/auth", AuthRouter);

app.get("/", (req, res) => {
  console.log("Server is running");
  res.json({ message: "Successfully" });
});

app.use((err, req, res, next) => {
  const ErrorMessage = err.message || "internal server error";
  const StatusCode = err.statusCode || 500;

  res.stutus(StatusCode).json({ message: ErrorMessage });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server started at port", port);
  connectDB();
});
