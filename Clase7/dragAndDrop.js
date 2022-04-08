//JavaScript Drag & Drop -> eventos

//evento
/*document.querySelector("button").addEventListener("mouseover",()=>{
    console.log("se clickeo el boton")




});*/

//7 nuevos eventos: dragstart-dragend-drag-drop-dragenter-dragleave - dragover
//1ero --> el elemento tiene que ser arrastrable : draggable="true" , a menos que sea una <img> o un <a>
//Utilizo los eventos de D&D
let destino = document.querySelector("section");
let cubo = document.querySelector(".cubo");
let cohete = document.querySelector("img");

/*
/*
cubo.addEventListener('click',()=>{
    destino.innerHTML=`<div class=cubo><div>`
    cubo.style.visibility ='hidden'
})

window.addEventListener('load',isDraggable());

function isDraggable() {
    cubo.setAttribute('draggable',true)

}


//eventos sobre el elemento a arrastrar : dragstart -dragend-drag

cubo.addEventListener('dragstart',(evento)=>{

    evento.dataTransfer.setData("Text","cubo")
   // console.log(evento)
    evento.dataTransfer.setData("URL","../Clase1/imagenes/cohete.jpg")
    /* guardar info que me sirva para reproducirla en el destino
});

*/
/*
cohete.addEventListener("dragstart",(evento)=>{
    evento.dataTransfer.setData("URL","../Clase1/imagenes/cohete.jpg")
})
/*cubo.addEventListener('dragend',(evento)=>{
    console.log("se solto el elemento") 
  
})

cubo.addEventListener('drag',(e)=>{
    console.log("utilizando drag")
}); 
*/

//eventos sobre el elemento destino :" dragenter-dragover - dragleave-drop"
/*
destino.addEventListener('dragenter',()=>{
    console.log("elemento ingresa a destino")
});

destino.addEventListener('dragleave',()=>{
    console.log("saliendo de la zona de destino")
});


destino.addEventListener('dragover',(evento)=>{
  //  console.log("Movimientos en la zona destino");
    evento.preventDefault()
});

destino.addEventListener('drop',(evento)=>{
   // console.log("usando DROP")
/*
   //trasladando el cubo
  let dato =evento.dataTransfer.getData("Text");
   destino.innerHTML=`<div class ="${dato}" ></div>`

    cohete.classList.add("hidden")
 
*/
//trasladando la img del cohete
/*

   let fuente = evento.dataTransfer.getData("URL");

   let imagen = document.createElement("img");

   imagen.setAttribute('src',fuente)
   imagen.classList.add('size')
 
 destino.appendChild(imagen)
});
*/

/* dataTransfer --> setData()  getData()   clearData()
setDragImage()
dataTransfer.setData("Text","cubo")

*/ 


/*---------- con img no es necesario el draggable=true -----

document.querySelector('img').addEventListener("dragstart",()=>{
    console.log("IMAGEN arrastrada")
})

*/



/*------ para traer archivos externos -----  */

//eventos sobre el elemento destino :" dragenter-dragover - dragleave-drop"

destino.addEventListener('dragover',(evento)=>{
    evento.preventDefault()
})

destino.addEventListener('drop',(evento)=>{
    console.log(evento.dataTransfer.files)
    destino.textContent=`${evento.dataTransfer.files[0].name}`
})
