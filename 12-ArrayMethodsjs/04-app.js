const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Auriculares', precio: 100 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Movil', precio: 700 },
];

let resultado;

resultado=carrito.filter(producto=>producto.precio > 400);
console.log(resultado);
resultado=carrito.filter(producto=>producto.precio<600);
console.log(resultado);

//Traeme todos excepto el audifonos
resultado=carrito.filter(producto=>producto.nombre !=='Auriculares');
console.log(resultado);
resultado=carrito.filter(producto=>producto.nombre ==='Auriculares');
console.log(resultado);


