//Para prevenir los efectos no deseados del punto anterior usamos el DELEGATION

const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click',(e)=>{
    console.log(e.target.classList);

    if(e.target.classList.contains('titulo')){
        console.log('Diste click en titulo');
    }
    if(e.target.classList.contains('precio')){
        console.log('Diste click en precio');
    }
    if(e.target.classList.nodeName==='IMG'){
        console.log('Diste click en la imagen');
    }
});