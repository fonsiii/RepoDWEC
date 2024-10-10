// Definir la matriz M5X4 que representa las provincias limítrofes con Castilla-La Mancha
const provinciasLimitrofesCLM = [
    ['Albacete', 'Toledo', 'Cuenca', 'Guadalajara'],   // Fila 1
    ['Ciudad Real', 'Ávila', 'Soria', 'Segovia'],      // Fila 2
    ['Jaén', 'Granada', 'Córdoba', 'Zaragoza'],        // Fila 3
    ['Teruel', 'Alicante', 'Valencia', 'Murcia'],      // Fila 4
    ['Cáceres', 'Badajoz', 'Madrid', 'CLM']            // Fila 5
];

// Recorremos cada fila y cada columna usando forEach
provinciasLimitrofesCLM.forEach((fila, i) => {
    fila.forEach((provincia, j) => {
        console.log(`La provincia ${provincia} está en la posición (${i+1},${j+1})`);
    });
});
