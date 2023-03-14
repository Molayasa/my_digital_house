/**
 * Prueba declarando a la función triple, la cual triplique el valor pasado por parámetro y nos devuelva su resultado.
 */
function triple(numero) {
  return numero * 3;
}

/**
 * Como veras, ye te damos la función cuadruple que recibe un número y lo multiplica por 4. Ahora te pedimos que debajo de la declaración te encargue de ejecutar esa función, para ello necesitas darle un valor de reemplazo al parámetro, en este caso te pedimos que el valor sea 5. Además queremos que imprimas por consola el resultado de esa ejecución.
 */
function cuadruple(numero) {
  return numero * 4;
}

console.log(cuadruple(5));

/**
 * Escribí la función multiplicar que tome dos parámetros, los multiplique y retorne su valor.
 */
function multiplicar(num1, num2) {
  return num1 * num2;
}

/**
 * Ahora te pedimos que declares una función llamada  tripleDeLaSuma() que reciba dos parámetros. Luego tiene que sumar ambos y devolvernos el triple del valor del resultado de sumar ambos parámetros . Para ello ya contás (aunque no la veas declarada) con la función triple, que recibe un parámetro y retorna el valor del mismo multiplicado por tres.
 */
function tripleDeLaSuma(num1, num2) {
  return triple(num1 + (num2 * 3) / 5);
}

/**
 * Hagamos una función llamada perimetro que nos diga el perímetro de un círculo cuando le damos el radio como parámetro. Luego hagamos otra función llamada  area que nos dé el área de un círculo cuando recibe el radio como parámetro.
 */
function perimetro(radio) {
  return 2 * 3.14 * radio; // Pi is also Math.PI
}

function area(radio) {
  return 3.14 * radio ** 2; // ** can be also Math.pow(radio, 2)
}

/**
 * Escribí una función longitudNombreCompleto que tome un nombre y un apellido como parametro y devuelva su longitud total, contando un espacio extra para separar a ambos.
 */
// Version 1 with mistakes
/* function longitudNombreCompleto(nombre, apellido) {
    return longitudNombreCompleto.length; // Mistake 1: calling my function inside my function. Mistake 2: calling .length of the function, which returns the total amount of parameters when the function is declared.
    
}
console.log(longitudNombreCompleto('Paulina', 'Olaya')); */

// Version 2 with mistakes fixed
function longitudNombreCompleto(nombre = "Paulina", apellido = "Olaya") {
  return (nombre + " " + apellido).length;
}
console.log(longitudNombreCompleto());
console.log(longitudNombreCompleto("Eduardo".length, "Hernandez"));
console.log("59", longitudNombreCompleto(undefined, "Hernandez"));

/**
 * Escribí la función escribirCartelito, que tome como parámetros un título, un nombre y un apellido y devuelva un único string como resultado
 */
function escribirCartelito(titulo, nombre, apellido) {
  return `${titulo} ${nombre} ${apellido}`;
}

console.log(escribirCartelito("Dr.", "Eduardo", "Hernandez"));

/**
 * Definí la función sePoneLaOlla, la cual recibe por parámetro el string del día de la semana. Esta función retorna "¡Pongamos la olla, hoy se comen pastas!" si recibe por parámetro el valor "Domingo", caso contrario retornará "Mejor lo dejamos para el domingo".
 */
function sePoneLaOlla(dia) {
  if (dia === "Domingo") {
    return "¡Pongamos la olla, hoy se comen pastas!";
  } else {
    return "Mejor lo dejamos para el domingo";
  }
}
// se pone la olla 2
function sePoneLaOlla2(dia) {
  return dia === "domingo"
    ? "¡Pongamos la olla, hoy se comen pastas!"
    : "Mejor lo dejamos para el domingo";
}

/**
 * El objetivo de este ejercicio es imprimir en consola un texto que irá variando según el día que contenga la variable dia. Para esto, ya presentamos un código hecho con if/else que tendremos que modificar y convertirlo a un switch, manteniendo el mismo resultado.
 */
let dia = "jueves";
function finDeSemana(dia) {
  if (dia == "viernes") {
    console.log("buen finde");
  } else if (dia == "lunes") {
    console.log("buena semana");
  } else {
    console.log("buen dia");
  }
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


/**
 *  El objetivo de este ejercicio es imprimir en pantalla un texto que estará condicionado de la siguiente manera. Utilizando switch deberemos evaluar si la variable "día" es lunes, miércoles o viernes; y, en ese caso, debe imprimir el texto "tenés clases". Para cualquier otro caso debe imprimir "no tenés clases".
 */
// Version 1, multiple cases
/* function tengoClases(dia) {
  if (typeof dia === "string") {
    switch (dia.toLowerCase()) {
      case "lunes":
      case "miércoles":
      case "viernes":
        console.log("tenés clases");
        break;
      default:
        console.log("no tenés clases");
    }
  }
}
tengoClases("Lunes"); */

// Version 2, one case using or '||' operator
/* function tengoClases(dia) {
  if (typeof dia === "string") {
    switch (dia.toLowerCase()) {
      case "lunes" || "miércoles" || "viernes":
        console.log("tenés clases");
        break;
      default:
        console.log("no tenés clases");
    }
  }
}
tengoClases("LUnes"); */

// Version 3, using dynamic acces to an object <3
function haveClass(day) {
  const [yesClass, noClass] = [
    "you have class, insect!",
    "you don't have class",
  ];
  const days = {
    monday: yesClass,
    wednesday: yesClass,
    friday: yesClass,
  };

  /* if (typeof day === "string") {
    const dayMessage = days[day.toLowerCase()];
    // return dayMessage ? dayMessage : noClass;
    return dayMessage ?? noClass;
  } */

  if (typeof day === "string") {
    return days[day.toLowerCase()] ? yesClass : noClass;
  }
}

console.log(haveClass("Monday"));

/**
 * Previous explanation about callbacks and anonymous functions
 */
function filterNumber(number) {
  return number >= 2;
}

const filterNumber2 = (number) => number >= 2;

[1, 2, 3].filter(function (number) {
  return number >= 2;
});

[1, 2, 3].filter(filterNumber);

[1, 2, 3].filter((number) => number >= 2);

[1, 2, 3].filter(filterNumber2);
