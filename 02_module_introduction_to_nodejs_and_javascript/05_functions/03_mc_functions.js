/**
 * Crear una función que recibe un string en minúscula, lo convierte a mayúsculas
 * y lo retorna. Investiga qué hace el método de strings .toUpperCase()
 */
/* function toUpperWord(word) {
  return word.toUpperCase();
}

console.log(toUpperWord("te amo, Edu"));
 */
/**
 * Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro.
 * Investiga qué hace la palabra reservada typeof().
 */
// Version 1
/* function toTypeOf("word"){
  return let = "word";
}   
console.log(typeof toTypeOf); */

// Version 2
let myTypeOf = (word) => typeof word;

console.log(myTypeOf("Edu"));

/**
 * Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.
 */

function calculateDogAge(dogAge) {
  return dogAge * 7;
}
console.log(calculateDogAge(10));

/**
 * Crear una función que calcule el valor de una hora de trabajo, teniendo en cuenta
 * que dicha función recibe tres parámetros: El salario mensual, la cantidad de días trabajados
 *  y la cantidad de horas que regularmente trabajada por día.
 */

function costWorkHour(monthlySalary, days, hours) {
  return monthlySalary / (days * hours);
}

console.log(costWorkHour(50, 4, 3));
