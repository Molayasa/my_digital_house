// Version 1
const importCollectibles = require("./collectibles.js");

const hotToys = importCollectibles("Hot Toys");
const bandai = importCollectibles("Bandai");
const starWars = importCollectibles("Star wars");

const unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

const collectibles = {
  figures: unifiedCollectibles,
  getFiguresList: function () {
    this.figures.forEach((figure) => console.log(figure));
  },
  getFiguresByBrand: function (brandName) {
    const findFiguresByBrand = this.figures.filter(
      (figure) => figure.brand === brandName
    );
    return findFiguresByBrand;
  },
};

collectibles.getFiguresList();
console.log(collectibles.getFiguresByBrand("Hot Toys"));

