const abrirBtn=document.querySelector('#abrir-pantalla-completa');

const salirBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click',pantallaCompleta);
salirBtn.addEventListener('click',cerrarPantallaCompleta);

function cerrarPantallaCompleta(){
    document.exitFullscreen();
}
function pantallaCompleta(){
    document.documentElement.requestFullscreen();
}