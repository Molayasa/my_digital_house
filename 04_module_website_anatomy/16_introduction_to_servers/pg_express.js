/**
 * Primero, deberemos crear la variable express y almacenar en ella el módulo Express.
 * Luego, deberemos crear la variable app y almacenar en ella la ejecución de Express.
 */

const express = require("express");

const app = express();

/**
 * Nuestro trabajo será instanciar un servidor en el puerto 8000. A su vez, queremos que se muestre por consola la frase
 * "Levantando un servidor con Express" una vez que el servidor esté corriendo, para verificar que el mismo
 *  se levantó correctamente.
 */

const express = require("express");
const app1 = express();

app1.listen(8000, () => {
  console.log("Levantando un servidor con Express");
});

/**
 * Nuestro trabajo será, utilizando el método get, crear una ruta hacia "/home" que devuelva la frase
 * "Hola, estamos en el home".
 */

const express = require("express");
const app2 = express();

app2.get("/home", (req, res) => {
  res.send("Hola, estamos en el home");
});

/**
 * Queremos crear una ruta que use el método get y que apunte a "/perfil". Esta deberá devolver la variable saludo
 * que está ya declarada.
 */

const express = require("express");
const app3 = express();

let saludo = "Bienvenido/a, ahora estamos en tu perfil";

app3.get("/perfil", (req, res) => {
  res.send(saludo);
});

/**
 * Para empezar, debemos crear la variable producto. Esta tendrá que almacenar un objeto con las siguientes propiedades:
 * tipoProducto, precio y cantidad, en donde, cada una de ellas deberá tener como valor null, ya que, de momento, no tenemos
 * ningún dato.
 * Por último, debemos crear una ruta que use el método get y que apunte a "/producto/agregar".
 * Esta deberá devolver la variable producto que creaste.
 */

const express = require("express");
const app4 = express();

const producto = {
  tipoProducto: null,
  precio: null,
  cantidad: null,
};

app4.get("/producto/agregar", (req, res) => {
  res.send(producto);
});

/**
 * Para poder resolver esto debemos completar las partes faltantes del código. Queremos que al usuario, al ingresar al
 * about-us, se le envie la siguiente vista: about-us.html. Esta misma se encuentra en la carpeta views.
 */

const path = require("path");

app5.get("/about-us", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/about-us.html"));
});

/**
 * ¿Qué deberás hacer?. Tendrás que levantar un servidor en el puerto 3000 y responder a dos rutas get. La ruta root (/),
 * debe responder enviando la vista en el directorio /views/home.html; y la ruta 404 (/404), debe enviar "Error página no
 * encontrada". Para esto deberás hacer uso de la librería path y de la función sendfile entre otras cosas ya vistas.
 *  Pasos guía / ayuda para la resolución:
 * 1) Importar tanto el framework Express y path.
 * 2) Crear una instancia de Express.
 * 3) Poner al servidor a escuchar al puerto 3000.
 * 4) Agregar la ruta 404 y enviar el mensaje correspondiente.
 * 5) Agregar la ruta root (/) del home y enviar el archivo correspondiente.
 */

const express = require("express");
const path = require("path");
const app6 = express();
const PORT = 3000;

app6.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app6.get("/404", (req, res) => {
  res.send("Error página no encontrada");
});

app6.listen(PORT, (req, res) => {
  console.log("Escuchando en puerto: " + PORT);
});
