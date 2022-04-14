import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { userRouter } from "./router";
const app = express();
const PORT = 4000;
 
// package
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());
app.use(morgan("short"));
//
	
const handleHome = (req, res) => res.send("홈 화면입니다.");
const handleProfile = (req, res) => res.send("프로필 화면입니다.");

app.get("/", handleHome);
app.get("/profile", handleProfile);
app.use("/user", userRouter);

export default app;