/**
 *     Declarar una variable llamada perro de tipo objeto literal.

    Esa variable debe tener 3 propiedades:

    1. nombre, con un valor de tipo String.

    2. edad, con un valor de tipo Number.

    3. vacunado, con un valor de tipo Boolean.

 */

const perro = {
  nombre: "Linux",
  edad: 2,
  vacunado: true,
};

/**
 * 

 Para este ejercicio contamos con un objeto literal deportista ya definido, que tiene los siguientes atributos: nombre, energia, experiencia.

    Queremos poder pedirle al deportista que entrene. Para esto, nuestro trabajo va a ser completar la función entrenarHoras.

    La función entrenarHoras tiene las siguientes tres características:

        Recibe por parámetro la cantidad de horas.
        Resta a su energía (this.energia) la cantidad de horas x 5.
        Incrementa su experiencia (this.experiencia) la cantidad de horas x 2.

    Una vez definida la función, podemos ejecutar el código y ver cómo va variando la energía y experiencia del deportista por consola.
 */

let deportista = {
  energia: 100,
  experiencia: 10,
  nombre: "Aimar",
  entrenarHoras: function (hours) {
    this.energia -= hours * 5;
    this.experiencia += hours * 2;
  },
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: " + deportista.energia);
console.log("Deportista experiencia: " + deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: " + deportista.energia);
console.log("Deportista experiencia: " + deportista.experiencia);

/**
 * Nuestro objetivo será crear 3 variables: moduloNativo, moduloInstalado y moduloPropio, en donde cada una almacenará un módulo distinto.
 *  La primera deberá requerir el módulo http, la segunda el módulo axios y la tercera un módulo local exportado del archivo miFuncion.
 * Este último archivo se encuentra en la misma carpeta que nuestro script.js.
 */

let moduloNativo = require("http");
let moduloInstalado = require("axios");
let moduloPropio = require("./my_module");

/**
 * Tenemos un array de películas y necesitamos poder compartirlo con otras partes del sistema.
 *  Nuestro trabajo será almacenar este array en la variable arrayDePeliculas y exportarlo usando módulos.
 */

let arrayDePeliculas = ["Harry Potter", "Her", "Up", "Lego"];

module.exports = arrayDePeliculas;
