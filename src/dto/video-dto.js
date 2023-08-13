class VideoDTO {
  constructor(video) {
    this.id = video._id;
    this.title = video.title;
    this.thumbnailUrl = video.ulr_thumbnail;
    this.videoUrl = video.url_video;
    this.totalView = video.total_view;
    this.storeName = video.store_name;
    this.discountCoupon = video.discount_coupon;
    this.onlyAtLive = video.only_at_live;
    this.timeStamps = video.timestamps;
  }
}

export default VideoDTO;
