/* eslint-disable no-unused-vars */
import express from "express";
import dotenv from "dotenv";
import { workWithMe } from "./controllers/email.controller.js";
import cors from "cors";

const app = express();

dotenv.config();
const port = 3000;

// Middleware for parsing JSON bodies
app.use(express.json());

// Middleware for parsing URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Configure CORS
app.use(cors());
// Add options route to handle preflight requests
app.options("/api/send-email", cors());

app.post("/api/send-email", workWithMe);

app.get("/", (req, res) => {
  res.send({ message: "Hello" });
});

app.listen(process.env.PORT || port, () =>
  console.log(`Server is running on port: ${port}`)
);
