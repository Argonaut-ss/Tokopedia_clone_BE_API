import CommentService from "../services/comment-services.js";
import validate from "../validation/index.js";
import { addCommentValidation } from "../validation/comment-validation.js";

class CommentController {
  static async addComment(req, res, next) {
    try {
      const commentData = validate(addCommentValidation, req);
      const comment = await CommentService.addComment(commentData);

      res.success({
        code: 201,
        message: "Success Add comment",
        data: {
          id: comment._id,
          username: comment.username,
          commentMessage: comment.comment_message,
          timestamps: comment.createdAt
        }
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAllCommentsByVideoId(req, res, next) {
    try {
      const videoId = req.params.videoId;

      const comments = await CommentService.getAllComments(videoId);

      const data = [];

      comments.forEach((comment) => {
        data.push({
          id: comment._id,
          username: comment.username,
          commentMessage: comment.comment_message,
          timestamps: comment.createdAt
        });
      });

      res.success({
        message: "Success Get All Comments By VideoID",
        data: data
      });
    } catch (error) {
      next(error);
    }
  }
}

export default CommentController;
