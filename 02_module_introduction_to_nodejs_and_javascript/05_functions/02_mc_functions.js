/**
 * El teach leader de la empresa nos pide construir un sistema para un local de venta de comida rápida.
 * Los clientes eligen el tipo de hamburguesa base con un precio base y, por cada selección que el cliente agregue,
 * se le suma el valor de su selección al precio.
 */

// Version 1
let meatOptins = {
  grill: 1800,
  chicken: 1500,
  vegetarian: 1200,
};
let aditionals = {
  jam: 30,
  cheese: 25,
  ketchup: 5,
  mayonnaise: 5,
  mustard: 5,
  tomato: 15,
  lettuce: 10,
  onion: 10,
};

function calculateBurgerBill(
  burgerType,
  jam,
  cheese,
  ketchup,
  mayonnaise,
  mustard,
  tomato,
  lettuce,
  onion
) {
  let totalBill = 0;
  if (typeof burgerType === "string") {
    switch (burgerType.toLowerCase()) {
      case "grill":
        totalBill += 1800;
        break;
      case "chicken":
        totalBill += 1500;
      case "vegetarian":
        totalBill += 1200;
      default:
        "We don't have that burger, go to MacDonalds";
        break;
    }
  }

  if (jam) totalBill += 30;
  if (cheese) totalBill += 25;
  if (ketchup) totalBill += 5;
  if (mayonnaise) totalBill += 5;
  if (mustard) totalBill += 5;
  if (tomato) totalBill += 15;
  if (lettuce) totalBill += 10;
  if (onion) totalBill += 10;

  return totalBill;
}

function totalBillMessage(
  name,
  lastName,
  burgerType,
  jam,
  cheese,
  ketchup,
  mayonnaise,
  mustard,
  tomato,
  lettuce,
  onion,
  calculateBurgerBill
) {
  return `Estimado ${name} ${lastName}, el monto a pagar es de: $${calculateBurgerBill(
    burgerType,
    jam,
    cheese,
    ketchup,
    mayonnaise,
    mustard,
    tomato,
    lettuce,
    onion
  )}`;
}


console.log(
  totalBillMessage(
    "Eduardo",
    "Hernandez",
    "grill",
    true,
    true,
    false,
    false,
    true,
    false,
    true,
    false,
    calculateBurgerBill
  )
);

// Version 2

/* const meatType = {
  grill: 1800,
  chicken: 1500,
  vegetarian: 1200
}

const adds = {
  jam: 30, 
  cheese: 25,
  ketchup: 5,
  mayonnaise: 5,
  mustard: 5,
  tomato: 15,
  lettuce: 10,
  onion: 10,
};

function burgerBill(burgerType, add1, add2, add3, add4, add5, add6, add7, add8){

} */
