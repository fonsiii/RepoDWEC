//EVENTOS DEL TECLADO

const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('keydown',()=>{
    console.log('Escribiendo...');
});

busqueda.addEventListener('keyup',()=>{
    console.log('Soltando la tecla...');
});

//cuando ha perdido el foco
busqueda.addEventListener('blur',()=>{
    console.log('Ha perdido el foco');
});

//seleccionas y has pulsado ctrl+c
busqueda.addEventListener('copy',()=>{
    console.log('Has copiado');
});


//seleccionas y has pulsado ctrl+v
busqueda.addEventListener('paste',()=>{
    console.log('Has pegado');
});

//Se ejecuta cuando realizas cualquiera de los eventos anteriores, MENOS EL BLUR Y EL COPY
busqueda.addEventListener('input',()=>{
    console.log('Input');
});


//seleccionas y has pulsado ctrl+c
busqueda.addEventListener('input',(e)=>{
    console.log(e);
    console.log(e.type);

    console.log(e.target);
    console.log(e.targer.value);

    if(e.target.value === ''){
        console.log('fallo la validacion');
    }
});