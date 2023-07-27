import express from "express";
import ProductController from "../../controllers/product_controller.js";

const productRouter = express.Router();

productRouter.get("/:videoId", ProductController.getAllProductsByVideoId);
productRouter.post("/:videoId", ProductController.addProduct);

export default productRouter;