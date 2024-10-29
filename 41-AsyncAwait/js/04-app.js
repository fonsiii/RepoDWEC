function descargarNuevoCliente(){
    return new Promise((resolve)=>
    {
        const error=false;

        setTimeout(()=>{
            if(!error){
                resolve ('El listado del cliente se descargó')
            }
        },5000)
    })
}

function descargarNuevosPedidos(){
    return new Promise((resolve)=>
    {
        setTimeout(()=>{
                resolve ('El listado del cliente se descargó')
            
        },3000)
    })
}

/*const app = async()=>{

    
    try{
        const clientes=await descargarNuevoCliente();
        console.log(clientes);
        const pedidos=await descargarNuevosPedidos();
        console.log(pedidos);

    }catch{

        console.log(error);
    }
}
    */

const app = async () =>{
    try{
        const respuesta=await Promise.all([descargarNuevoCliente,descargarNuevosPedidos]);
        console.log(respuesta[0]);
        console.log(respuesta[1]);
    }catch{
        console.log(error);
    }
}

app();