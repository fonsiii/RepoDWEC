const aplicarDescuento = new Promise((resolve,reject)=>{
    const descuento = true;

    if(descuento){
        resolve('Descuento aplicado');
    } else{
        reject('No se pudo aplicar descuento');
    }
});

console.log(aplicarDescuento);

aplicarDescuento
    .then(resultado=>{
        descuento(resultado);
    })
    .catch(error=>{
        console.log(error);
    })

    function descuento(resultado){
        console.log(resultado);
    }