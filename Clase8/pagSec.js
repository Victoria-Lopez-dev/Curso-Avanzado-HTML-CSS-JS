// que cuando cargue la pagina secundaria, se fije en la pagina inicial el tema de estilo que tiene y lo replique en
//esta hoja secundaria
let body=document.querySelector("body");
let botones=document.querySelectorAll(".boton");//array

window.addEventListener('load',()=>{

    let temaEstilo = localStorage.getItem('estilo');
    console.log(temaEstilo)

    if(temaEstilo == "night"){
        
        
        body.classList.add("fondo");
        body.style.color="white"

        botones.forEach((boton)=>{
            boton.classList.add("botonNight")
            boton.classList.remove("botonDay")
        })
    }

    if( temaEstilo == "day"){

        body.classList.remove("fondo");
        body.style.color="black";

        botones.forEach((boton)=>{
            boton.classList.remove("botonNight")
            boton.classList.add("botonDay")
        })

    }

    let datoNombre = sessionStorage.getItem('nombreIngresado');
    document.querySelector('h2').textContent=`Bienvendido ${datoNombre}`
})