import ProductService from "../services/product-services.js";
import validate from "../validation/index.js";
import { addProductValidation } from "../validation/product-validation.js";
import ProductDTO from "../dto/product-dto.js";

class ProductController {
  static async addProduct(req, res, next) {
    try {
      const productData = validate(addProductValidation, req);
      const product = await ProductService.addProduct(productData);

      res.success({
        code: 201,
        message: "Success Add product",
        data: new ProductDTO(product)
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAllProductsByVideoId(req, res, next) {
    try {
      const videoId = req.params.videoId;

      const products = await ProductService.getAllProducts(videoId);
      const data = products.map((product)=> new ProductDTO(product));

      res.success({
        message: "Success Get All Products By VideoID",
        data: data
      });
    } catch (error) {
      next(error);
    }
  }
}

export default ProductController;
