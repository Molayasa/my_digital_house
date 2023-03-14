/**
 * Para este ejercicio contamos con un array de destinos del mundo ya definido.
 * Queremos, usando destructuramiento, definir las variables bariloche y china, y extraer del array únicamente los destinos "Bariloche" y "China".
 */

let destinosDelMundo = [
  "Marruecos",
  "Bariloche",
  "Barcelona",
  "China",
  "Grecia",
];

let [, bariloche, , china] = destinosDelMundo;

console.log(bariloche, china);

/**
 * Para este ejercicio contamos con un objeto literal auto ya definido.
 * Queremos, usando desestructuramiento, definir las variables marca y color, haciendo que las mismas tengan el valor
 * correspondiente del objeto literal.
 */

let auto = { marca: "Ferrari", kilometros: 31, color: "Rojo" };
let { marca, color } = auto;

console.log(marca, color);
