/**
 * Desarrollar el programa mi primera calculadora. Queremos que, usando estructura switch,
 * muestres al usuario cuál es el resultado de una operación aritmética.
 * Esto se hará en base a dos valores suministrados y al tipo de operación indicada: “sumar”, “restar”, “multiplicar”, “dividir”.
 * Por ejemplo: si el usuario indica que quiere sumar los valores 2 y 2, entonces la respuesta al usuario debe ser: “El resultado de sumar 2 + 2 es 4”.
 * En caso de que la operación aritmética sea distinta a la esperada, deberás mostrarle un mensaje al usuario que le informe que:
 * “Las operaciones aceptadas son: sumar - restar - multiplicar - dividir”.
 */

// Solution 1, using switch
/* const num1 = 2;
const num2 = 2;
const operation = 'sumar';

switch (operation) {
  case 'sumar':
    console.log(`El resultado de sumar ${num1} + ${num2} es ${num1 + num2}`);
    break;
  case 'restar':
    console.log(`El resultado de restar ${num1} - ${num2} es ${num1 - num2}`);
    break;
  case 'multiplicar':
    console.log(
      `El resultado de multiplicar ${num1} * ${num2} es ${num1 * num2}`
    );
    break;
  case 'dividir':
    console.log(`El resultado de dividir ${num1} / ${num2} es ${num1 / num2}`);
    break;
  default:
    console.log(
      'Las operaciones aceptadas son: sumar - restar - multiplicar - dividir'
    );
} */

// Solution 2, using dynamic access to an object <3
/* const num1 = 5;
const num2 = 2;
const operation = 'dividir';

const calculator = {
  sumar: `El resultado de sumar ${num1} + ${num2} es ${num1 + num2}`,
  restar: `El resultado de restar ${num1} - ${num2} es ${num1 - num2}`,
  multiplicar: `El resultado de multiplicar ${num1} * ${num2} es ${
    num1 * num2
  }`,
  dividir: `El resultado de dividir ${num1} / ${num2} es ${num1 / num2}`,
};

if (typeof operation === 'string') {
  const result = calculator[operation.toLowerCase()];
  console.log(
    result ??
      'Las operaciones aceptadas son: sumar - restar - multiplicar - dividir'
  );
}
 */
// Solution 3, using a function to reuse the result message <3 <3
const num1 = 2;
const num2 = 2;
const operation = "multiplicar";

const calculator = {
  sumar: () => showResult(operation, num1, num2, num1 + num2),
  restar: showResult(operation, num1, num2, num1 - num2),
  multiplicar: showResult(operation, num1, num2, num1 * num2),
  dividir: showResult(operation, num1, num2, num1 / num2),
};

if (typeof operation === "string") {
  const result = calculator[operation.toLowerCase()]();
  console.log(
    result ??
      "Las operaciones aceptadas son: sumar - restar - multiplicar - dividir"
  );
}

function showResult(operation, num1, num2, result) {
  const operator = {
    sumar: "+",
    restar: "-",
    multiplicar: "*",
    dividir: "/",
  };
  return `El resultado de ${operation} ${num1} ${operator[operation]} ${num2} es ${result}`;
}
