import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => res.send("홈 화면!"));
globalRouter.get(routes.join, (req, res) => res.send("회원가입 화면!"));
globalRouter.get(routes.login, (req, res) => res.send("로그인 화면!"));
globalRouter.get(routes.logout, (req, res) => res.send("로그아웃 화면!"));
globalRouter.get(routes.search, (req, res) => res.send("검색 화면!"));
 
export default globalRouter;