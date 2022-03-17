//traen un unico elemento
let texto1= document.querySelector(".card");
let texto12= document.querySelector("#text1");
let texto11= document.getElementById("text1");


//traen mas de un elemento
let botones=document.getElementsByTagName("button");// me trae a todos los botones
let botones2= document.querySelectorAll("button");

let cards=document.querySelectorAll(".card");
let cards2=document.getElementsByClassName("card");

// obtengo un array
console.log(botones)
console.log(botones[0])

botones[0].addEventListener("click",()=>{
    alert("hiciste click en el primer boton")
})

//condicionales:

//1) if - if/else
//2) operadores ternarios 
//3) switch

//2) operadores ternarios 
//condicion        ?    true                     :  false   
botones.length > 2 ? console.log(botones.length) : console.log("el array tiene menos de 2 items")

let suma=0
//1) if - if/else condicion : true o false

//botones.length =10 ; botones.length=19999 botones.length=3 
if (botones.length > 2) {
    console.log(botones.length);
    suma++
    console.log(suma)
} else{
    //acciones en caso que la condicion sea falsa
}


//3) switch
let suma2= suma+10

switch (suma2) {
    case 20:
        //acciones a realizar
        break;
    case 40:
        //acciones a realizar
        break;
    default:
        //acciones en caso que no sean los casos anteriores
        break;
}

let diccionario=[
    {
        nombe:"lapicera",
        definicion:"elemento para escribir"
    },
    {
        nombe:"html",
        definicion:"lenguaje interpreatado por el navegador que brinda la estructura al sitioweb"

    }
];

//bucles - estructuras de repeticion

//1) for tradicional
//2 for of
//3) while
//4) do while 

let palabraBuscada= prompt(" ingrese la palabra a buscar");

//1) for tradicional
//          2            < 2             
for (let i = 0; i < diccionario.length; i++) {
//bucar aquel objeto que tenga en su propiedad "nombre" el valor de palabraBuscada
//si eso ocurre, le devuelva la definicion

//   diccionario[1].nombre 
    //      "lapicera"
    if(diccionario[i].nombre === palabraBuscada){
        alert(diccionario[i].definicion)
    }
}

//---------------------
//2 for of
/*
let diccionario=[
    {
        nombe:"lapicera",
        definicion:"elemento para escribir"
    },
    {
        nombe:"html",
        definicion:"lenguaje interpreatado por el navegador que brinda la estructura al sitioweb"

    }
];

let palabraBuscada= prompt(" ingrese la palabra a buscar");// "html"
let bandera=false;*/

for (palabra of diccionario) {
//      "html"            "html"
    if (palabra.nombre === palabraBuscada) {
        alert(palabra.definicion);
        bandera=true
    }
}

if(bandera == false){
    alert("La palabra no esta definida en este diccionario")
}

//1ro pensar lo que me piden que resuelva o lo que necesito que haga el programa
//2do pensar que herramientas puedo usar y armar el programa
//3ro probarlo: si funciona esta bien,,sino ver la consola y modificar la funcion
//4to ver si el sitio escala, que esta funcion siga siendo util.

let palabraBuscada= prompt(" ingrese la palabra a buscar");// "html"
let bandera=false;
let contador =0;

let diccionario=[
    {
        nombe:"lapicera",
        definicion:"elemento para escribir"
    },
    {
        nombe:"html",
        definicion:"lenguaje interpreatado por el navegador que brinda la estructura al sitioweb"

    }
];

//3) while

//contador< diccionario.length ? si ->if()..contador++

while (contador< diccionario.length) {
    if(diccionario[contador].nombre === palabraBuscada){
        alert(diccionario[contador].definicion)
    }
    contador++
}



//4) do-while
//diccionario.length =2
//contador arranca en 2

//if()..contador++ y luego se fija si contador< diccionario.length? si ->if()..contador++
do {
    
    if(diccionario[contador].nombre === palabraBuscada){
        alert(diccionario[contador].definicion)
    }
    contador++
} while (contador< diccionario.length);