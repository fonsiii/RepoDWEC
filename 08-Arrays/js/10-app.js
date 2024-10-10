const carrito=[
    {nombre:"Monitor 27 pulgadas", precio:500},
    {nombre:"Monitor 27 pulgadas", precio:500},
    {nombre:"Monitor 27 pulgadas", precio:500},
    {nombre:"Monitor 27 pulgadas", precio:500},
    {nombre:"Monitor 27 pulgadas", precio:500},
    {nombre:"Monitor 27 pulgadas", precio:500}
];

for(let i=0; i<carrito.length; i++) {
    returncarrito[i,nombre];
    return`${carrito[i].nombre}- Precio ${carrito[i].precio}`;
};

carrito.forEach(function(producto){
    return`${producto.nombre}--Precio:${producto.precio}`;
})

console.log(nuevoArray1);

const nuevoArray2=carrito.map(function(producto){
    return`${producto.nombre}--Precio:${producto.precio}`;
});

console.log(nuevoArray2);