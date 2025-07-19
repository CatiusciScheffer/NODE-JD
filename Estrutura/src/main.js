const p = require("./services/products");

(async function main() {
  console.log("Carrinho de Compras");

  p.getFullName("408", "mouse");
})();

