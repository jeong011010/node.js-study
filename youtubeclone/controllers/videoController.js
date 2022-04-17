import { videos } from "../db";

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
  res.render("videosDetail", {
    pageTitle: "Videos Details"
  })
};