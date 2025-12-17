
module.exports = {
  
  login(req, user) {
    req.session.user = {
      id: user.id || null,
      email: user.email || null,
      role: user.role || "customer"
    };
  },


  logout(req) {
    req.session.destroy(err => {
      if (err) {
        console.error("Session destroy error:", err);
      }
    });
  },


  isLoggedIn(req) {
    return !!req.session.user;
  },


  getUser(req) {
    return req.session.user || null;
  }
};
