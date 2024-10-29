const diaHoy = new Date();

let valor;
valor=diaHoy;
console.log(valor);

const otroDia = new Date('10-24-1998');
console.log(otroDia);
year=diaHoy.getFullYear();
console.log(year);
month = diaHoy.getMonth()+1; //empieza desde 0
console.log(month);
time = diaHoy.getTime(); //los segundos transcurridos desde Enero 1970
fechaActual = Date.now(); //los segundos transcurridos desde Enero 1970

console.log(fechaActual);