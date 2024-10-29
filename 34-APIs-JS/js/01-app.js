const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click',()=>{
    Notification
    .requestPermission()
    .then(resultado=>{
        console.log(`El resultado es ${resultado}`);
    })
})

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click',()=>{
    if(Notification.permission==='granted'){
        const notificacion=new Notification('Esta es la notificacion',{
            icon:'img/logo2.png',
            body: 'CURSO 2 DE DAW'
        })
        notificacion.onclick=function(){
            window.open('https://www.iesazarquiel.es');
        }
    }
})