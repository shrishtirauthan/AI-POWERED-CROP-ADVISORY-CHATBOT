import Crop from "../models/Crop.js";

// GET all crops
export const getAllCrops = async (req, res) => {
  try {
    const crops = await Crop.find();
    res.status(200).json(crops);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET crop by ID
export const getCropById = async (req, res) => {
  try {
    const crop = await Crop.findById(req.params.id);

    if (!crop) {
      return res.status(404).json({
        message: "Crop not found",
      });
    }

    res.status(200).json(crop);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// POST add crop
export const addCrop = async (req, res) => {
  try {
    const crop = await Crop.create(req.body);

    res.status(201).json({
      message: "Crop added successfully",
      crop,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// PUT update crop
export const updateCrop = async (req, res) => {
  try {
    const crop = await Crop.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!crop) {
      return res.status(404).json({
        message: "Crop not found",
      });
    }

    res.status(200).json({
      message: "Crop updated successfully",
      crop,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// DELETE crop
export const deleteCrop = async (req, res) => {
  try {
    const crop = await Crop.findByIdAndDelete(req.params.id);

    if (!crop) {
      return res.status(404).json({
        message: "Crop not found",
      });
    }

    res.status(200).json({
      message: "Crop deleted successfully",
      crop,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// SEARCH crop
export const searchCrop = async (req, res) => {
  try {
    const name = req.query.name;

    const crops = await Crop.find({
      name: {
        $regex: name,
        $options: "i",
      },
    });

    res.status(200).json(crops);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};