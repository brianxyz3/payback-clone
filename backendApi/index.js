import express from "express";
import mongoose from "mongoose";
import { env } from "node:process";
import cors from "cors";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserCaseFile from "./models/userCaseFile.js";
import {
  sanitizeCaseFile,
  sanitizeUser,
  sanitizeUserLogin,
} from "./middleware.js";
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
    const user = User.find({ email });

    try {
      if (!user) {
        const hashedPassword = await bcrypt
          .hash(password, 10)
          .catch((err) => console.log(err));
        const newUser = new User({
          firstName,
          lastName,
          email,
          password: hashedPassword,
        });
        console.log(newUser);
        const registeredUser = await newUser.save();
        const token = generateToken(registeredUser);
        res.status(201).json({
          token,
          email: registeredUser.email,
          id: registeredUser._id,
        });
      } else {
        res.json({ message: "A user already exist with this email" });
      }
    } catch (err) {
      console.log("An error occurred, " + err);
      res.status(500).json({ message: "Something went wrong. Try again." });
    }
  })
);

app.post(
  "/registerAdmin",
  sanitizeUser,
  catchAsync(async (req, res) => {
    const { firstName, lastName, email, password, isAdmin } = req.body;

    try {
      const userArr = await User.find({ email });

      const user = userArr[0];
      if (user) {
        const newAdmin = await User.findByIdAndUpdate({ id: user._id });
        const token = generateToken(newAdmin);
        res.status(201).json({
          token,
          email: newAdmin.email,
          isAdmin: newAdmin.isAdmin,
          id: newAdmin._id,
        });
      } else if (!user) {
        console.log("IN REGISTER USER ");

        const hashedPassword = await bcrypt
          .hash(password, 10)
          .catch((err) => console.log(err));
        const newAdmin = new User({
          firstName,
          lastName,
          email,
          isAdmin,
          password: hashedPassword,
        });
        console.log(newAdmin);
        const registeredAdmin = await newAdmin.save();
        const token = generateToken(registeredAdmin);
        res.status(201).json({
          token,
          email: registeredAdmin.email,
          isAdmin: registeredAdmin.isAdmin,
          id: registeredAdmin._id,
        });
      }
    } catch (err) {
      console.log("An error occurred, " + err);
      res.status(500).json({ message: "Something went wrong. Try again." });
    }
  })
);

app.post(
  "/login",
  sanitizeUserLogin,
  catchAsync(async (req, res) => {
    const { email, password } = req.body;
    try {
      const userArr = await User.find({ email });
      const user = userArr[0];

      const isPassword = await bcrypt.compare(password, user.password);

      if (isPassword) {
        const token = generateToken(user);

        res.status(201).json({
          token,
          email: user.email,
          isAdmin: user.isAdmin,
          id: user._id,
        });
      } else {
        res.status(401).json({ message: "Invalid Login Credentials" });
      }
    } catch (err) {
      console.log("An error occurred, " + err);
      res.status(400).json({ message: "Invalid request" });
    }
  })
);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
