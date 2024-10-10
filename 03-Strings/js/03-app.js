const producto="Monitor 20 pulgadas";
const precio="70 euros";

var mivar=producto.concat(precio);
console.log(mivar);
mivar=producto.concat("20% de descuento");
console.log(mivar);

//Versión antigua de concatenar
console.log(producto+" con un precio de "+precio);
console.log(producto+" con un precio de "+precio);

//Versión ecmascript
console.log("El producto $(producto) tiene un precio $(precio)");