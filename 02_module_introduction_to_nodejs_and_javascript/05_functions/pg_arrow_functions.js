/**
 * Para este ejercicio vamos a dar tres funciones ya definidas. Nuestro trabajo será cambiarle la sintaxis y volver a escribirlas para que sean funciones de tipo arrow.
 */
/* function dameCinco() {
    return [1,2,3,4,5];
}
 */
let dameCinco = () => [1, 2, 3, 4, 5];

/* function multiplicarPorDos() {
  return 123 * 2 ;
} */

let multiplicarPorDos = () => 123 * 2;

/* function mostrarNombre() {
  return "Mi nombre es Hernán";
} */

let mostrarNombre = () => "Mi nombre es Hernán";

/**
 *  Ahora nuestro trabajo será refactorizar la función saludar() que recibe un parámetro, es decir, escribirla con la sintaxis necesaria para convertirla en una arrow function.
 */
/* function saludar(nombre) {
    return 'Hola, ' + nombre + '!';
} */

let saludar1 = (nombre) => "Hola, " + nombre + "!";

/**
 *  Tomemos la función saludar(), que esta vez recibe un nombre y un apellido, y vamos de convertirla en una arrow function.
 */
/* function saludar(nombre, apellido) {
  return 'Hola, ' + nombre + ' ' +  apellido + '!';
} */

let saludar2 = (nombre, apellido) => 'Hola, ' + nombre + ' ' +  apellido + '!';