/**
 * El Tech Leader, nos ¡Felicita! por los avances realizados en el desafío anterior.
 * Dado que hemos mostrado bastante expertise, sube su exigencia y nos pide que ayudemos a uno de los equipos de desarrollo.
 * Necesitan un código que permita determinar elpromedio de alumnos egresados por curso.
 */

// A. Crear cuatro variables

const HTML5 = "30 45 25 34 18 23 16 50 72 70";
const CSS3 = "50 45 71 34 23 45 65 75 63 43 74 70";
const JAVASCRIPT = "70 65 58 45 23 57 34 17 72";
const NODEJS = "45 56 73 34 65 72 70 32";

// B. A cada una de las variables que contienen las cadenas de texto, habrá que convertirlas a arrays, separando cada elemento por una coma.

const html5 = HTML5.split(" ");
const css3 = CSS3.split(" ");
const javascript = JAVASCRIPT.split(" ");
const nodejs = NODEJS.split(" ");

// C. Crear una función que reciba como parámetros los cuatro arrays de los alumnos graduados y un número comprendido entre el 1 y el 4,

function getAverage(html5, css3, javascript, nodejs, num) {
  let sum = 0;
  switch (num) {
    case 1:
      for (let i = 0; i < html5.length; i++) {
        sum += Number(html5[i]);
      }
      sum /= html5.length;
      break;

    case 2:
      for (let i = 0; i < css3.length; i++) {
        sum += Number(css3[i]);
      }
      sum /= css3.length;
      break;

    case 3:
      for (let i = 0; i < javascript.length; i++) {
        sum += Number(javascript[i]);
      }
      sum /= javascript.length;
      break;

    case 4:
      for (let i = 0; i < nodejs.length; i++) {
        sum += Number(nodejs[i]);
      }
      sum /= nodejs.length;
      break;

    default:
      return "Please enter a number within 1 and 4";
  }
  return sum;
}

console.log(getAverage(html5, css3, javascript, nodejs, 3));

// Version 2

function getAverage2(courses, num) {
  let sum = 0;
  const course = courses[num - 1];

  for (let i = 0; i < course.length; i++) {
    sum += Number(course[i]);
  }
  sum /= course.length;
  
  return sum;
}

console.log(getAverage2([html5, css3, javascript, nodejs], 3));
