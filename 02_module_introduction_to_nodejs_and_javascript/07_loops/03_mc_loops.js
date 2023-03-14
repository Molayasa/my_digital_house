// 1. Crear una función que pida un valor por parámetro y muestre los 10 números siguientes.
// Version 1
/* function showNumbers(num) {
  let number = 0;
  for (let i = 0; i <= 10; i++) {
    number++;
  }
  return number;
} */

// Version 2
function showNumbers(num) {
  for (let i = 0; i < 10; i++) {
    console.log(++num);
  }

  /*  for (let i = num + 1; i <= num + 10; i++) {
    console.log(i);
  } */

  /* let i = 0;
  while (i < 10) {
    console.log(++num)
    i++;
  } */
}
showNumbers(14);

// 2. Imprimir los números entre el 1 y el 57, saltando de tres en tres.

function printNumbers() {
  for (let i = 1; i <= 57; i += 3) {
    console.log(i);
  }
}
printNumbers();

// 3. Escribir un programa que muestre la sumatoria de todos los números entre el 0 y el 100.

function sumatory() {
  let sum = 0;
  for (let i = 100; i >= 0; i--) {
    sum += i;
  }
  return sum;
}
console.log(sumatory());

/**
 * 4. Crear una función que reciba por parámetro una cadena de texto: ‘practicando el uso de los ciclos o bucles’.
 *  Tendrá la responsabilidad de mostrar al usuario cada una de las letras de la cadena de texto pero en MAYÚSCULA.
 *  Pista: Investigar el método .toUpperCase.
 */

function showChars(text) {
  text = text.toUpperCase();
  for (let i = 0; i < text.length; i++) {
    console.log(text[i]);
  }
}

showChars("practicando el uso de los ciclos o bucles");

/**
 * 5. Crear una función que reciba como parámetro un array de números positivos.
 * Tendrá la responsabilidad de retornar un nuevo array pero sólo con los valores pares.
 */

function filterEvens(numbers) {
  const evens = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evens.push(numbers[i]);
    }
  }
  return evens;
}

console.log(filterEvens([1, 2, 3, 4, 5, 6]));
