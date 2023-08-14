import Joi from "joi";

export const addCommentValidation = Joi.object({
  video_id: Joi.string().required(),
  username: Joi.string().max(50).required(),
  comment_message: Joi.string().max(100).required()
});

export const getAllCommentByVideoIdValidation = Joi.object({
  video_id: Joi.string().required()
});