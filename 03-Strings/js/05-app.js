const producto="Monitor 30 pulgadas";

var nuevacadena=producto.replace("pulgadas","");
console.log(nuevacadena);
nuevacadena=producto.replace("Monitor","Monitor curso");
console.log(nuevacadena);

//slice
nuevacadena=producto.slice(0,10);
nuevacadena=producto.slice(8);
console.log(nuevacadena);

//alternativa al slice
nuevacadena=producto.substring(0,10);

//Extraer un carácter solo
const usuario="Nombre";
charCadena=usuario.charAt(0);

const cadenaOriginal = "Brave a world";

// Convertimos la cadena a un arreglo de caracteres, la invertimos y luego la unimos de nuevo
const cadenaInvertida = cadenaOriginal.split('').reverse().join('');

console.log(cadenaInvertida);
