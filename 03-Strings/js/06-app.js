const producto="Monitor 20 pulgadas";

const texto="en promocion".repeat(3);

const cadenaFinal="${producto}${texto}!!!!!!!!!!!";
console.log(cadenaFinal);

const actividad="Estoy esperando que se me haga la cena";
const cadenaSplit=actividad.split(" ");
console.log(cadenaSplit);

var hobbies="Leer, escuchar música, escribir diario, hacer la cama, lavar los platos.";
cadenaHobbies=hobbies.split(",");

var cadena="Pedro esta con sus amigos Pedro María y Pedro Luis";
var regex= /[e,a]/g;
total=cadena.match(regex);

var cadenaMay=producto.toUpperCase();
var cademaMay=producto.toLowerCase();

const precio=200;
var precioStr=precio.toString();