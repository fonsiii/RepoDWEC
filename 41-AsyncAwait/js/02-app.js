function descargarCliente(){
    return new Promise((resolve,reject)=>
    {
        const error=false;

        setTimeout(()=>{
            if(!error){
                resolve ('El listado del cliente se descargó')
            }
            else{
                reject('Error en la conexion')
            }
        },3000)
    })
}

async function ejecutar() {
    try{
        console.log(1+1);
        const respuesta=await descargarCliente();
        console.log(2+2);
    }catch{
        console.error(error);
    }
}

ejecutar();