import crops from "../data/crops.js";

// GET all crops
export const getAllCrops = (req, res) => {
  res.status(200).json(crops);
};

// GET crop by ID
export const getCropById = (req, res) => {
  const id = parseInt(req.params.id);

  const crop = crops.find(c => c.id === id);

  if (!crop) {
    return res.status(404).json({
      message: "Crop not found"
    });
  }

  res.status(200).json(crop);
};

// POST add crop
export const addCrop = (req, res) => {
  const newCrop = {
    id: crops.length + 1,
    ...req.body
  };

  crops.push(newCrop);

  res.status(201).json({
    message: "Crop added successfully",
    crop: newCrop
  });
};

// PUT update crop
export const updateCrop = (req, res) => {
  const id = parseInt(req.params.id);

  const index = crops.findIndex(c => c.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Crop not found"
    });
  }

  crops[index] = {
    ...crops[index],
    ...req.body
  };

  res.status(200).json({
    message: "Crop updated successfully",
    crop: crops[index]
  });
};

// DELETE crop
export const deleteCrop = (req, res) => {
  const id = parseInt(req.params.id);

  const index = crops.findIndex(c => c.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: "Crop not found"
    });
  }

  const deletedCrop = crops.splice(index, 1);

  res.status(200).json({
    message: "Crop deleted successfully",
    crop: deletedCrop[0]
  });
};

// SEARCH crop
export const searchCrop = (req, res) => {
  const name = req.query.name?.toLowerCase();

  const result = crops.filter(crop =>
    crop.name.toLowerCase().includes(name)
  );

  res.status(200).json(result);
};