import express from "express";
import dotenv from "dotenv";
import path from "path";
import morgan from "morgan";
import bodyparser from "body-parser";

const app = express();

const PORT = 5000;

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
