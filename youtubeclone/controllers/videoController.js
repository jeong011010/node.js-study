import { videos } from "../db";
import routes from "../routes";

export const search = (req, res) => {
    const searchid = req.query.id;
      res.render("search", {
        pageTitle: "Search",
        searchid,
        videos
      });
};
export const home = (req, res) => {
    res.render("home", {
        pageTitle:"Main",
        videos:videos
    });
};

export const videosDetail = (req, res) => {
  const videoid = req;
  res.render("videosDetail", {
    pageTitle: "Videos Details",
    videoid,
    videos
  });
};

export const getUpload = (req, res) => {
  res.render("videosUpload", {
    pageTitle: "Upload your video"
  })
};
 
	
export const postUpload = (req, res) => {
  const {
    body: {
      videoFile,
      videoTitle,
      videoDesc
    }
  } = req;
  res.redirect(routes.home)
};
 