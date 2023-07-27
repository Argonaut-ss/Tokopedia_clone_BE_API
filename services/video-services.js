import { ErrorResponse } from "../errors/error-response.js";
import VideoModel from "../src/models/video-model.js";

class VideoServices {
  static getVideos() {
    const videos = VideoModel.getVideos();

    if (videos.length === 0) {
      throw new ErrorResponse(404, "Video Is Empty");
    }
    return videos;
  }

  static addVideo(title) {
    const addedVideo = VideoModel.addVideo(title);
    const newVideo = VideoModel.getVideos();

    return { addedVideo, newVideo };
  }
}

export default VideoServices;
