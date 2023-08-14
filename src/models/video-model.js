import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    title: {
      required: true,
      type: String
    },
    store_name: {
      required: true,
      type: String
    },
    url_video: {
      required: true,
      type: String
    },
    url_thumbnail: {
      required: true,
      type: String
    },
    total_view: {
      required: true,
      type: Number
    },
    discount_coupon: {
      required: true,
      type: Boolean,
      default: false
    },
    only_at_live: {
      required: true,
      type: Boolean,
      default: false
    },
    categories: {
      required: true,
      type: Array
    }
  },
  { timestamps: true }
);

export default mongoose.model("Video", videoSchema);
