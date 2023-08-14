import ProductModel from "../models/product-model.js";

class ProductService {
  static async addProduct(productData) {
    const product = new ProductModel(productData);

    const productSave = await product.save();

    return productSave;
  }

  static async getAllProducts(videoId) {
    const products = await ProductModel.find({ video_id: videoId }).exec();

    return products;
  }
}

export default ProductService;
