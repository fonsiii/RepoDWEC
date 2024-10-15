const encabezado = document.querySelector('h1');
console.log(encabezado.style);

//Las propiedades que tenemos en el CSS estan en el API de JavaScript
//pero, se le quita el guion.

encabezado.style.backgroundColor='green';
encabezado.style.fontFamily='Arial';
encabezado.style.textTransform='uppercase';

const card = document.querySelector('.card');
card.classList.add('nueva-clase');


//card.classlist.add('nueva-clase', 'segunda-clase');

card.classList.remove('card');
