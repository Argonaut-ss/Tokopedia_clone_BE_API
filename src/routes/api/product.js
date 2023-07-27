import express from "express";
import Product from "../../models/product_model.js";

const routerProduct = express.Router();

routerProduct.post("/:video_id", async (req, res) => {
  const product = new Product({
    video_id: req.params.video_id,
    url_product: req.body.title,
    title: req.body.title,
    price: req.body.price
  });

  try {
    const productToSave = await product.save();
    res.status(200).json({
      status: true,
      code: 200,
      message: "Success Post Product",
      data: {
        video_id: productToSave.video_id,
        id: productToSave._id,
        url_product: productToSave.url_product,
        title: productToSave.title,
        price: productToSave.price
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

routerProduct.get("/:video_id", async (req, res) => {
  try {
    const product = await Product.findOne({
      video_id: req.params.video_id
    });
    res.status(200).json(product);
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default routerProduct;
