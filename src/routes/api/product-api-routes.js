import express from "express";
import ProductController from "../../controllers/product-controller.js";

const productRouter = express.Router();

productRouter.get("/:videoId", ProductController.getAllProductsByVideoId);
productRouter.post("/:video_id", ProductController.addProduct);

export default productRouter;
