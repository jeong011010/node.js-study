import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
const app = express();
const PORT = 4000;
 
function handleListening() {
  console.log(`Example app listening on port ${PORT}!`);
}

function handleHome(req, res) {
  res.send("홈 화면입니다.");
}

function handleProfile(req, res){
    res.send("프로필 화면입니다.")
}

function betweenHome(req,res,next){
    console.log("중간에 있어요");
    next();
}
const middleware = (req,res,next)=>{
    res.send("하이!");
};
 
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(helmet());
app.use(morgan("short"));
app.get("/", middleware, handleHome);
app.get("/profile", handleProfile);

export default app;