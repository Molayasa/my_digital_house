let deportista = {
  energia: 100,
  experiencia: 10,
  nombre: "Aimar",
  entrenarHoras: function (hours) {
    this.energia -= hours * 5;
    this.experiencia += hours * 2;
  },
};

module.exports = deportista;
