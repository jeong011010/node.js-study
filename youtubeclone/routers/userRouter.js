import express from "express";
import { editProfile } from "../controllers/userController";
import routes from "../routes";

 /*
export const userRouter = express.Router();
 
userRouter.get("/", (req, res) => {res.send("user home")});
userRouter.get("/edit", (req, res) => {res.send("user edit")});
userRouter.get("/password", (req, res) => {res.send("user password")});
*/
// MVC : Model, View, Control

const userRouter = express.Router();
userRouter.get(routes.editProfile, editProfile);
//userRouter.get(routes.userDetail, userDetail); <- this code error
export default userRouter;