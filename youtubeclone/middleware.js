import routes from "./routes";

export const localsMiddleware = (req, res, next) =>{
    res.locals.siteName = "NanaTube"; // 전역변수
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: false,
        id: 12345
      }
    next();
}