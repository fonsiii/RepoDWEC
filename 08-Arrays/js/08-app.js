const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true
};

//DESTRUCTURING

const {nombre}=producto;
console.log(nombre);

const numeros=[10,20,30,40,50];

const [primero]=numeros;
console.log(primero);

const [primer,segun,tercer]=numeros;

const [, , , cuarto]=numeros;

const [,segundo, ,cuar]=numeros;

const [pri,seg,...ter]=numeros;