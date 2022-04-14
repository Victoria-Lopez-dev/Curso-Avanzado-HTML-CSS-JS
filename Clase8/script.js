//let password="123Victroria"

//let encriptada="(*&DKNSKH(*Djhdfkhs"//base de datos


//se busca el password encriptado // se hacen las validaciones

/*
un token = un string encriptado que autoriza a la parsona por un tiempo
determinado a acceder al sitio o sectores
*/

//eventos -> 'click'
//uso de DOM ->
//referencia ->

let botonDay= document.querySelector('#day');
let body=document.querySelector("body");
let botonNight=document.querySelector('#night') ;
let botones=document.querySelectorAll(".boton");//array;

let objetoEjemplo=[
    {
        nombre: "silla",
        precio:2500
    },
    {
        nombre: "silla",
        precio:2500
    },
    {
        nombre: "silla",
        precio:2500
    }
]



console.log(objetoEjemplo)



botonDay.addEventListener('click',()=>{

    body.classList.remove("fondo");

        botones.forEach((boton)=>{
            boton.classList.remove("botonNight")
            boton.classList.add("botonDay")
        })
    //defina los colores del sitio para ese tema
    //guardar es un dato que haga referencia al tema dia

    localStorage.setItem('estilo',"day");

    let objetoJson= JSON.stringify(objetoEjemplo)

    localStorage.setItem('otraCosa',objetoJson)

    localStorage.setItem("nombre","Juan Carlos")
})


botonNight.addEventListener('click',()=>{
    //definir los colores para el tema noche
      //guardar es un dato que haga referencia al tema noche
   //cambio de estilo
    botones.forEach((boton)=>{
        boton.classList.add("botonNight")
        boton.classList.remove("botonDay")
    })
    document.querySelector("body").classList.add("fondo")

    localStorage.setItem('estilo',"night")


    //manejando datos
    let dato=localStorage.getItem('otraCosa');
    let datoParseado = JSON.parse(dato)
    console.log(datoParseado)
  localStorage.removeItem("nombre");


})


//JSON -> formato y se usa para el manejo de datos
//utilizar para enviar conjunto de datos
//JSON.stringify -> vuelve JSON a la informacion que le pase
//JSON.parse -> volver al dato original , el que se encuentra en formato JSON

let botonNombre= document.querySelector("#botonNombre");

botonNombre.addEventListener('click',()=>{
    let info=prompt("Ingrese su nombre");//string

    sessionStorage.setItem('nombreIngresado',info)


})

//PROPUESTA:
//Hacer que al clickear los productos , se guarde la informacion de lo que compro en el localStorage y se cambie el numero en el carrito de compras
//Si queremos ser mas grosos todavia:
//Agregar un boton que nos permita reiniciar la compra y sacar los productos guardados en el carrito de compras