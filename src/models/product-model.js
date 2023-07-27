import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    video_id: {
      required: true,
      type: String
    },
    url_product: {
      required: true,
      type: String
    },
    url_image: {
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
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
