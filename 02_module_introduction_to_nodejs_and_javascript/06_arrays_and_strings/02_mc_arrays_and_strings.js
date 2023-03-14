/**
 * Crear una estructura para almacenar un conjunto de películas, tales como:
 * "Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick',
"Elvis’,"Thor: amor y trueno’.
 */

let movies = [
  "Turno de día",
  "30 noches con mi ex",
  "Bestia",
  "El monte",
  "Top gun maverick",
  "Elvis",
  "Thor: amor y trueno",
];

/**
 * Más tarde desde la producción indicaron que la película más vendida era: ‘Thor: amor y trueno’. Por lo tanto, en la estructura creada querían ver primero dicha
 * película y con letras en mayúsculas. Para ello el tech leader, te solicita que crees una función,
 *  la cual recibirá por parámetro la película indicada y deberá retornar la misma pero en mayúscula.
 */

function toUpperMovie(movie) {
  return movie.toUpperCase();
}

console.log(toUpperMovie(movies[movies.length - 1]));

/**
 * Una vez terminada la actividad, nos indican que debemos crear una cadena de texto
 * para las siguientes películas próximas a estrenar:
 * ○ Counter-Strike
 * ○ NOP
 * ○ Vértigo
 * ○ Nick
 * ○ Avatar.
 */

let moviesToRelease = "Counter-Strike, NOP, Vértigo, Nick, Avatar";
moviesToRelease = moviesToRelease.split(", ");

/**
 * Una vez creada la estructura, una de las programadoras del equipo indica que la
 * primera película incorporada a la estructura no es una película sino un video juego.
 * Por tal motivo, te encomiendan la tarea de excluir dicho elemento de la estructura.
 */
console.log(moviesToRelease.shift());

/**
 * Finalmente, el Tech Leader te solicita crear una función que reciba por parámetro
 * ambas estructuras creadas y debe devolver un nueva estructura con todas las
 * películas, para ello te recomendamos que investigues lo que hace el método.concat().
 */

function allMovies(movieStructure1, movieStructure2) {
  return movieStructure1.concat(movieStructure2);
}

console.log(allMovies(movies, moviesToRelease));
