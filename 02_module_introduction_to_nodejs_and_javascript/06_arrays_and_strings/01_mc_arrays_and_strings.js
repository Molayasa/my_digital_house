// Define un array que contenga un conjunto de seis (6) productos de electrodomésticos.

let electrodomestics = [
  "blender",
  "washing machine",
  "coffee maker",
  "fridge",
  "mixer",
  "microwave",
];

// Acceder de manera aleatoria a diferentes elementos del array. Recuerda mostrar por la consola los resultados.
console.log(electrodomestics[0]);
console.log(electrodomestics[3]);
console.log(electrodomestics[1]);
console.log(electrodomestics[5]);

// Extraer el primer elemento del array y agregarlo al final del mismo.

let firstElement = electrodomestics.shift();
electrodomestics.push(firstElement);

console.log(firstElement);
console.log(electrodomestics);

// Agregar al final del array dos (2) nuevos productos.

electrodomestics.push("lantern", "lamp");
console.log(electrodomestics);

// Mostrar por la consola la cantidad de elementos que contiene el array.
console.log(electrodomestics.length);

/**
 * Buscar un elemento del array y crear una condición responsable de establecer si
existe o no el producto dentro del array. De existir, se le debe mostrar el mensaje:
“Producto encontrado”. En el caso contrario mostrar el mensaje “El producto buscado
no existe”. 
 */
if (electrodomestics.includes("mixer")) {
  console.log("Product found");
} else {
  console.log("Product does not exist");
}

// Unificar todos los elementos del array en una cadena de texto (string), separando los elementos por espacios en blanco.
let phrase = electrodomestics.join(" ");
console.log(phrase);

// Determinar la cantidad de elementos que posee la cadena de texto obtenida.
console.log(phrase.length);

// Cambiar el nombre de algún producto de la cadena de texto por otro, valiéndose de la función adecuada para ello.
console.log(phrase.replace("blender", "stove"));

/**
 * Con la cadena de texto obtenida generar un nuevo array con cada una de las palabras
 * de la cadena de texto. Tener en cuenta que los elementos deben estar separados por una coma.
 */
let newArray = phrase.split(" ");
console.log(newArray);
