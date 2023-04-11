const menuData = require("../data/menu")
const about = require("../data/about")

const indexController = {  
  getIndex: (req, res) => {
    res.render("index", {
      menuData,
      about,
    })},
};

module.exports = indexController;
