/**
 * El líder técnico del área nos indica que para cumplir con este requerimiento debemos modificar la función de agregarItem 
 * para que reciba los parámetros req y res. Dicho esto, el líder técnico se aleja silenciosamente confiando
 * plenamente en nuestras habilidades.
 * 
 */

let carritoController = {
   
  sacarItem: function(){},
  consultarItem: function(){},
  agregarItem: function(req, res){
     res.send("Item Agregado")
  }
  
};

module.exports = carritoController

/**
 * Resulta que si bien se trabajó en el carritoController, este no fue redireccionado por una ruta. 
 * Por lo cual, desde el navegador, no se puede acceder a la lógica de negocio del carrito.
 * Al analizar el carritoController, el Project Manager nos comenta que la ruta del carrito tiene 
 * un parámetro dinámico que debemos llamar item, el cual representa el item a agregar 
 * (antes de ser Project Manager era programador también).
 * Debemos analizar el siguiente código y agregar tanto la funcionalidad agregarItem del carritoController 
 * como crear la ruta dinámica item. 
 * 
 */

let express = require('express')
let router = express.Router();
let carritoController = require('../controllers/carritoController')

router.get('/:item', carritoController.agregarItem)

module.exports = router

/**
 * Tenemos una lista de muchas series almacenadas en la variable series. Nuestro trabajo será crear una ruta que apunte a
 *  "/series" y las devuelva a TODAS.
 */

const express = require('express');
const app = express();


app.get("/series", (req, res) => {
    res.send(series)
})

/**
 * Queremos crear una ruta que apunte a "/serie" y que la misma, a su vez, reciba un número. 
 * Ese número representará el id de la serie que estamos queriendo ver. 
 * Por lo tanto, la ruta deberá devolver únicamente la serie que coincida con el id que llegó por parámetro.
 */

const express = require('express');
const app1 = express();

app1.get("/serie/:id", (req, res) => {
    const { id } = req.params
    const serie = series.find((serie) => serie.id == id)
    res.send(serie)
})

/**
 * Queremos que el archivo series.js administre TODOS los request del recurso. 
 * Debemos, como primer paso, crear la variable express y almacenar en ella el módulo express.
 * Luego, deberemos crear la variable router y almacenar en ella la ejecución del método que nos permite manejar
 * un sistema de rutas.
 */

const express = require("express");
const router1 = express.Router();

/**
 * Nuestro trabajo será hacer visible ese código para que podamos acceder al mismo desde otros archivos.
 * ¿Cómo podemos hacerlo? ¿Quién es el encargado de modularizar todas estas rutas definidas?
 */

const express = require('express');
const router2 = express.Router();

router.get('/', (req,res) => {
});
router.get('/:genero', (req,res) => {
});
router.get('/crear', (req,res) => {
});


module.exports = router;

/**
 * Desde el archivo index.js queremos acceder a las rutas que expone el archivo series.js. Nuestro trabajo será requerir ese
 * módulo y almacenarlo en la variable rutasSeries. Por último, queremos que sea ese módulo el encargado de manejar todas las
 * solicitudes que lleguen del recurso series (endpoint series).
 *  Antes de empezar, tener en cuenta que estamos manejando un sistema de rutas y la organización de directorios es MUY
 * importante, por lo tanto, el archivo series.js se encuentra almacenado en la carpeta routes.
 */

const express = require('express');
const app2 = express();
const rutasSeries = require("./routes/series")


app2.use("/series", rutasSeries);

