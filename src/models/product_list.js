import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  url: {
    required: true,
    type: String
  },
  title: {
    required: true,
    type: String
  },
  price: {
    required: true,
    type: Number
  }
});

export default mongoose.model("Product", productSchema);
