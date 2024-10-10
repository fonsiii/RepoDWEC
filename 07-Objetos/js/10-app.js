const producto={
    nombre:"Monitor 20 pulgadas",
    precio:300,
    disponible:true,
    unidades:4,
    mostrarInfo:function(){
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`);
    }
};

const producto2={
    nombre:"Tablet 20 pulgadas",
    precio:300,
    disponible:true,
    unidades:10,
    mostrarInfo:function(){
        console.log(`El producto ${this.nombre} tiene un precio de: ${this.precio}`);
    }
};

producto.mostrarInfo();
producto2.mostrarInfo();