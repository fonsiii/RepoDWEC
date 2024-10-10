const meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio"];

meses.push("Julio");

console.table(meses);

const carrito=[];
const producto={
    nombre:"Tortilla de patata",
    precio:2
};

/*
carrito.push(producto); 
producto.nombre="Aceite 1L";
producto.precio=4;
carrito.push(producto);
console.table(carrito);
*/

const producto1={
    nombre:"Aceite 1L",
    precio:4
};

carrito.push(producto1);

carrito.unshift(producto1);