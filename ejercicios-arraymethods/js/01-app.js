const verduras = ['pepino', 'calabaza', 'ajo'];
const nuevaVerdura = 'tomate';
const verdurasActualizado = pushK(verduras,nuevaVerdura);

function pushK(verduras, nuevaVerdura){
    return[...verduras,nuevaVerdura];
}

console.log(verdurasActualizado);

