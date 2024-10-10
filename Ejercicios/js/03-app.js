let nombre ="Pepe";
let apellido = "Ramirez";
let nombre_completo = nombre + " " + apellido;
console.log("1 " + nombre_completo);
//Template literals
let curso = "S2DAW";
nombre_completo = `$(nombre) $(apellido)`;
let saludo = `Hola $(nombre) $(apellido), bienvenido al curso de $(curso)`;
console.log("2 " + saludo);
//typeof
console.log("3 " + typeof saludo);
//.lenght
console.log("4 " + nombre.length);
//.includes
console.log("5 " + saludo.includes("bien73743829"));
//.slice
console.log("6 " + saludo.slice(12,17));
//replace
console.log("7 " + saludo.replace("Pepe", "Manolo"));
//.trim
let cadena = "          hola   mundo     ";
console.log("8 " + cadena.trim());