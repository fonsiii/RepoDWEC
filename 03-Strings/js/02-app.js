const producto="Monitor 20 pulgadas";

console.log(producto.lenght); //Devuelve la longitud de la cadena

console.log(producto.indexOf("Monitor")); //Devuelve 0
console.log(producto.indexOf("Pulgadas")); //Devuelve 11
console.log(producto.indexOf("Tablet")); //Devuelve -1

"Ballena azul, ballena asesina".lastIndexOf("Ballena");

console.log(producto.includes("Tablet"));

const hello = "Hola Munso";
const hellolenght=hello.lenght;
hello[0]="L"; //No funciona
hello[1]; //Devuelve H