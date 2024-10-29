const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit',(e)=>{
    e.preventDefault(); //Evitamos la accion por defecto que es POST

    console.log(e.target.method); //Mostramos el metodo por defecto
    console.log(e.target.action); //Mostramos la accion por defecto
});

//formulario.addEventListener('submit',validadFormulario);

//function validadFormulario(e){
//e.preventDefault();
//console.log(e.target.action);
//}