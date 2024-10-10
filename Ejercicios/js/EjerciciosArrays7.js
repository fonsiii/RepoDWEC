// Definir la matriz M5X4 que representa las provincias limítrofes con Castilla-La Mancha
const provinciasLimitrofesCLM = [
    ['Albacete', 'Toledo', 'Cuenca', 'Guadalajara'],   // Fila 1
    ['Ciudad Real', 'Ávila', 'Soria', 'Segovia'],      // Fila 2
    ['Jaén', 'Granada', 'Córdoba', 'Zaragoza'],        // Fila 3
    ['Teruel', 'Alicante', 'Valencia', 'Murcia'],      // Fila 4
    ['Cáceres', 'Badajoz', 'Madrid', 'CLM']            // Fila 5
];

// Usando destructuring para extraer las provincias Jaén, Granada, Córdoba, Zaragoza de la tercera fila
const [, , [jaen, granada, cordoba, zaragoza]] = provinciasLimitrofesCLM;  // Saltamos las primeras 2 filas

// Mostrar las provincias extraídas
console.log('Jaén:', jaen);
console.log('Granada:', granada);
console.log('Córdoba:', cordoba);
console.log('Zaragoza:', zaragoza);
