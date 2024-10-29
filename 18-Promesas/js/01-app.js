const paises=['España','Portugal','Italia','Alemania'];

function nuevoPais(pais,callback){
    setTimeout(()=>{
        paises.push(pais);
        callback();
    },3000)
}

function mostrarPaises(){
    setTimeout(
        ()=>{
            paises.forEach(pais=>{
                console.log(pais);
            })
        },4000)
        console.log("Esperando........");
}

//mostrarPaises();

nuevoPais('Francia',mostrarPaises);