import dotenv from "dotenv";
dotenv.config();

import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("Server is running");
  res.json({ message: "Successfully" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server statred at port", port);
});
