const paises = [];

function nuevoPais(pais,callback){
        paises.push(pais);
        console.log(`Agregando: ${pais}`);
        callback();
}

function mostrarPaises(){
    console.log(paises);
}

function iniciarCallbackHell(){
    setTimeout(
        ()=>{
            nuevoPais('Francia',mostrarPaises);
            setTimeout(
                ()=>{
                    nuevoPais('America',mostrarPaises)
                    setTimeout (
                        ()=>{
                            nuevoPais('Italia',mostrarPaises)
                        },2000
                    )
                },2000
            )
        },2000
    )
}