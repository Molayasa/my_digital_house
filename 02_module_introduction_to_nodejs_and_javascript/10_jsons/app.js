const importBikes = require("./bikes");

// const bikes = importBikes();

const dhBikes = {
  bikes: importBikes(),
  findBike: function (id) {
    // Version 1
    /* const foundBike = this.bikes.filter((bike) => bike.id === id);
    if (!foundBike.length) {
      return null;
    }
    return foundBike[0];
    */

    // Version 2
    const [existingBike] = this.bikes.filter((bike) => bike.id === id);
    // return existingBike ? existingBike : null;

    return existingBike ?? null;
  },
  sellBike: function (id) {
    const bike = this.findBike(id);
    if (!bike || bike.vendida) {
      return "Bike not found";
    }

    bike.vendida = true;
    // console.log(this.bikes[0]);
    return bike;
  },
  getBikesForSell: function () {
    return this.bikes.filter((bike) => !bike.vendida);
  },
  getTotalSells: function () {
    return (
      this.bikes
        .filter((bike) => bike.vendida)
        // .reduce((acc, bike) => acc + bike.precio);
        .reduce((acc, bike) => acc + bike.precio, 0)
    );
  },
  incrementByPercent: function (percent) {
    return this.bikes.map((bike) => {
      bike.precio += bike.precio * (percent / 100);
      return bike;
    });
  },
  getByRoll: function (roll) {
    return this.bikes.filter((bike) => bike.rodado === roll);
  },
  showAllBikes: function () {
    // Version 1
    // this.bikes.forEach((bike) => console.log(bike));
    // Version 2
    for (const bike of this.bikes) {
      console.log(bike);
    }
  },
};

console.log(dhBikes.findBike(7));
console.log(dhBikes.sellBike(1));
console.log(dhBikes.getBikesForSell());
console.log(dhBikes.getTotalSells());
console.log(dhBikes.incrementByPercent(10));
console.log(dhBikes.getByRoll(29));
dhBikes.showAllBikes();

// Reduce explanation
/* [1, 2, 3, 4, 5].reduce((acc, curr) => {
  console.log(acc, curr);
  return acc + curr;
}); */

// Map explanation
/* console.log(
  [1, 2, 3, 4, 5].map((num) => {
    console.log(num);
    return num * 2;
  })
);
 */
