const producto = {
    nombre:"Monitor 20 pulgadas",
    precio:100,
    unidades:4,
    informacion:{
        garantia:"1 año",
        seguro:60,
        medidas:{
            peso:"6kg",
            alto:"30cm"
        },
        fabricacion:{
            pais:"China",
            year:"2022"
        }
    }
};

//const {nombre,informacion:{fabricacion}}=producto;
//console.log(nombre);
//console.log(fabricacion);
//const {nombre,informacion,informacion:{fabricacion}}=producto;
//console.log(nombre);
//console.log(informacion);
//console.log(fabricacion);

//const {nombre,informacion,informacion:{fabricacion:{pais}}}=producto;

const {nombre,informacion,informacion:{fabricacion,fabricacion:{pais}}}=producto;