const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
    unidades:4
};

const medidas={
    peso:"1kg",
    medida:"1m"
};

const resultado=Object.assign(producto,medidas);
console.log(resultado);

const resultado2={...producto,...medidas};
console.log(resultado2);