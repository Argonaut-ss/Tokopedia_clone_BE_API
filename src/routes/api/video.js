import express from "express";
import Video from "../../models/video-model.js";

const routerVideo = express.Router();

routerVideo.post("/", async (req, res) => {
  console.log(req.body);
  const video = new Video({
    title: req.body.title,
    url_video: req.body.url_video,
    url_thumbnail: req.body.url_thumbnail
  });

  try {
    const videoToSave = await video.save();
    res.status(200).json({
      status: true,
      code: 200,
      message: "Success Post Video",
      data: {
        id: videoToSave._id,
        title: videoToSave.title,
        thumbnail: videoToSave.url_thumbnail,
        url_video: videoToSave.url_video
      }
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      code: 400,
      message: "Data Invalid",
      data: [],
      errors: []
    });
  }
});

routerVideo.get("/", async (req, res) => {
  try {
    const video = await Video.find();
    res.status(200).json({
      status: true,
      code: 200,
      message: "Success Get All Videos",
      data: [
        {
          _id: video._id,
          title: video.title,
          thumbnail: video.thumbnail
        }
      ]
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default routerVideo;
