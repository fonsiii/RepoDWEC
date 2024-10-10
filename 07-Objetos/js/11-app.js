const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
    unidades:4,
};

//Object constructor
function Producto(nombre,precio,unidades){
    this.nombre=nombre;
    this.precio=precio;
    this.unidades=unidades;
    this.disponible=true;
};

const producto2=new Producto("Tablet",2000,50);
console.log(producto2);

const producto3=new Producto("Portatil 15 pulgadas,",1000,30);
console.log(producto3);