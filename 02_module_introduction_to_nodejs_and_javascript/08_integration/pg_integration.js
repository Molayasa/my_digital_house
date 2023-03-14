/**
 * Escribí la función sumatoriaBajoImporte la cual recibiendo un array con importes nos devuelva el resultado final de la suma de los importes de todos los meses
 * que tienen ganancia, a excepción de los que superen un importe de $ 1.000
 */

function sumatoriaBajoImporte(amounts) {
  let sum = 0;
  for (let i = 0; i < amounts.length; i++) {
    const amount = amounts[i];
    if (amount > 0 && amount <= 1000) {
      sum += amount;
    }
  }
  return sum;
}

console.log(sumatoriaBajoImporte([100, 1010, -500, 0, 10]));

/**
 * Nos piden que escribamos la función asientosDisponibles(), que tome como parámetro un conjunto de asientos disponibles y el asiento que quiere ocupar la persona.
 *  Nuestra función deberá verificar si el asiento solicitado se encuentra disponible y devolverle un mensaje claro y prolijo al cliente
 */

function availableSeats(seats, userSeat) {
  let message = "";
  if (seats.includes(userSeat)) {
    message = `Felicitaciones, el asiento número ${userSeat} está disponible`;
  } else {
    message = `Lo sentimos, el asiento número ${userSeat} está ocupado, pero aún quedan ${seats.length} asientos disponibles`;
  }
  return message;
}

console.log(availableSeats([15, 28, 44, 45, 70], 17));

/**
 * Para ayudar a la empresa escribamos una función reporteDePasajeros(), la cual cuando reciba la cantidad de estaciones que avanzó el tren,
 * nos devuelva un reporte de la cantidad de cada una de las estaciones y la cantidad de pasajeros que lleva el tren.
 * La empresa nos provee los siguientes datos:
 * El tren sale de la estación terminal siempre con 200 pasajeros.
 * En cada estación el tren sube 50 pasajeros y se bajan 30.
 * En la estación Florida (la estación número 5), como es una estación central es la única donde bajan 80 personas y suben 120.
 */

function reporteDePasajeros(estacion) {
  let messages = [];
  let pasajerosActuales = 200;
  for (let i = 0; i <= estacion; i++) {
    if (i === 0) {
      messages.push(getMessage(i, 0));
    }
    if (i !== 0 && i !== 5) {
      messages.push(getMessage(i, 20));
    }
    if (i === 5) {
      messages.push(getMessage(i, 40));
    }
  }

  return messages;

  function getMessage(estacion, pasajeros) {
    pasajerosActuales += pasajeros;
    return (
      "En la estación " +
      estacion +
      " hay " +
      pasajerosActuales +
      " pasajeros arriba del tren"
    );
  }
}
console.log(reporteDePasajeros(0));
console.log(reporteDePasajeros(3));
console.log(reporteDePasajeros(5));

/**
 * Con la ayuda de lo que sabe Nelson tenes que realizar una función laClaveSecreta(), que tome como parámetro un conjunto de caracteres y 
 * te pueda devolver el mensaje de manera ordenada.
 * Por ejemplo: 
 * // Ejecutando la función con el siguiente parámetro:
 * laClaveSecreta( [ "s", "*", "e", "n", "u", "l", " ", "s", "*", "e", " ", "a", "í", "*", "d", " ", "l", "*", "E", "*"] );  
 * // El resultado que nos devuelve la función es el siguiente: "El día es lunes";  
 */

function laClaveSecreta(cadena) {
  return cadena.reverse().join("").replaceAll("*", "");
}

console.log(laClaveSecreta([
  "a",
  "*",
  "d",
  "a",
  "r",
  "f",
  "*",
  "i",
  "c",
  "*",
  "s",
  "e",
  "d",
  " ",
  "e",
  "*",
  "v",
  "a",
  "l",
  "C",
]));

