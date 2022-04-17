import express from "express";
import routes from "../routes";
import {videosDetail} from "../controllers/videoController";

const videoRouter = express.Router();
videoRouter.get(routes.videoDetail(), videosDetail);

export default videoRouter;