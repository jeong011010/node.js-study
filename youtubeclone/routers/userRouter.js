import express from "express";
 /*
export const userRouter = express.Router();
 
userRouter.get("/", (req, res) => {res.send("user home")});
userRouter.get("/edit", (req, res) => {res.send("user edit")});
userRouter.get("/password", (req, res) => {res.send("user password")});
*/
// MVC : Model, View, Control

const userRouter = express.Router();
export default userRouter;