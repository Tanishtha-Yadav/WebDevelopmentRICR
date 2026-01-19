import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import { genToken } from "../utils/authTokens.js";

export const UserRegister = async (req, res, next) => {
  try {
    // accept data from frontend
    const { fullName, email, mobileNumber, password } = req.body;

    if (!fullName || !email || !mobileNumber || !password) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }

    //Check for duplicate user before registration
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already registered");
      error.statusCode = 409;
      return next(error);
    }

    // encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // save data to database
    const newUser = await User.create({
      fullName,
      email,
      mobileNumber,
      password: hashedPassword,
    });

    //send response to frontend
    console.log(newUser);
    res.status(201).json({ message: "Registration Successful" });
  } catch (error) {
    next(error);
  }
};

export const UserLogin = async (req, res, next) => {
  try {
    // fetch data from frontend
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      return next(error);
    }

    //Check if user is registered or not
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("Email not registered");
      error.statusCode = 402;
      return next(error);
    }

    // verify password
    const isVerified = await bcrypt.compare(password, existingUser.password);
    if (!isVerified) {
      const error = new Error("Password Doesn't match");
      error.statusCode = 402;
      return next(error);
    }

    // token generation will be done here
    await genToken(existingUser, res);

    //send message to frontend
    res.status(200).json({ message: "Login Successfull", data: existingUser });
    //End
  } catch (error) {
    next(error);
  }
};

export const UserLogout = async (req, res, next) => {
  try {
    res.status(200).json({ message: "User logged out successfull" });
  } catch (error) {
    next(error);
  }
};
