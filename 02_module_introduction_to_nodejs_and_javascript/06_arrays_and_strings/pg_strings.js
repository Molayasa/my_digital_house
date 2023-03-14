/**
 * Debemos crear una función llamada dominio que recibirá un string como "" y su función será retornar: "http://www.digitalhouse.com.ar".
 */

function dominio(url) {
  return "http://www." + url; // return url.unshift('http://www.').join('') // url = ['digitalhouse.com.ar'] // url.push(http).reverse().join()
}

/**
 * Lo primero que necesitamos es declarar una variable llamada texto, asignándole como valor un texto (string), el que queramos. Luego, utilizando la propiedad length, tendremos que imprimir en consola el total de caracteres que contiene la frase.
 */

let texto = "Edu es troll";

console.log(texto.length); // Last element: texto[texto.length-1]

/**
 *Nuestra misión, ahora, es crear una función llamada reemplazoFastFast que va a recibir los siguientes tres parámetros:

1. Un texto.

2. La palabra que vamos a buscar para reemplazar.

3. La palabra que vamos a usar para reemplazar.

La función deberá devolver el texto con la palabra reemplazada.

 */

// Version 1
/* function reemplazoFastFast(string, string){
  return let newReemplazoFastFast = reemplazoFastFast("Edu es un troll", "muy", "trollancio");
}

console.log(newReemplazoFastFast.replace()); */

//Version 2

/* var newReemplazoFastFast() => "Edu es un troll"{
 console.log(newReemplazoFastFast.replace( "troll", "trollancio");) 
}
 */

// version 3

/* let text = "Edu es muy troll";

console.log(text.replace("troll", "hermoso")); */

// Version 4

/* function reemplazoFastFast(text, word, wordToReplace) {
  let message = "Edu es muy troll";
}

console.log(message.replace("troll", "hermoso")); */

//Version 5
/* 
let reemplazoFastFast = function (text, word, wordToReplace) {
  var newText = "Edu Es troll";
  return newText;
};

console.log(newText.replace("troll", "hermoso")); */

// Version 6

let phrase = "La troll es Eduardo";
function reemplazoFastFast(text, word, replace) {
  return text.replace(word, replace);
}

console.log(reemplazoFastFast(phrase, "Eduardo", "Paulina"));

/**
 * Para el siguiente ejercicio vamos a suponer que tenemos un texto que copiamos y queremos saber si el texto menciona una palabra en particular.

    Para lograrlo, tendremos que crear una función llamada menciona, que recibirá dos parámetros: un texto —que es donde vamos a buscar— y una palabra —que es la que vamos a averiguar si se menciona en el texto—. 
    La misma función retorna true en el caso de encontrar la palabra. 
 */

let message = "Existen muchas personas en el mundo y Edu es el más troll";
function menciona(text, word) {
  return text.includes(word);
}

console.log(menciona(message, "troll"));

/**
 *   Teniendo como punto de partida la cadena de texto '¡Hola!, soy Carli', deberemos recortarla para poder obtener el nombre 'Carli' en una nueva variable llamada licenciada.
 */

let saludo = "¡Hola, soy Carli!";

let licenciada = saludo.slice(11, 16);

console.log(licenciada);

// En negativo

let licenciada2 = saludo.slice(-6, -1);

console.log(licenciada2);
