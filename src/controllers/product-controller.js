import ProductService from "../services/product-services.js";

class ProductController {
  static async addProduct(req, res, next) {
    try {
      const videoId = req.params.videoId;
      const productUrl = req.body.url_product;
      const imageUrl = req.body.url_image;
      const title = req.body.title;
      const price = req.body.price;

      const product = await ProductService.addProduct({
        videoId,
        title,
        price,
        productUrl,
        imageUrl
      });

      res.success({
        code: 201,
        message: "Success Add product",
        data: {
          id: product._id,
          title: product.title,
          productUrl: product.url_product,
          imageUrl: product.url_image,
          price: product.price,
          price_format: `Rp. ${product.price}`
        }
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAllProductsByVideoId(req, res, next) {
    try {
      const videoId = req.params.videoId;

      const products = await ProductService.getAllProducts(videoId);
      const data = [];

      products.forEach((product) => {
        data.push({
          id: product._id,
          videoId: product.video_id,
          title: product.title,
          imageUrl: product.url_image,
          productUrl: product.url_product,
          price: product.price,
          price_format: `Rp. ${product.price}`
        });
      });

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
