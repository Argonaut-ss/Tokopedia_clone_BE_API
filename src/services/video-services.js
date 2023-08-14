import VideoModel from "../models/video-model.js";

class VideoServices {
  static async getAllVideos(queryReq) {
    const query = {};

    if (queryReq.search) {
      query.title = { $regex: queryReq.search, $options: "i" };
    }

    if (queryReq.category) {
      query.categories = { $in: [queryReq.category.toLowerCase()] };
    }

    const videos = await VideoModel.find(query).exec();

    return videos;
  }

  static async addVideo(videoData) {
    const video = new VideoModel(videoData);
    const videoSave = await video.save();

    return videoSave;
  }
}

export default VideoServices;
