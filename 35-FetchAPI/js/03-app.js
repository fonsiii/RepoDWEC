//Cargar un JSON
const cargarJSONArrayBtn=document.querySelector('#cargarJSONArray');
cargarJSONArrayBtn.addEventListener('click',obtenerDatos);

function obtenerDatos(){
    const url='data/empleados.json';

    fetch(url)//es una promesa
    .then(respuesta=>respuesta.json())
    .then(resultado=>mostrarHTML(resultado));

   // console.log(respuesta);
}

function mostrarHTML(empleados){
    const content=document.querySelector('.contenido');
    let html='';

    empleados.forEach(empleado => {
        
        const{id,nombre,empresa,trabajo}=empleado;
        html+=`
        <p>Empleado: ${empresa}</p>
        <p>Id: ${id}</p>
        <p>Empresa: ${nombre}</p>
        <p>Trabajo: ${trabajo}</p>
        `

    });

    content.innerHTML=html;

}