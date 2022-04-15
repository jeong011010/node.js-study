export const home = (req, res) => res.render('home');
export const search = (req, res) => {
    const searchid = req.query.id;
    res.render("search",{
       pageTitle:"Search",
       searchid: searchid 
    });
};