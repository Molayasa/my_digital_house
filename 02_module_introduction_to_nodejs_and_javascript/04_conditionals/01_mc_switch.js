/**
 * Desarrolla un programa que le indique al usuario - en base a su perfil o responsabilidades - qué puede hacer o no en el sistema.
 * Para eso debes crear una variable llamada: “perfil” y asignarle alguno de estos valores: a. administrador b. asistente c. invitado.
 * Es importante tener en cuenta que se debe mostrar un único mensaje, utilizando el console.log():
 * A. Si se le asigna un espacio en blanco a la variable perfil, debe mostrar el mensaje: “Debe especificar el perfil del usuario”.
 * B. Si es un perfil “administrador - ADMINISTRADOR - Administrador”, la consola debe mostrar este mensaje: “Usted tiene todos los privilegios de uso del sistema”.
 * C. Si es un perfil “asistente - ASISTENTE - Asistente”,la conso la debe mostrar este mensaje: “Usted sólo tiene permisos de registrar, modificar y consultar datos”.
 * D. Si es un perfil “invitado - INVITADO - Invitado”, la consola debe mostrar este mensaje: “Usted sólo tiene permisos de consultar datos”.
 * E. Si se especifica un valor diferente a la variable perfil entonces se debe mostrar este mensaje: “Debe especificar un perfil válido”.
 */

// Version 1
/* 
const profile = null;

switch (profile) {
  case '':
    console.log('Debe especificar el perfil del usuario');
    break;
  case 'administrador'.toUpperCase():
  case 'Administrador':
  case 'administrador':
    console.log('Usted tiene todos los privilegios de uso del sistema');
    break;
  case 'asistente':
  case 'ASISTENTE':
  case 'Asistente':
    console.log(
      'Usted sólo tiene permisos de registrar, modificar y consultar datos'
    );
    break;
  case 'invitado':
  case 'INVITADO':
  case 'Invitado':
    console.log('Usted sólo tiene permisos de consultar datos');
    break;
  default:
    console.log('Debe especificar un perfil válido');
} */

// Version 2
const profile = null;

if (typeof profile === "string") {
  switch (profile.toLowerCase()) {
    case !profile:
      console.log("Debe especificar el perfil del usuario");
      break;
    case "administrador":
      console.log("Usted tiene todos los privilegios de uso del sistema");
      break;
    case "asistente":
      console.log(
        "Usted sólo tiene permisos de registrar, modificar y consultar datos"
      );
      break;
    case "invitado":
      console.log("Usted sólo tiene permisos de consultar datos");
      break;
    default:
      console.log("Debe especificar un perfil válido");
  }
}
