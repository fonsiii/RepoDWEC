const carrito=[
    {nombre:"Monitor 27 pulgadas", precio:500},
    {nombre:"Monitor 27 pulgadas", precio:500},
    {nombre:"Monitor 27 pulgadas", precio:500},
    {nombre:"Monitor 27 pulgadas", precio:500},
    {nombre:"Monitor 27 pulgadas", precio:500},
    {nombre:"Monitor 27 pulgadas", precio:500}
];

for(let i=0; i<carrito.length; i++) {
    console.log(carrito[i,nombre]);
    console.log(`${carrito[i].nombre}- Precio ${carrito[i].precio}`)
};

carrito.forEach(function(producto){
    console.log(`${producto.nombre}--Precio:${producto.precio}`)
});