const enlace = document.createElement('a');
enlace.textContent='Nuevo enlace';
enlace.href='/nuevo-enlace';
enlace.target='_blank';
enlace.setAttribute('min_atributo','nuevo-enlace');
enlace.classList.add('mi_clase');
enlace.onclick=miFuncion();

function miFuncion(){
    alert("Has pulsado nuevo enlace");
}

const navegacion=document.querySelector('.navegacion');
//navegacion.appendChild(enlace);
navegacion.insertBefore(enlace,navegacion.children[1]);


//EJEMPLO CREAR UNA TARJETA DE FORMA DINAMICA

const parrafo1 = document.createElement('p');
parrafo1.textContent='concierto';
parrafo1.classList.add('categoria','concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent='concierto de rock';
parrafo2.classList.add('titulo');

const parrafo3= document.createElement('p');
parrafo3.textContent='80€ por persona';
parrafo3.classList.add('precio');

const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);


const imagen = document.createElement('img');
imagen.src='img/hacer2.jpg';

const card = document.createElement('div');
card.classList.add('card');

card.appendChild(imagen);
card.appendChild(info);

const contenedor=document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);
//contenedor.insertBefore(card,contenedor.children[0]);