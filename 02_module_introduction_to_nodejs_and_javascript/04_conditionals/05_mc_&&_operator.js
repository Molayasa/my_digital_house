/**
 * Desarrolla el programa aterrizar avión. Nos indicará si el avión está listo para iniciar el aterrizaje o no.
 * Considerará para ello la altura y la velocidad del vuelo, teniendo en cuenta que:
 * La velocidad debe estar comprendida entre 268 a 278 km/hr.
 * La altura debe estar comprendida entre 150 m a 300 m.
 */

const velocity = 270;
const high = 100;

function isReadyToLand(isReady) {
  return `The plane ${isReady ? 'is' : 'is not'} ready to land`;
}

const ready = velocity >= 268 && velocity <= 278 && high >= 150 && high <= 300;

ready ? console.log(isReadyToLand(ready)) : console.log(isReadyToLand(ready));
