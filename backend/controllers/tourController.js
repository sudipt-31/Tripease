import Tour from "../models/Tour.js"; // Ensure the import is correct

// Create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);

  try {
    const savedTour = await newTour.save();
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to create tour",
      error: err.message, // Include the error message for better debugging
    });
  }
};

//update tour
export const updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updateTour = await Tour.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updateTour,
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
export const getSingleTour = async (req, res) => {
  try {
    const tour = await Tour.findById(id);

    res.status(200).json({
      success: true,
      message: "Successfully ",
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found ",
    });
  }
};

export const getAllTour = async (req, res) => {
  //for pagination

  const page = parseInt(req.query.page);
  console.log(page);

  try {
    const tours = await Tour.find({}).skip(page*8).limit(8);

    res.status(200).json({
      success: true,
      message: "Successful ",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "not found ",
    });
  }
};
