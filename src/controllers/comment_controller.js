import CommentService from "../services/comment-services.js";

class CommentController {
  static async addComment(req, res, next) {
    try {
      const videoId = req.params.videoId;
      const username = req.body.username;
      const commentMessage = req.body.comment_message;
      console.log(videoId, username, commentMessage);

      const comment = await CommentService.addComment({
        videoId,
        username,
        commentMessage
      });

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
