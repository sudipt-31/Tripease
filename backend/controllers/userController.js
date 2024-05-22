import User from "../models/User.js";


// Create new tour
export const createTour = async (req, res) => {
  const newUser = new User(req.body);

  try {
    const savedUser = await newUser.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedUser,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create tour",
      error: err.message, // Include the error message for better debugging
    });
  }
};

//update User
export const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
};
//delete tour
export const deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to deleted",
    });
  }
};

//getSingle user
export const getSingleUser = async (req, res) => {

    const id=req.params.id;
  try {
    const User = await User.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully ",
      data: User,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found ",
    });
  }
};
//getAll User
export const getAllUser = async (req, res) => {
  try {
    const user = await User.find({});

    res.status(200).json({
      success: true,
    
      message: "Successful ",
      data: user,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found ",
    });
  }
};
