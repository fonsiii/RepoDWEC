const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
    unidades:4
};

console.log(producto.nombre);

const {nombre} = producto;
console.log(nombre);
const {precio} = producto;
const {imagen} = producto;
const {disponibe,unidades} = producto;