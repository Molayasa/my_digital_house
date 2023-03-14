/**
 * Probá y experimenta en la consola las siguientes consultas realizando distintas impresiones por pantalla:

        seriesFavoritasDeAna
        seriesFavoritasDeHector
        ["hola","mundo!"]
        ["hola","hola!"]

    Este ejercicio requiere de que muestres por consola las variables y los arrays mencionados anteriormente.
 */
let seriesFavoritasDeAna = [
  "Game of Thrones",
  "Breaking Bad",
  "House of Cards",
];
let seriesFavoritasDeHector = [
  "En Terapia",
  "Recordando el Show de Alejandro Molina",
];


console.log(seriesFavoritasDeAna);
console.log(seriesFavoritasDeHector);
console.log(["hola", "mundo!"]);
console.log(["hola", "hola!"]);

/**
 * Tenemos un array con palabras sueltas que, juntas, forman una gran frase.

Queremos, utilizando un método de array sobre la arrayFrase , convertirlo en una oración entera, y almacenar ese String en una variable llamada fraseNueva.
 */
let arrayFrase = [
  "No",
  "he",
  "fracasado,",
  "simplemente",
  "me",
  "he",
  "topado",
  "con",
  "diez",
  "mil",
  "soluciones",
  "equivocadas",
];

let fraseNueva = arrayFrase.join(" ");
console.log(arrayFrase);

/**
 * Para este ejercicio contamos con el array estudiantes, en donde, en cada índice, almacena un objeto con las propiedades nombre, promedio y curso.

    Queremos sacar a Alexis, que acaba de egresar, y sabemos que está último en ese array.

    Para eso debemos, utilizando un método de array, guardar los datos de Alexis en una variable nueva llamada alumnoEgresado.
 */

let estudiantes = [
  {
    nombre: "Alvaro",
    promedio: 9,
    curso: "Android",
  },
  {
    nombre: "Daniel",
    promedio: 6,
    curso: "Full Stack",
  },
  {
    nombre: "Alexis",
    promedio: 3,
    curso: "iOS",
  },
];

let alumnoEgresado = estudiantes.pop();
console.log(alumnoEgresado.promedio);

/**
 * Se inscribieron dos estudiantes nuevos y queremos agregarlos al final del array estudiantes.

  Nuestro trabajo será agregar de a un alumno por vez, utilizando algún método de array.
 */

estudiantes.push({
  nombre: "Juan",
  promedio: 5,
  curso: "iOS",
});

estudiantes.push({
  nombre: "Miguel",
  promedio: 2,
  curso: "Android",
});

/**
 * Se dio de baja un alumno.

    Tenemos que dar de baja al primer estudiante y queremos sacarlo del array estudiantes. Para eso, debemos crear una variable llamada alumnoDeBaja y, utilizando un método de array, almacenar en ella a ese primer estudiante.
 */

let alumnoDeBaja = estudiantes.shift();
alumnoDeBaja.nombre = "Alvareto";
console.log(alumnoDeBaja.nombre);

/**
 * Tenemos la tarea de reintegrar a dos estudiantes que se habían registrado al principio de todo, se dieron de baja, ¡pero volvieron! Y para que no pierdan su lugar privilegiado queremos, utilizando un método de array, agregar al inicio del mismo a cada estudiante (de a uno a la vez).
 */

estudiantes.unshift({
  nombre: "Mariana",
  promedio: 9,
  curso: "Full Stack",
});

estudiantes.unshift({
  nombre: "Francisco",
  promedio: 2,
  curso: "Android",
});

console.log(estudiantes);


 