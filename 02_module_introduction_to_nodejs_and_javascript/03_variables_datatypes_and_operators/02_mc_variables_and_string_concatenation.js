/**
 * En el archivo se desarrolla un código para calcular el nuevo sueldo a un trabajador,
 * para ello debes declarar las siguientes variables y almacenar en ellas los siguientes datos del trabajador:
 * nombre - apellido - sueldoActual - porcentajeAumento
 * Almacenar en una variable el “calculoAumento”. Esta contendrá el resultado de la operación del
 * aumento del trabajador (sueldoActual * porcentajeAumento)/ 100).
 * En otra variable “nuevoSueldo”, almacena el resultado del cálculo del nuevo sueldo.
 * Usando el console.log() y concatenando string, muestra en la consola de Visual Studio Code los contenidos de cada una de las variables
 */

const name = 'John';
const surname = 'Doe';
const currentSalary = 1000;
// const incrementBy = 20;
const incrementBy = 0.2; // 20/100

// const totalIncrement = (currentSalary * incrementBy) / 100;
const totalIncrement = currentSalary * incrementBy;
const newSalary = currentSalary + totalIncrement;

console.log(
  'Hola, estimad@' +
    ' ' +
    name +
    ' ' +
    surname +
    '\nEn base a su sueldo actual: \n$' +
    currentSalary +
    '\nHa recibido un aumento del 20%: \n$' +
    totalIncrement +
    '\ny su nuevo sueldo es de: $' +
    newSalary
);
