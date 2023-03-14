const fs = require("fs");

function importBikes() {
  // return JSON.parse(fs.readFileSync("./bikes.json", "utf-8"))
  const bikesJson = fs.readFileSync("./bikes.json", "utf-8");
  const bikes = JSON.parse(bikesJson);
  // console.log(typeof bikes, typeof bikesJson);
  return bikes;
}

// importBikes();
module.exports = importBikes;
