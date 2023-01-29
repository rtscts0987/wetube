import express from "express";
import { githubStart, githubFinish, logout } from "../controllers/userController";

const userRouter = express.Router();

// userRouter.get("/:id([0-9a-f]{24})", watch);
// userRouter.route("/:id([0-9a-f]{24})/edit")
//     .get(getEdit)
//     .post(postEdit);
// userRouter.get("/:id([0-9a-f]{24})/delete", remove);
// userRouter.route("/upload")
//     .get(getUpload)
//     .post(postUpload);
userRouter.get("/logout", logout);
userRouter.get("/github/start", githubStart);
userRouter.get("/github/finish", githubFinish);

export default userRouter;