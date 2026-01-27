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
    console.log("body: ", req.body);
    console.log("file:", req.file);
    res.status(200).json({ message: "Photo Updated" });
  } catch (error) {
    next(error);
  }
};
