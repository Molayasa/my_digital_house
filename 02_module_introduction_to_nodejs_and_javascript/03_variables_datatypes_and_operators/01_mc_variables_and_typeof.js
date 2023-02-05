/**
 * Para llevar un control automatizado en la venta de boletos para ingresar a un partido de fútbol,
 * el Tech Leader de tu equipo te asigna la responsabilidad de crear y asignar valor a un conjunto de variables.
 * Recordá tener presente el tipo de dato que contienen. A continuación te dejamos algunos ejemplos de variables que puedes crear:
 * Nombre - Apellido - Edad - Número de Teléfono - Socio (Valor booleano) - Fecha del partido - Hora del partido - Número de silla - Precio del boleto (con valores decimales).
 * Usando el console.log(), muestra al usuario el valor asignado a cada variable.
 * Finalmente, utilizando el console.log() y el typeof(), muestra al usuario el tipo de dato de cada una de las variables utilizadas.
 */

const name = 'John';
const surname = 'Doe';
const age = 25;
const phone = '123-456-7890';
const isPartner = true;
const gameDate = new Date();
const gameTime = '10:00';
const chairId = 1;
const ticketPrice = 99.9;

console.log(
  name,
  surname,
  age,
  phone,
  isPartner,
  gameDate,
  gameTime,
  chairId,
  ticketPrice
);
console.log(
  typeof name,
  typeof surname,
  typeof age,
  typeof phone,
  typeof isPartner,
  typeof gameDate,
  typeof gameTime,
  typeof chairId,
  typeof ticketPrice
);
