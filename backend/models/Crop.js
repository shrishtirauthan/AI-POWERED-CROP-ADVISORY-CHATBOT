import mongoose from "mongoose";

const cropSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    season: {
      type: String,
      required: true,
    },
    soil: {
      type: String,
      required: true,
    },
    waterRequirement: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Crop = mongoose.model("Crop", cropSchema);

export default Crop;