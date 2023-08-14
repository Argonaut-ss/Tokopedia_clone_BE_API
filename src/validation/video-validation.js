import Joi from "joi";

export const addVideoValidation = Joi.object({
  title: Joi.string().max(50).required(),
  url_thumbnail: Joi.string().required(),
  url_video: Joi.string().required(),
  store_name: Joi.string().required(),
  total_view: Joi.number().required(),
  discount_coupon: Joi.boolean().required().default(false),
  only_at_live: Joi.boolean().required().default(false),
  categories: Joi.array().required()
});
