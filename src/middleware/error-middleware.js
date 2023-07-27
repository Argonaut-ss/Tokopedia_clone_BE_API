import { ResponseError } from "../errors/error-response.js";

export const errorMiddleware = (error, req, res, next) => {
  if (!error) {
    next();
    return;
  }

  if (error instanceof ResponseError) {
    res.error(error.message, error.code, error.data, error.errors).end();
  } else {
    console.log(error);
    res.internalServerError().end();
  }
};