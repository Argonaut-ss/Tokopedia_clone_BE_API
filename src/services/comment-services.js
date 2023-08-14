import Comment from "../models/comment-model.js";

class CommentService {
  static async addComment(commentData) {
    const comment = new Comment(commentData);

    const commentSave = await comment.save();

    return commentSave;
  }

  static async getAllComments(videoId) {
    const comments = await Comment.find({ video_id: videoId }).exec();

    return comments;
  }
}

export default CommentService;