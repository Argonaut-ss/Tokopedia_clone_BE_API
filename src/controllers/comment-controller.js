import CommentService from "../services/comment-services.js";
import validate from "../validation/index.js";
import { addCommentValidation } from "../validation/comment-validation.js";
import CommentDTO from "../dto/comment-dto.js";

class CommentController {
  static async addComment(req, res, next) {
    try {
      const commentData = validate(addCommentValidation, req);
      const comment = await CommentService.addComment(commentData);

      res.success({
        code: 201,
        message: "Success Add comment",
        data: new CommentDTO(comment)
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAllCommentsByVideoId(req, res, next) {
    try {
      const videoId = req.params.videoId;

      const comments = await CommentService.getAllComments(videoId);
      const data = comments.map((comment)=> new CommentDTO(comment));
      
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
