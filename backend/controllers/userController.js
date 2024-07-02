import User from "../models/User.js";

// Create new user
export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: savedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create user",
      error: err.message,
    });
  }
};

// Update user
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update user",
    });
  }
};

// Delete user
export const deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete user",
    });
  }
};

// Get single user
export const getSingleUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await User.findById(id);
    res.status(200).json({
      success: true,
      message: "User found successfully",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "User not found",
    });
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      success: true,
      message: "Users found successfully",
      data: users,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Users not found",
    });
  }
};