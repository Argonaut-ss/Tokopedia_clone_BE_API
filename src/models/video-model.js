import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: {
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
  }
});

export default mongoose.model("Video", videoSchema);
