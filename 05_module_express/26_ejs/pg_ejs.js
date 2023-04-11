/**
 * Renderizando el login
 * Para este ejercicio deberemos completar el controlador del usuario haciendo que, al invocar el
 * loginUser, el mismo renderice con EJS la vista login.
 */

let userController = {
  loginUser: function (req,res){
      res.render('login');
  }
}

/**
 * Para este ejercicio debemos, analizando el HTML, completar el código que falta en el controlador
 * para que el mismo pueda enviar al template engine las variables que necesita para poder renderiza 
 * la vista checkout.
 */

let productos = ['Helado 1/4 kg', 'Franui Chocolate Negro', 'Surtido Chocolate 1/2kg'];
let carritoController = {
    checkout: function (req, res) {
        res.render("checkout", { items: productos });
    }
}