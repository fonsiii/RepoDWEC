// Definir la matriz M5X4 que representa las provincias limítrofes con Castilla-La Mancha
const provinciasLimitrofesCLM = [
    ['Albacete', 'Toledo', 'Cuenca', 'Guadalajara'],   // Fila 1
    ['Ciudad Real', 'Ávila', 'Soria', 'Segovia'],      // Fila 2
    ['Jaén', 'Granada', 'Córdoba', 'Zaragoza'],        // Fila 3
    ['Teruel', 'Alicante', 'Valencia', 'Murcia'],      // Fila 4
    ['Cáceres', 'Badajoz', 'Madrid', 'CLM']            // Fila 5
];

// Usando destructuring para asignar la segunda fila a la variable fila2
const [, fila2] = provinciasLimitrofesCLM;  // Se salta la primera fila y asigna la segunda fila

// Mostrar la fila2
console.log('Fila 2:', fila2);
