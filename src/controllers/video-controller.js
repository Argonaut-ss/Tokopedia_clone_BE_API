import VideoService from "../services/video-services.js";
import validate from "../validation/index.js";
import { addVideoValidation } from "../validation/video-validation.js";
import VideoDTO from "../dto/video-dto.js";

class VideoController {
  static async getAllVideos(req, res, next) {
    try {
      const search = req.query.search;
      const videos = await VideoService.getAllVideos(search);

      const data = videos.map((video) => new VideoDTO(video));

      res.success({ message: "Success Get All Videos", data: data });
    } catch (error) {
      next(error);
    }
  }

  static async addVideo(req, res, next) {
    try {
      const videoData = validate(addVideoValidation, req);
      const video = await VideoService.addVideo(videoData);

      res.success({
        code: 201,
        message: "Success Add Video",
        data: new VideoDTO(video)
      });
    } catch (error) {
      next(error);
    }
  }
}

export default VideoController;
