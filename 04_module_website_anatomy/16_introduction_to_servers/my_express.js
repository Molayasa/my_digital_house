const express = require("express");
const path = require("path");
const PORT = 3000;
const app = express();

const product = {
  productType: null,
  price: null,
  quantity: null,
};

app.get("/", (req, res) => {
  //res.send("<h1> Hola papito lindo </h1>");
  res.sendFile(
    path.join(
      __dirname,
        "/../../02_module_introduction_to_nodejs_and_javascript/12_module_ending/js-notes_by_majo_ledesma.pdf"
    )
  );
});

app.get("/art", (req, res) => {
  
  res.send("This is the Art section");
});

app.post("/art", (req, res) => {
  res.send("This is the Art section post");
});

app.get("/product/add", (req, res) => {
  res.send(product);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
