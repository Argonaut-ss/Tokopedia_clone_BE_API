import VideoModel from "../models/video-model.js";

class VideoServices {
  static async getAllVideos(search) {
    search = search ?? "";
    const videos = await VideoModel.find({title: { $regex: search, $options: "i"} }).exec();

    return videos;
  }

  static async addVideo({ title, urlThumbnail, urlVideo }) {
    const video = new VideoModel({
      title: title,
      url_thumbnail: urlThumbnail,
      url_video: urlVideo
    });
    const videoSave = await video.save();

    return videoSave;
  }
}

export default VideoServices;
