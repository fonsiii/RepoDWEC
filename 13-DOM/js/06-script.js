const encabezado=document.querySelector('.contenido-hero h1');

console.log(encabezado.innerText); //Si la etiqueta tiene el atributo visibility:hidden, no lo encuentra
console.log(encabezado.textContent);
console.log(encabezado.innerHTML);

const encabezado2=document.querySelector('.contenido-hero h1').textContent;

document.querySelector('.contenido-hero h1').textContent='NUEVO HEADING';

const addEncabezado="NUEVO ENCABEZADO";
document.querySelector('.contenido-hero h1').textContent=addEncabezado;

const imagen=document.querySelector('.card img');
imagen.src='img/hacer2.jpg';