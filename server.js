import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

const app = express();

//Configure env
dotenv.config();
// Connect db
connectDB();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// test api
app.get("/", (req, res) => {
  res.send("<h1>Hello from the e-com backend</h1>");
});

// listen server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`.bgCyan.white);
});
