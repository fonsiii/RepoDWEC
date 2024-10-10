// Definir la matriz M5X4 que representa las provincias limítrofes con Castilla-La Mancha
const provinciasLimitrofesCLM = [
    ['Albacete', 'Toledo', 'Cuenca', 'Guadalajara'],   // Fila 1
    ['Ciudad Real', 'Ávila', 'Soria', 'Segovia'],      // Fila 2
    ['Jaén', 'Granada', 'Córdoba', 'Zaragoza'],        // Fila 3
    ['Teruel', 'Alicante', 'Valencia', 'Murcia'],      // Fila 4
    ['Cáceres', 'Badajoz', 'Madrid', 'CLM']            // Fila 5
];

// Acceder a los elementos (3,2) y (2,3)
const ciudad_3_2 = provinciasLimitrofesCLM[2][1];  // Recuerda que los índices empiezan en 0
const ciudad_2_3 = provinciasLimitrofesCLM[1][2];

// Visualizar el mensaje usando template literals
console.log(`La ciudad (3,2) es ${ciudad_3_2}`);
console.log(`La ciudad (2,3) es ${ciudad_2_3}`);
