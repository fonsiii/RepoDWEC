const navegacion = document.querySelector('.navegacion');

navegacion.addEventListener('click',()=>{
    console.log('click en nav');
});

navegacion.addEventListener('mouseenter',()=>{
    console.log('Estas en la zona de navegacion');
    navegacion.style.backgroundColor='red';
});
navegacion.addEventListener('mouseout',()=>{
    console.log('Has salido de la zona de navegacion');
    navegacion.style.backgroundColor='transparent';
});
navegacion.addEventListener('mouseup',()=>{
//Cuando suelto el boton de click
    console.log('Has soltado');
});navegacion.addEventListener('mouseup',()=>{
//Cuando suelto el boton de click
    console.log('Has soltado');
});
navegacion.addEventListener('dblclick',()=>{
    //Cuando suelto el boton de click
        console.log('Has hecho doble click');
    });