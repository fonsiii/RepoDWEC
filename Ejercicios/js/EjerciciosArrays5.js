// Definir la matriz M5X4 que representa las provincias limítrofes con Castilla-La Mancha
const provinciasLimitrofesCLM = [
    ['Albacete', 'Toledo', 'Cuenca', 'Guadalajara'],   // Fila 1
    ['Ciudad Real', 'Ávila', 'Soria', 'Segovia'],      // Fila 2
    ['Jaén', 'Granada', 'Córdoba', 'Zaragoza'],        // Fila 3
    ['Teruel', 'Alicante', 'Valencia', 'Murcia'],      // Fila 4
    ['Cáceres', 'Badajoz', 'Madrid', 'CLM']            // Fila 5
];

// Recorremos la matriz con dos bucles for
for (let i = 0; i < provinciasLimitrofesCLM.length; i++) {      // Itera sobre las filas
    for (let j = 0; j < provinciasLimitrofesCLM[i].length; j++) { // Itera sobre las columnas
        console.log(`La provincia ${provinciasLimitrofesCLM[i][j]} está en la posición (${i+1},${j+1})`);
    }
}
