const fs = require("fs");

const importCollectibles = (brand) => {
  const collectibles = {
    "hot-toys": 1,
    bandai: 2,
    "star-wars": 3,
  };

  const path = `./data/collectibles_${
    collectibles[brand.trim().toLowerCase().replace(" ", "-")]
  }.json`;

  return JSON.parse(fs.readFileSync(path, "utf-8"));
};

module.exports = importCollectibles;

/* console.log(importCollectibles("Hot Toys"));
console.log(importCollectibles("Bandai"));
console.log(importCollectibles("Star Wars")); */
