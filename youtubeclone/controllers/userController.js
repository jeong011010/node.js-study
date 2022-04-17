export const getJoin = (req, res) => {
  res.render("join", {
    pageTitle: "Join"
  })
};
export const postJoin = (req, res) => {
  const { body: { userName, email, password, password2 } } = req;
  if(password !== password2){
    res.status(400)
  }
  else {
    res.redirect(routes.home)
  }
}
export const getLogin = (req, res) => {
  res.render("login", {
    pageTitle: "Login"
  })
};
 
export const postLogin = (req, res) => {
  console.log("로그인 성공!");
  res.redirect(routes.home);
}

export const logout = (req, res) => {
  res.redirect(routes.home);
}

export const userDetail = (req, res) => {
  res.render("userDetail", {
    pageTitle: "User Details"
  })
};

export const editProfile = (req, res) => {
    res.render("editProfile", {
      pageTitle: "Edit Your Profile"
    })
  };