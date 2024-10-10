const carrito=[];
const producto={
    nombre:"lentejas 300g",
    precio:2
};
const producto1={
    nombre:"tomates 1kg",
    precio:3
};
const producto3={
    nombre:"lata de atún",
    precio:1
};

carrito.push(producto);
carrito.push(producto1);
console.table(carrito);
carrito.push(producto2);
console.table(carrito);
carrito.shift();
carrito.table(carrito);
carrito.shift();
carrito.shift();

carrito.unshift(producto);
console.table(carrito);
carrito.unshift(producto1);
carrito.unshift(producto2);

carrito.pop();