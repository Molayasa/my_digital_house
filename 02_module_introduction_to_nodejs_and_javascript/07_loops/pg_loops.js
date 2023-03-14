/**
 * Realizar una función llamada imprimirAzul4 que muestre por consola 4 veces la palabra Azul.
 * NO te pedimos que ejecutes la función, por lo cual no deberías hacerlo
 */

function imprimirAzul4(word = "Azul") {
  for (let i = 0; i < 4; i++) {
    console.log(word);
  }
}
imprimirAzul4();

/**
 * Escribí una función llamada pasandoPorI (la última letra es una i latina mayúscula) que muestre por consola "acá i tiene el valor de x" donde x va a ser el
 * valor de la variable i en cada iteración, por cada valor que va tomando i desde 0 hasta el numero 4 inclusive.
 */

function pasandoPorI() {
  for (let i = 0; i <= 4; i++) {
    // console.log("acá i tiene el valor de " + i);
    console.log(`acá i tiene el valor de ${i}`);
  }
}

pasandoPorI();

/**
 * En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta.
 * Esta función recibe un número X por parámetro y cuenta la cantidad de números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor.
 * Para resolver la ejercitación debemos utilizar el for
 */

function noParesDeContarImparesHasta(num) {
  let counter = 0;
  for (let i = 0; i <= num; i++) {
    if (i % 2 !== 0) {
      counter++;
    }
  }
  /* for (let i = 1; i <= num; i += 2) {
    counter++;
  } */

  // return num % 2 === 0 ? num / 2 : Math.floor((num / 2))+ 1
  return counter;
}

console.log(noParesDeContarImparesHasta(10));

/**
 * Para este ejercicio te damos la función tablaDeMultiplicar ya definida, la cual recibe un número como parámetro.
 *  Queremos que al ejecutarse la función muestre por consola la tabla de multiplicar del 1 al 10 del número que reciba.
 */

function tablaDeMultiplicar(numero) {
  let i = 1;
  while (i <= 10) {
    console.log(`${numero} * ${i} = ${numero * i}`);
    i++;
  }

  /* for (let i = 1; i <= 10; i++) {
    console.log(numero * i);
  } */

  /*  do {
    console.log(numero * i);
    i++;
  } while (i <= 10); */
}

tablaDeMultiplicar(5);

/**
 *  ¿Tiene algún problema la función sumatoriaGananciasSemestre que escribimos anteriormente? ¿Funcionará con trimestres? ¿Y con cuatrimestres?
 * ¡Probala en la consola realizando distintas impresiones por pantalla!
 */
function sumatoriaGananciasSemestre(unSemestre) {
  return (
    unSemestre[0] +
    unSemestre[1] +
    unSemestre[2] +
    unSemestre[3] +
    unSemestre[4] +
    unSemestre[5]
  );
}

console.log(sumatoriaGananciasSemestre([1, 2, 3, 4, 5, 6]));
console.log(sumatoriaGananciasSemestre([1, 2, 3]));
console.log(sumatoriaGananciasSemestre([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6]));

/**
 * Sumatorias - Parte 2
 * Podés llamar a la función gananciaTotal directamente, la misma se encuentra escrita en un archivo que no podes acceder, hay que mantener el misterio...
 */

console.log(gananciaTotal([2, 3]));
console.log(gananciaTotal([2, 3, 1, 8, 8, -1]));
console.log(gananciaTotal([]));

/**
 * Sumatorias - Parte 3
 * ¿Empezas a ver un patrón? Tratá de escribir la función gananciaTotal4 que funcione para 4 elementos.
 */

function gananciaTotal4(unPeriodo) {
  let sumatoria = 0;
  sumatoria = sumatoria + unPeriodo[0];
  sumatoria = sumatoria + unPeriodo[1];
  sumatoria = sumatoria + unPeriodo[2];
  sumatoria = sumatoria + unPeriodo[3];
  return sumatoria;
}

/**
 * Sumatorias - Parte 4
 *  ¿Aún no te convenciste? Nuevamente, probá las siguientes expresiones en la consola para avanzar:

        gananciaTotal([])
        gananciaTotal([100])
        gananciaTotal([100, 2])
        gananciaTotal([2, 10, -20])
        gananciaTotal([2, 10, -20, 0, 0, 10, 10])
 */

function gananciaTotal(unPeriodo) {
  let sumatoria = 0;
  for (let i = 0; i < unPeriodo.length; i++) {
    let mes = unPeriodo[i];
    sumatoria = sumatoria + mes;
  }
  return sumatoria;
}

console.log(gananciaTotal([]));
console.log(gananciaTotal([100]));
console.log(gananciaTotal([100, 2]));
console.log(gananciaTotal([2, 10, -20]));
console.log(gananciaTotal([2, 10, -20, 0, 0, 10, 10]));

/**
 * Conteos
 * "Ah, pero esto no termina acá" - dijo Ana - "Quiero saber en cuántos meses hubo ganancia, es decir, que el saldo fue mayor a cero".
 * Completá la función cantidadDeMesesConGanancia.
 * En esta oportunidad deberás de utilizar el for y si prestás atención notarás que tiene una estructura similar al problema anterior.
 */

function cantidadDeMesesConGanancia(unPeriodo) {
  let cantidad = 0;
  for (let i = 0; i < unPeriodo.length; i++) {
    if (unPeriodo[i] > 0) {
      cantidad++;
    }
  }
  return cantidad;
}

/**
 * Filtrados
 * Ya sobre la hora , Ana nos dejó con un problema más interesante: quiere saber los saldos de los meses que hubo ganancia.
 * Completá la función saldosDeMesesConGanancia. Nuevamente tiene una estructura similar a los problemas anteriores, pero, ¡no tan rápido!:
 * esta función tiene que devolver un array.
 */

function saldosDeMesesConGanancia(unPeriodo) {
  let saldos = [];
  for (let i = 0; i < unPeriodo.length; i++) {
    if (unPeriodo[i] > 0) {
      saldos.push(unPeriodo[i]);
    }
  }
  return saldos;
}

/**
 * Más conteos
 * Ana, viendo que somos tan productivos, nos pidió algo más: ahora quiere saber en cuántos meses de un período hubo pérdida.
 * Decimos que hay pérdida en un período cuando el saldo es menor a cero.
 * Escribí la función cantidadDeMesesConPerdida. La estructura de la función es parecida a las que venimos haciendo, ¡animate!
 */

function cantidadDeMesesConPerdida(unPeriodo) {
  let cantidad = 0;
  for (let i = 0; i < unPeriodo.length; i++) {
    if (unPeriodo[i] < 0) {
      cantidad++;
    }
  }
  return cantidad;
}

