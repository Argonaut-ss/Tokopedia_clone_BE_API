import express from "express";
const router = express.Router();
import Product from "../models/product_list.js";
import swaggerRoute from "../config/swagger.js";

router.post("/post", (req, res) => {
  const product = new Product({
    url: req.body.url,
    title: req.body.url,
    price: req.body.price
  });

  try {
    const product_to_save = product.save();
    res.status(200).json(product_to_save);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.use("/docs", swaggerRoute);

export default router;
