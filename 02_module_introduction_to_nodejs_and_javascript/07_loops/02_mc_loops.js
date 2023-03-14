/**
 * Para ayudar al equipo de desarrollo, tu responsabilidad será:
 * 1. Crear una función que no reciba ningún parámetro. Tendrá la responsabilidad de
 * generar de manera automática las tablas de multiplicar del 1 al 10.
 * 2. Lo ideal es que función muestre al usuario algo así:
 * Tabla de multiplicar
 * 1 * 1 = 1
 * 1 * 2 = 2
 * 1 * 3 = 3
 * Y así hasta la tabla del 10
 */

function tables() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
}

tables();
