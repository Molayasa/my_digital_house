/**
 * Desarrollar el programa traductor condicional.
 * La idea es que si el usuario ingresa una palabra como “perro”, “gato”, “puerta”, “ventana”, o “mesa”,
 * se le devuelva la misma palabra traducida al idioma inglés.
 * Te recomendamos usar la estructura switch. Puedes ayudarte con Google Traductor.
 * En caso de que la palabra sea distinta a la esperada, deberás mostrar al usuario un mensaje que le informe que “La palabra ingresada es incorrecta”.
 */

// First solution using switch
/* const userWord = 'VenTana';
if (typeof userWord === 'string') {
  switch (userWord.toLowerCase()) {
    case 'gato':
      console.log('cat');
      break;
    case 'perro':
      console.log('dog');
      break;
    case 'puerta':
      console.log('door');
      break;
    case 'ventana':
      console.log('window');
      break;
    case 'mesa':
      console.log('table');
      break;
    default:
      console.log('La palabra ingresada es incorrecta');
  }
} */

// Second solution using dynamic access to an object <3
const userWord = 'VenTana';
const translator = {
  gato: 'cat',
  perro: 'dog',
  puerta: 'door',
  ventana: 'window',
  mesa: 'table',
};

// Using if/else
/* if (typeof userWord === 'string') {
  if (!translator[userWord.toLowerCase()]) {
    console.log('La palabra ingresada es incorrecta');
  } else {
    console.log(translator[userWord.toLowerCase()]);
  }
} */

// Using ternary operator, solution 1, it has a bug: doesn't return anything if the word doesn't exist.
/* typeof userWord === 'string' ? console.log(translator[userWord.toLowerCase()]) : console.log('La palabra ingresada es incorrecta'); */

// Using ternary operator, solution 2, bug fixed.
/* if (typeof userWord === 'string') {
  const word = translator[userWord.toLowerCase()];
  word ? console.log(word) : console.log('La palabra ingresada es incorrecta');
} */

// Using nullish coalescing operator '??'
if (typeof userWord === 'string') {
  const word = translator[userWord.toLowerCase()];
  console.log(word ?? 'La palabra ingresada es incorrecta');
}
