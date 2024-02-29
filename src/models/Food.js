import mongoose from "mongoose";

const { String, Date, Boolean, ObjectId, Number } = mongoose.Schema.Types;

const Food = mongoose.model(
  "Food",
  new mongoose.Schema(
    {
      name: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        required: true
      },
      description: {
        type: String,
        default: null
      },
      picture: {
        type: String,
        required: true
      },
      isDelete: {
        type: Boolean,
        default: false
      }
    },
    { timestamps: true }
  )
);

export default Food;
