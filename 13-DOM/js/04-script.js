//querySelector, devuelve a lo maximo un elemento,
//Puede seleccionar elementos por clases y por id

//Devuelve el primer elemento que encuentre con la
//CLASE card
const card = document.querySelector('.card');
console.log(card);

//Padre con la clase premium y el hijo con la clase info
const info=document.querySelector('.premium .info');
console.log(info);

//Que tenga la clase premium y la clase info
const info2=document.querySelector('.premium.info');
console.log(info2);


const segundoCard=document.querySelector('.hospedaje .card:nth-child(2)');
console.log(segundoCard);

const formulario=document.querySelector('#formulario');
console.log(formulario);

const navegacion=document.querySelector('nav');
console.log(navegacion);