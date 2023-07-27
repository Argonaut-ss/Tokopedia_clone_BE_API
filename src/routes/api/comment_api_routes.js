import express from "express";
import CommentController from "../../controllers/comment_controller.js";

const commentRouter = express.Router();

commentRouter.get("/:videoId", CommentController.getAllCommentsByVideoId);
commentRouter.post("/:videoId", CommentController.addComment);

export default commentRouter;
