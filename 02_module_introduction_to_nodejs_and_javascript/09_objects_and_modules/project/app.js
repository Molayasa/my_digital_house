const fs = require("fs");
const movies = require("./movies");
const messagePath = "./message.txt";

function showMovies(movies) {
  for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
  }
}

showMovies(movies);

function showMessage(path = messagePath) {
  console.log(fs.readFileSync(path, "utf-8"));
}

showMessage()