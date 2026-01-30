import cloudinary from "../config/cloundinary.js";
import User from "../models/userModel.js";

export const UserUpdate = async (req, res, next) => {
  try {
    const { fullName, email, mobileNumber } = req.body;

    const currentUser = req.user;

    if (!fullName || !email || !mobileNumber) {
      const error = new Error("All fields required");
      error.statusCode = 400;
      next(error);
    }

    console.log("OldData: ", currentUser);

    // currentUser.fullName = fullName;
    // currentUser.email = email;
    // currentUser.mobileNumber = mobileNumber;
    // await currentUser.save();
    // console.log("NewData:", currentUser);

    //Second Way
    const updatedUser = await User.findByIdAndUpdate(
      { _id: currentUser._id },
      {
        fullName,
        email,
        mobileNumber,
      },
      { new: true },
    );

    console.log("Updated User: ", updatedUser);

    res
      .status(200)
      .json({ message: "user updated successfully", data: currentUser });
    console.log("Updating the user");
  } catch (error) {
    next(error);
  }
};

export const UserChangePhoto = async (req, res, next) => {
  try {
    // console.log("body: ", req.body);
    // console.log("file:", req.file);
    const currentUser = req.user;
    const dp = req.file;

    if (!dp) {
      const error = new Error("Profile Picture Required");
      error.statusCode = 400;
      return next(error);
    }

    if (currentUser.photo.publicID) {
      await cloudinary.uploader.destroy(currentUser.photo.publicID);
    }

    const b64 = Buffer.from(dp.buffer).toString("base64");
    // console.log(b64.slice(0, 100));

    const dataURI = `data:${dp.mimetype};base64,${b64}`; // file format
    console.log(dataURI.slice(0, 100));

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: "Cravings/Users",
      width: 500,
      height: 500,
      crop: "fill",
    });

    console.log("Image uploaded sucessfully", result);
    currentUser.photo.url = result.secure_url;
    currentUser.photo.publicID = result.public_id;

    await currentUser.save();


    res.status(200).json({ message: "Photo Updated"});
  } catch (error) {
    next(error);
  }
};
