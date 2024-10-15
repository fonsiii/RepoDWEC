//TRAVERSING THE DOM

//const navegacion=document.querySelector('nav.navegacion');
//const navegacion=document.querySelector(.navegacion);
//console.log(navegacion);
//console.log(navegacion.childNodes);
//console.log(navegacion.children);

//console.log(navegacion.children[2]);
//console.log(navegacion.children[2].nodeName);
//console.log(navegacion.children[2].nodeType);


const card = document.querySelector('.card');
//console.log(card.children[1].children);
//console.log(card.children[1].children[1].textContent);
//card.children[1].children[1].textContent='Rock sinfonico';

//card.children[0].src='img/hacer2.jpg';

//NAVEGAR DE LOS HIJOS AL PADRE
//console.log(card.parentNode);
console.log(card.parentElement);
console.log(card.parentElement.parentElement.parentElement);

//HERMANOS

//console.log(card.nextElementSibling);
//console.log(card.nextElementSibling.nextElementSibling);

const navegacion = document.querySelector('.navegacion');
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);