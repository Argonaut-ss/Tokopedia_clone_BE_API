import Joi from "joi";

export const addProductValidation = Joi.object({
  video_id: Joi.string().required(),
  title: Joi.string().max(50).required(),
  url_image: Joi.string().required(),
  url_product: Joi.string().required(),
  price: Joi.number().required()
});

export const getAllProductByIdValidation = Joi.object({
  video_id: Joi.string().required()
});