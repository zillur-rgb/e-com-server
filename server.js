import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.route.js";
import { CategoryRouter } from "./routes/category.route.js";

const app = express();

//Configure env
dotenv.config();
// Connect db
connectDB();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", CategoryRouter);

// test api
app.get("/", (req, res) => {
  res.send("<h1>Hello from the e-com backend</h1>");
});

// listen server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`.bgCyan.white);
});
