// Version 1 using switch
/* function calculateCarRentingBill(carType, rentingDays, hasBabyChair) {
  let totalBill = 0;

  if (typeof carType === "string") {
    switch (carType.toLowerCase()) {
      case "compact":
        totalBill += 14000 * rentingDays;
        break;

      case "medium":
        totalBill += 17000 * rentingDays;
        break;
      case "van":
        totalBill += 28000 * rentingDays;
        break;

      default:
        return "Invalid vehicle type";
    }
  }

  if (hasBabyChair) {
    totalBill += 1200 * rentingDays;
  }

  return totalBill;
}

console.log(calculateCarRentingBill("medium", 2, true)); */

// If I was the Node.js designer, this is how I would create the .log() from console object'
/* function log(cb) {
  return `El Error Es: ${JSON.stringify(cb())}`
} */

// console.log(calculateCarRentingBill("medium", 2, true));

// Version 2, using ()=> & dynamic access to an object <3
const pricesByCarType = {
  compact: 14000,
  medium: 17000,
  van: 28000,
};

const calculateCarRentingBill = (carType, rentingDays, hasBabyChair) => {
  let totalBill = 0;
  if (typeof carType === "string") {
    const price = pricesByCarType[carType.toLowerCase()];
    if (price) {
      totalBill += price * rentingDays;
    } else {
      return `Invalid car type: ${carType}`;
    }
  }
  if (hasBabyChair) {
    totalBill += 1200 * rentingDays;
  }
  return totalBill;
};

console.log(calculateCarRentingBill("Compact", 10, true));
