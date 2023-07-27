import express from "express";
import VideoController from "../../controllers/video-controller.js";

const videoRouter = express.Router();

videoRouter.get("/", VideoController.getAllVideos);
videoRouter.post("/", VideoController.addVideo);

export default videoRouter;