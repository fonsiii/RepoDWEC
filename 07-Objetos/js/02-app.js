const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true
};

console.log(producto);
producto.imagen="imagen.jpg";
console.log(producto);

delete producto.disponible;