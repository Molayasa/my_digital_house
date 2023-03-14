const autosImportados = require("./autos");

let concesionaria = {
  autos: autosImportados,

  buscarAuto: function (patente) {
    for (let i = 0; i < this.autos.length; i++) {
      if (this.autos[i].patente === patente) {
        return this.autos[i];
      }
    }
    return null;
  },
  venderAuto: function (patente) {
    const auto = this.buscarAuto(patente);
    if (auto) {
      auto.vendido = true;
    }
  },
  autosParaLaVenta: function () {
    return this.autos.filter((auto) => !auto.vendido);
  },
  autosNuevos: function () {
    return this.autosParaLaVenta().filter((auto) => auto.km < 100);
  },
  listaDeVentas: function () {
    return this.autos.filter((auto) => auto.vendido).map((auto) => auto.precio);
  },
  totalDeVentas: function () {
    return this.listaDeVentas().reduce((acc, price) => acc + price, 0);
  },
  puedeComprar: function (auto, persona) {
    const costoTotal = auto.precio <= persona.capacidadDePagoTotal;
    const precioPorCuotas = auto.precio / auto.cuotas;
    const pagoCuotas = precioPorCuotas < persona.capacidadDePagoEnCuotas;
    return costoTotal && pagoCuotas;
  },
  autosQuePuedeComprar: function (persona) {
    return this.autosParaLaVenta().filter((auto) =>
      this.puedeComprar(auto, persona)
    );
  },
};

console.log(concesionaria.listaDeVentas());
console.log(concesionaria.totalDeVentas());

// My version
const cars = require("./getCars")();

const dealership = {
  cars,
  findCardByPatent: function (patent) {
    const [car] = this.cars.filter((car) => car.patent === patent);
    if (!car) {
      return null;
    }
    return car;

    // return car ?? null
  },
};
