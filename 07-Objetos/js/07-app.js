"use strict";

const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
    unidades:4
};

Object.freeze(producto);    

console.log(Object.isFrozen(producto));
producto.imagen="jpg";
delete producto.precio;
producto.precio=100;
