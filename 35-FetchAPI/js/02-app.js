const cargarJSONBtn = document.querySelector('#cargarJSON');
cargarJSONBtn.addEventListener('click',obtenerDatos);

function obtenerDatos(){
    const url='data/empleado.json';

    fetch(url)
        .then(respuesta=>respuesta.json())
        .then(resultado=>mostrarHTML(resultado));

}

function mostrarHTML({empresa,id,nombre,trabajo}){
    const content = document.querySelector('.contenido');
    content.innerHTML = `
    <p>Empleado: ${nombre}</p>
    <p>ID: ${id}</p>
    <p>Empresa: ${empresa}</p>
    <p>Trabajo: ${trabajo}</p>

    `
}