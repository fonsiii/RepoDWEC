//Evitar la propagación con contenido creado...

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria');
parrafo1.classList.add('concierto');

//Segundo parrafo
const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de rock';
parrafo2.classList.add('titulo');

//Tercer parrafo

const parrafo3 = document.createElement('p');
parrafo3.textContent = '80 € por persona';
parrafo3.classList.add('precio');

//parrafo3.onclick=nuevaFuncion;
parrafo3.onclick=function(){
    nuevaFuncion(1)
}

//crear el div...
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Vamos a crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

//Crear el card...
const contenedorCard = document.createElement('div');
contenedorCard.classList.add('contenedorCard');

//Vamos a asignar la imagen al card...
contenedorCard.appendChild(imagen);

// y el info
contenedorCard.appendChild(info);

//Insertando en el HTML...
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(contenedorCard); // al inicio info

function nuevaFuncion(id){
    console.log('click en nuevo parrafo', id);
}