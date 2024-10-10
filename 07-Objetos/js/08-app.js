const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
    unidades:4
};

Object.seal(producto);
producto.disponible=false;
delete producto.precio;
console.log(Object.isSealed(producto));
console.log(producto);