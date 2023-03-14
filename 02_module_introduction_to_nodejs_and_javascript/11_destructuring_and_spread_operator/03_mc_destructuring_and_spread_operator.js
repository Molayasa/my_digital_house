/**
 * 1. En la carpeta raíz del proyecto, crear un nuevo archivo (extra.js).
 * 
 * 2. Crear un array de números y asignarle un total de diez (10) valores numéricos.
 * 
 * 3. Crear variables que contengan los valores numéricos dispuestos en el array en la posición (0, 2 y 4)
 * y con el resto de los valores numéricos crear un nuevo array. Utiliza los recursos aprendidos en esta clase: Destructuring y Spread operator.
 * 
 * 4. Crear un objeto literal para almacenar los datos de nuestra mascota, considerando los atributos:
 * a. nombre
 * b. tipo de mascota (Perro - Gato) 
 * c. color
 * d. raza
 * 
 * Haciendo uso de la desestructuración, crea una variable por cada una de las claves del objeto literal y al final mostrar al usuario:
 * 
 * "Hola les presento a mi mascota su nombre es: Bony, es un hermoso Perro, de color: Dorado y su raza es: Golden retriever. "
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [num0, , num2, , num4, ...rest] = numbers;

console.log(rest);

const pet = {
  name: "Linux",
  type: "Perro",
  color: "Blanco manto negro",
  race: "Husky",
};

const { name, type, race: brand, color } = pet;

console.log(
  `Hola, les presento a mi mascota su nombre es: ${name}, es un hermoso ${type}, de color ${[
    color,
  ]} y su raza es: ${brand}.`
);
