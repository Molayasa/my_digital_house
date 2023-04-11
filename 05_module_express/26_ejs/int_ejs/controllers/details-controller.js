const menuData = require("../data/menu");

const detailsController = {
  getDetails: (req, res) => {
    const { menuId } = req.params;
    const menu = menuData.find((menu) => menu.id.toString() === menuId);

    if (!menu) {
      return res.redirect("/");
    }

    return res.render("menu-detail", {
      menu,
    });
  },
};

module.exports = detailsController;
