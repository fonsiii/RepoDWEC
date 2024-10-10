// Definir la matriz M5X4 que representa las provincias limítrofes con Castilla-La Mancha
const provinciasLimitrofesCLM = [
    ['Albacete', 'Toledo', 'Cuenca', 'Guadalajara'],   // Fila 1
    ['Ciudad Real', 'Ávila', 'Soria', 'Segovia'],      // Fila 2
    ['Jaén', 'Granada', 'Córdoba', 'Zaragoza'],        // Fila 3
    ['Teruel', 'Alicante', 'Valencia', 'Murcia'],      // Fila 4
    ['Cáceres', 'Badajoz', 'Madrid', 'CLM']            // Fila 5
];

// Acceder y mostrar solo los elementos donde i = j
for (let i = 0; i < provinciasLimitrofesCLM.length && i < provinciasLimitrofesCLM[i].length; i++) {
    console.log(`El elemento en la posición (${i+1},${i+1}) es ${provinciasLimitrofesCLM[i][i]}`);
}
