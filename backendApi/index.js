import express from "express";
import mongoose from "mongoose";
import { env } from "node:process";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserCaseFile from "./models/userCaseFile.js";
import { sanitizeCaseFile, sanitizeUser } from "./middleware.js";
import catchAsync from "./utilities/catchAsync.js";
import User from "./models/user.js";
const dbUrl = "mongodb://localhost:27017/payback";
const PORT = env.PORT || 8000;
const jwtSecret = env.JWT_SECRET || "notagoodsecret1";

mongoose.connect(dbUrl);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const generateToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, jwtSecret, {
    expiresIn: "24h",
  });
};

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
      console.log(err);
      res.status(500).json({ message: "An error occurred, " + err.message });
    }
  })
);

app.post(
  "/register",
  sanitizeUser,
  catchAsync(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const hashedPassword = await bcrypt
      .hash(password, 10)
      .catch((err) => console.log(err));
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    try {
      console.log(newUser);
      const registeredUser = await newUser.save();
      const token = generateToken(registeredUser);
      res.status(201).json({
        token,
        email: registeredUser.email,
        id: registeredUser._id,
      });
    } catch (err) {
      console.log("An error occurred, " + err);
      res.status(500).json({ message: "Something went wrong. Try again." });
    }
  })
);

app.post(
  "/login",
  sanitizeUser,
  catchAsync(async (req, res) => {
    try {
      console.log("Hit register user route");
    } catch (err) {
      console.log("An error occurred, " + err);
    }
  })
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
