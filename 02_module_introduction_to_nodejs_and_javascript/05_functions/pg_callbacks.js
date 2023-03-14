/**
 * Vamos a crear tres funciones y ver cómo empezar a trabajar con callbacks.

    La primera función se llamará doble. Esta recibirá un número y retornará el doble.

    La segunda función se llamará triple. Esta recibirá un número y retornará el triple.

    La tercera función se llamará aplicarCallback y recibirá por parámetro un numero y una función. Esta retornará el valor de aplicar dicha función al valor que recibió.
 */

function doble(num) {
  return num * 2;
}

const triple = (num) => num * 3;

const aplicarCallback = (num, cb) => cb(num);

console.log(aplicarCallback(2, doble));
console.log(aplicarCallback(4, triple));

/**
 * Vamos a ver cómo podemos crear una función que nos sirva como calculadora. Empecemos con algo sencillo...

    Creemos cuatro funciones que realicen las operaciones principales de una calculadora. Nuestro trabajo será definir la función suma, resta, multiplicacion y division. Cada una de ellas recibirá dos parámetros y deberá realizar la operación matemática según corresponda. Por ejemplo, la función suma deberá retornar la suma de ambos parámetros; la función resta, la resta de ambos parámetros, y así sucesivamente.

    Ahora sí, con esas funciones ya definidas, creemos la función calculadora. Esta función recibirá dos parámetros numéricos y una función, que será nuestro callback.
 */

const suma = (num1, num2) => num1 + num2;
const resta = (num1, num2) => num1 - num2;
const multiplicacion = (num1, num2) => num1 * num2;
const division = (num1, num2) => num1 / num2;

const calculadora = (num1, num2, operation) => operation(num1, num2);

console.log(calculadora(2, 5, suma));