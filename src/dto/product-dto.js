class ProductDTO {
  constructor(product) {
    this.id = product._id;
    this.videoId = product.video_id;
    this.title = product.title;
    this.imageUrl =  product.url_image;
    this.productUrl = product.url_product;
    this.price = product.price;
    this.price_format = `Rp. ${product.price}`;
  }
}

export default ProductDTO;
