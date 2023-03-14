/**
 * El Tech Leader de nuestro equipo nos informa que debemos realizar un código que
 * permita calcular el monto a pagar por un alumno basándose en los cursos que desea tomar en Digital House.
 * Deberás seguir los siguientes pasos para lograr el objetivo:
 */

// Crear un array multidimensional que contenga los nombres de los cursos y su precio en pesos.

const coursesInfo = [
  ["html5", 4000],
  ["css3", 5000],
  ["javascript", 10000],
  ["react", 7000],
  ["nodejs", 15000],
];

// Crear un array que contenga los cursos que el alumno quiere tomar con DH. Deben estar escritos en MAYÚSCULAS.

const coursesToTake = ["JAVASCRIPT", "REACT", "NODEJS"];

// Crear una función (Callback) que reciba como parámetros el array multidimensional de los cursos y el otro array que indica los cursos que
// quiere hacer el alumno. La función tendrá la responsabilidad de calcular y devolver el monto total a pagar por el alumno en función de los cursos que
// quiere realizar.

function getCoursesBill(dhCourses, userCourses) {
  let bill = 0;
  for (let i = 0; i < dhCourses.length; i++) {
    if (userCourses.includes(dhCourses[i][0].toUpperCase())) {
      bill += dhCourses[i][1];
    }
  }
  return bill;
}

// Crear otra función que reciba como parámetros el nombre y el apellido del alumno, el array multidimensional de los cursos con sus respectivos
// precios y el array que contiene qué cursos quiere hacer el alumno. Esta función tendrá la responsabilidad de retornar el nombre y el apellido del
// alumno y el monto total a pagar en función de los cursos que quiere realizar.

function showCoursesBill(name, surname, dhCourses, userCourses, cb) {
  return `Estimado ${name} ${surname}, en función de los cursos seleccionados:\n 
${getCoursesList(userCourses)}
El monto total a pagar es de: $${cb(dhCourses, userCourses)}.

Bienvenido a la gran aventura Digital House.`;

  function getCoursesList(userCourses) {
    let coursesList = "";
    for (let i = 0; i < userCourses.length; i++) {
      coursesList += `${i + 1}.- ${userCourses[i]}\n\n`;
    }
    return coursesList;
  }
}

console.log(
  showCoursesBill("Linux", "Troll", coursesInfo, coursesToTake, getCoursesBill)
);
