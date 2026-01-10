import User from "../models/userModel.js";
export const UserRegister = async (req, res, next) => {
  try {
    const { fullName, email, phone, password } = req.body;

    if (!fullName || !email || !phone || !password) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const error = new Error("Email already exists");
      error.statusCode = 409;
      return next(error);
    }

    const newUser = await User.create({
      fullName,
      email,
      phone,
      password,
    });

    console.log(newUser);

    res.status(201).json({ message: "User Created Succesfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const UserLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "All fields Required" });
      return;
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      res.status(404).json({ message: "User not found" });
      return;
    }
    555;

    // const isVerified = password === existingUser.password;

    if (!password === existingUser.password) {
      const error = new Error("User not Authorized");
      error.statusCode = 402;
      return next(error);
    }
    console.log(existingUser);

    res.status(200).json({ message: "Welcome Back : ", data: existingUser });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const UserLogout = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Logout Successful" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const UserUpdate = async (req, res, next) => {
  try {
    const { fullName, email, phone } = req.body;

    if (!fullName || !email || !phone || !password) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      const error = new Error("User not found");
      error.statusCode = 404;
      return next(error);
    }

    existingUser.fullName = fullName;
    existingUser.phone = phone;

    await existingUser.save();

    res
      .status(200)
      .json({ message: "User Update Successfully", data: existingUser });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
