import routes from "./routes";

export const localsMiddleware = (req, res, next) =>{
    res.locals.siteName = "NanaTube"; // 전역변수
    res.locals.routes = routes;
    next();
}