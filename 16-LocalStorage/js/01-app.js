localStorage.setItem('nombre','Pedro');

sessionStorage.setItem('nombre','Dolores');

const producto={
    nombre:'Monitor 24 pulgadas',
    precio:300,
}
const productoString=JSON.stringify(producto);
console.log(productoString);
localStorage.setItem('producto',productoString);

const meses=['Enero','Febrero','Marzo'];
const mesesString=JSON.stringify(meses);
localStorage.setItem('meses',mesesString);