const primerEnlace = document.querySelector('a');
console.log(primerEnlace);
primerEnlace.remove();

const navegacion = document.querySelector('.navegacion');

navegacion.removeChild(navegacion.children[2]);