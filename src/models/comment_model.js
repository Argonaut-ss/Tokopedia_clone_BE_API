import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  video_id: {
    required: true,
    type: String
  },
  username: {
    required: true,
    type: String
  },
  comment_message: {
    required: true,
    type: String
  },
  timestamp: {
    required: true,
    type: String
  }
});

export default mongoose.model("comment", commentSchema);
