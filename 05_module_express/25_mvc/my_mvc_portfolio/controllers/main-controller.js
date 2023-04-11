const path = require("path");

const mainController = {
  getHome: (req, res) => {
    // TODO: Should I use path?
    return res.sendFile(path.join(__dirname, "../views/home.html"));
  },
};

module.exports = mainController;
