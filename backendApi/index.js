import express from "express";
import mongoose from "mongoose";
import UserCaseFile from "./models/userCaseFile.js";
import { sanitizeCaseFile } from "./middleware.js";
import catchAsync from "./utilities/catchAsync.js";

const dbUrl = "mongodb://localhost:27017/payback";
const PORT = 8000;

mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post(
  "/newCase",
  sanitizeCaseFile,
  catchAsync(async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        contactPhone,
        contactEmail,
        lostAmount,
        description,
      } = req.body;
      const newCaseFile = new UserCaseFile({
        firstName,
        lastName,
        contactPhone,
        contactEmail,
        lostAmount,
        description,
      });
      const caseFile = await newCaseFile.save();
      console.log(caseFile);
      res.status(201).json(caseFile);
    } catch (err) {
      console.log("An error occurred, " + err);
      res.status(err.status).json(err);
    }
  })
);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
