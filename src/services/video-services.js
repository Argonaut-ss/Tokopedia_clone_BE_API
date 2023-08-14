import VideoModel from "../models/video-model.js";

class VideoServices {
  static async getAllVideos(search) {
    search = search ?? "";
    const videos = await VideoModel.find({title: { $regex: search, $options: "i"} }).exec();

    return videos;
  }

  static async addVideo(videoData) {
    const video = new VideoModel(videoData);
    const videoSave = await video.save();

    return videoSave;
  }
}

export default VideoServices;
