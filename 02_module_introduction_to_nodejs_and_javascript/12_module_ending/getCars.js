const fs = require("fs");

module.exports = getCars = () =>
  JSON.parse(fs.readFileSync("./data/cars.json", "utf-8"));
