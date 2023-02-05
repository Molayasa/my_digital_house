/**
 * Declará la variable diaDeSemana y asignale el valor "Domingo".
 * Luego implementa un condicional usando el if que compare la igualdad
 * de diaDeSemana con el día "Domingo" , y si es verdadero que imprima
 * por pantalla "¡Hoy es día de descanso!".
 */

const diaDeSemana = 'Domingo';
if (diaDeSemana === 'Domingo') {
  console.log('¡Hoy es día de descanso!');
}
/**
 * Para esto, a la variable marcaRodadoMasGrande debemos asignarle la
 * marca de la bicicleta (como string) utilizando un operador ternario.
 * El operador ternario debe comparar los rodados de ambas bicicletas y
 * retornar el nombre de la marca que tenga el mayor rodado.
 * Las marcas esperadas son los strings: "Mountain Bike" o "Aurora"
 */

const rodadoMountainBike = 24;
const rodadoAurora = 18;

const marcaRodadoMasGrande =
  rodadoMountainBike > rodadoAurora ? 'Mountain Bike' : 'Aurora';
console.log(marcaRodadoMasGrande);

/**
 * El objetivo de este ejercicio es imprimir en consola un texto que ira variando
 * segun el dia que contenga la variable dia.
 * Para esto ya te presentamos un codigo hecho con if/else que tendras que modificar
 * y convertirlo a un switch, manteniendo el mismo resultado.
 */

let dia = 'viernes';

if (dia == 'viernes') {
  console.log('buen finde');
} else if (dia == 'lunes') {
  console.log('buena semana');
} else {
  console.log('buen dia');
}

switch (dia) {
  case 'viernes':
    console.log('buen finde');
    break;
  case 'lunes':
    console.log('buena semana');
    break;
  default:
    console.log('buen dia');
}
