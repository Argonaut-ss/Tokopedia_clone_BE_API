import ProductModel from "../models/product-model.js";

class ProductService {
  static async addProduct({ videoId, title, price, productUrl, imageUrl }) {
    const product = new ProductModel({
      video_id: videoId,
      title: title,
      price: price,
      url_product: productUrl,
      url_image: imageUrl
    });

    const productSave = await product.save();

    return productSave;
  }

  static async getAllProducts(videoId) {
    const products = await ProductModel.find({ video_id: videoId }).exec();

    return products;
  }
}

export default ProductService;
