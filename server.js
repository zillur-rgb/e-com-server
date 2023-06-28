import express from "express";
import colors from "colors";
import dotenv from "dotenv";

const app = express();

//Configure env
dotenv.config();

// test api
app.get("/", (req, res) => {
  res.send("<h1>Hello from the e-com backend</h1>");
});

// listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`.bgCyan.white);
});
