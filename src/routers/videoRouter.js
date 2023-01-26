import express from "express";
import { handleWatchVideo, handleUploadVideo, handleSearchVideo, handleEditVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/watch", handleWatchVideo);
videoRouter.get("/upload", handleUploadVideo);
videoRouter.get("/search", handleSearchVideo);
videoRouter.get("/edit", handleEditVideo);

export default videoRouter;