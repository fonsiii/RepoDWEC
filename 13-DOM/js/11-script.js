const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

//btnFlotante.addEventListener('click',()=>{
//    console.log('Hiciste click');
//})

btnFlotante.addEventListener('click',mostrarOcultarFooter);

function mostrarOcultarFooter(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        btnFlotante.classList.remove('activo');
        this.textContent='Idioma y Moneda';
    }else{
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        this.textContent='X CERRAR';
    }
}