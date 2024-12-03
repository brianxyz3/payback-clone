import express from "express";
import mongoose from "mongoose";
import User from "./user.js";
import sanitizeUser from "./middleware.js";
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
  "/register",
  sanitizeUser,
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
      const user = new User({
        firstName,
        lastName,
        contactPhone,
        contactEmail,
        lostAmount,
        description,
      });
      const registeredUser = await user.save();
      console.log(registeredUser);
      res.status(201).json(registeredUser);
    } catch (err) {
      console.log("An error occurred" + err);
    }
  })
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
