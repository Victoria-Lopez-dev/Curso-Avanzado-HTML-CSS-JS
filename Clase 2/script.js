//evento 'click'

//1) addEventListener()
/*
let botonInicio = document.getElementById('inicio');
//                 document.querySelector('#inicio');
let botonPausa=document.querySelector('#pausa');
let videos = document.querySelectorAll('video');
//array de videos


let pausarVideo=()=>{
    for (video of videos) {
        video.pause(); 
     }
}

// play() -> el video que se tiene que reproducir...
botonInicio.addEventListener('click',()=>{
   /* for (video of videos) {
       video.play(); 
    }
    videos[0].play()
    
});

botonPausa.addEventListener('click',pausarVideo);*/


//2) onclick
//video.duration == la duracion del video

let videos = document.getElementsByTagName('video');
let duracionBloque =document.querySelectorAll('.duracion')//array

for (let i = 0; i < duracionBloque.length; i++) {
    duracionBloque[i].textContent=`Duracion del video: ${videos[i].duration}`
    
}

function inicioVideo() {
    for (video of videos) {
        video.play(); 
    }
};
let pausarVideo=()=>{
    for (video of videos) {
        video.play(); 
     }
};



//3)
/*
let botonInicio = document.getElementById('inicio');
let video = document.querySelector('video');

function inicioVideo() {
    video.play()
};

botonInicio.onclick= inicioVideo();*/