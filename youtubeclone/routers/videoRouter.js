import express from "express";
import routes from "../routes";
import {videosDetail, getUpload, postUpload} from "../controllers/videoController";

const videoRouter = express.Router();
videoRouter.get(routes.videoDetail(), videosDetail);
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);

export default videoRouter;