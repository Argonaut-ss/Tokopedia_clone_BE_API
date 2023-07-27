import express from "express";
import Comment from "../../models/comment_model.js";

const routerComment = express.Router();

routerComment.post("/:video_id", async (req, res) => {
  const comment = new Comment({
    video_id: req.params.video_id,
    username: req.body.username,
    comment_message: req.body.comment_message
  });

  try {
    const commentToSave = await comment.save();
    res.status(200).json({
      status: true,
      code: 200,
      message: "Success Post Product",
      data: {
        video_id: commentToSave.video_id,
        id: commentToSave._id,
        username: commentToSave.username,
        comment_message: commentToSave.comment_message
      }
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      code: 400,
      message: "Data Invalid",
      data: [],
      errors: []
    });
  }
});

routerComment.get("/:video_id", async (req, res) => {
  try {
    const comment = await Comment.findOne({
      video_id: req.params.video_id
    });
    res.status(200).json({
      status: true,
      code: 200,
      message: "Success Get All Videos",
      data: [
        {
          _id: comment._id,
          username: comment.username,
          comment_message: comment.comment_message
        }
      ]
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default routerComment;
