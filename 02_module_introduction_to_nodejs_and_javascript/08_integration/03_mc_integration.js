/**
 * Crear una función encontrar el número, que reciba por parámetros un array de números y un número.
 * La función deberá evaluar si el número proporcionado existe o no en el array.
 * De existir debe devolver el mensaje “El número XX sí existe en el array”.
 * En el caso contrario debe mostrar el mensaje: “El valor solicitado no existe”.
 */

const numList = [1, 2, 3, 4, 5, 6];

function findNum(numbers, num) {
  if (numbers.includes(num)) {
    return `El número ${num} sí existe en el array`;
  } else {
    return "El valor solicitado no existe";
  }
}

console.log(findNum(numList, 2));

/**
 * Crear una función Juego de trompito, que reciba dos parámetros:
 * A. El primero, un array con las siguientes cadenas de texto: “Toma 1” ,”Toma 2”, “Pon 1”, “Pon 2”, “Todos ponen”, “Toma todo”
 * B. El segundo parámetro será la cantidad de vueltas del trompito comprendidas entre 2 y 6.
 * La función tendrá como responsabilidad generar un número aleatorio comprendido entre 0 y 5.
 * En función del resultado obtenido, se le debe devolver al usuario alguno de los mensajes suministrados por el trompito.
 */

const gameMessages = [
  "Toma 1",
  "Toma 2",
  "Pon 1",
  "Pon 2",
  "Todos ponen",
  "Toma todo",
];
function spinningTop(messages, num) {
  const message = messages[getRandom(0, 5)];

  function getRandom(min, max) {
    min = Math.floor(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return `After spinning ${num} times, you got: ${message}`;
}

console.log(spinningTop(gameMessages, 5));

/**
 * Crear una función sumatoria de pares e impares, que recibirá por parámetros un array con diez valores numéricos.
 *  La función tendrá la responsabilidad de devolver al usuario la sumatoria total de los números pares y de los números impares.
 */

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumEvensAndOdds(numbers) {
  let sumEvens = 0;
  let sumOdds = 0;
  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number % 2 === 0) {
      sumEvens += number;
    }
    if (number % 2 !== 0) {
      sumOdds += number;
    }
  }
  return `The sum of the Evens is: ${sumEvens}
The sum of the Odds is: ${sumOdds}`;
}

console.log(sumEvensAndOdds(numbers));
