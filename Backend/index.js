import express from "express";
import cors from "cors";
import router from "./routes/router.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/";

const DB = process.env.DB;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);
mongoose
  .connect(MONGO_URI, { dbName: DB })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });
