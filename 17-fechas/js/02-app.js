// https://momentjs.com/

const fechaFormatoEU = new Date().toLocaleDateString();
console.log(fechaFormatoEU);
const horaFormatoEU = new Date().toLocaleTimeString();
console.log(horaFormatoEU);

moment.locale('es');

console.log(moment().format('MMMM D YYYY'));
console.log(moment().format('MMMM D YYYY hh:mm:ss'));
console.log(moment().format('DD MM YYYY'));
