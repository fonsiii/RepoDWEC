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

let resultado;
resultado=[...carrito,producto];
resultado=[...resultado,producto1];
resultado=[producto2,...resultado];
console.log(resultado);