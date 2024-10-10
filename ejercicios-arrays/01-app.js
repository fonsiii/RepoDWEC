// ejercicio 1
const m5x4=[
    ["Albacete", "Toledo", "Cuenca", "Guadalajara"],
    ["Ciudad Real", "Avila", "Soria", "Segovia"],
    ["Jaen", "Gradana", "Cordoba", "Zaragoza"],
    ["Teruel", "Alicante", "Valencia", "Murcia"],
    ["Caceres", "Badajoz", "Madrid", "CLM"]
];

// ejercicio 2
const elemento1 = m5x4[3][2];
const elemento2 = m5x4[2][3]

console.log(`La ciudad 3,2 es ${elemento1}.`);
console.log(`La ciudad 2,3 es ${elemento2}.`);

// ejercicio 3
const elementosIJ = [];
for(let i=0;i<m5x4.length;i++){
    elementosIJ.push(m5x4[i][i]);
};
console.log(elementosIJ);


//ejercicio 4
m5x4.forEach((fila, i) => {
    fila.forEach((m5x4,j) => {
        console.log(`Nombre de provincia: ${m5x4}, Posicion: (${i}, ${j})`);
    });
});

//ejercicio 5
for (let i=0;i<m5x4.length;i++){
    for(let j=0;j<m5x4[i].length;j++){
        console.log(`Provincia: ${m5x4[i][j]}, Posicion: (${i}, ${j})`);
    }
}

//ejercicio 6
const [, fila2] = m5x4;

console.log(fila2);

//ejercicio 7
const [,, fila3] = m5x4;

console.log(fila3);

//ejercicio 8
const andalucia = m5x4[2].map(m5x4 => m5x4);

console.log(andalucia);

//ejercicio 9
const clm = m5x4[0].map(m5x4 => m5x4);

console.log(clm);

//ejercicio 10 to 13

const estudiante1= [
    {
        nombre : "Luis",
        apellidos : "Martin Rojas",
        edad : 22,
        nacionalidad : "Española",
        dni : "2484637K",
        matricula: [
        {
            nie : 245887,
            ies : "Azarquiel",
            estudios : "2DAW",
            curso : "24/25"
        }
    ],
        expediente: [
            {
                curso: "23/24",
                estudios: "1DAW",
                asignaturas : [
                    { nombre: "Programación", nota: 8.5 },
                    { nombre: "Bases de Datos", nota: 7.0 },
                    { nombre: "Sistemas Informáticos", nota: 9.0 }
                ]
            },
            {
                curso: "24/25",
                estudios: "2DAW",
                asignaturas: [
                    { nombre: "Desarrollo Web", nota: 8.0 },
                    { nombre: "Entornos de Desarrollo", nota: 9.0 },
                    { nombre: "Despliegue de Aplicaciones", nota: 7.5 }
                ]
            }
        ]
    }
];


console.log(estudiante1);


//ejercicio 14

const {nombre, apellidos, dni} = estudiante1[0];
const {estudios} = estudiante1[0].expediente[1]; //segunda matricula

console.log(`${nombre} ${apellidos} con dni ${dni} realiza los estudios de ${estudios}`);

//ejercicio 15

Object.freeze(estudiante1);

estudiante1.nombre = "Carlos";

//ejercicio 16


const estudiante2= [
    {
        nombre : "Carlos",
        apellidos : "Martin Jimenez",
        edad : 22,
        nacionalidad : "Española",
        dni : "2484897D",
        matricula: [
        {
            nie : 245886,
            ies : "Azarquiel",
            estudios : "1SMR",
            curso : "24/25"
        }
    ],
        expediente: [
            {
                curso: "24/25",
                estudios: "1SMR",
                asignaturas : [
                    { nombre: "Aplicaciones web", nota: 8.5 },
                    { nombre: "Montaje de equipos", nota: 7.0 },
                    { nombre: "Sistemas Informáticos", nota: 9.0 }
                ]
            },
            {
                curso: "25/26",
                estudios: "2SMR",
                asignaturas: [
                    { nombre: "Servicios en red", nota: 8.0 },
                    { nombre: "Sistemas operativos", nota: 9.0 },
                    { nombre: "Ofimatica", nota: 7.5 }
                ]
            }
        ]
    }
];


function esLaMismaPersona(estudiante1,estudiante2){
    return estudiante1[0].dni === estudiante2[0].dni; 
}

console.log(esLaMismaPersona(estudiante1,estudiante2));


//ejercicio 17

function calcularTraza(matrizCuadrada){
    let traza = 0;

    for (let i = 0; i < matrizCuadrada.length; i++){
        traza += matrizCuadrada[i][i];
    }
    return traza;
}

//matrix de 5x5

const matrizCuadrada = [
    [1,0,2,-1,3],
    [0,3,0,1,-2],
    [2,0,-2,0,0],
    [1,1,-3,5,1],
    [0,0,1,1,1]
]

const resultadoTraza = calcularTraza(matrizCuadrada);
console.log(resultadoTraza);