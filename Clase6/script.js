/* API - Interfaz de Programacion de Aplicaicones 

- realizar funciones complejas  y como un conector
entre un servidor y el navegador

-APIs HTML5 - Canvas - Geolocalizacion

-APIs externas - guardar Gifs y crearlos.
-APIs informacion sobre  personajes de Rick and Morty
*/


//let canvasEtiqueta = document.getElementsByClassName("canvas")[0];  <- array de un elemento[], 

//let canvasEtiqueta = document.querySelector("#lienzoCanvas");
let canvasEtiqueta = document.getElementById("lienzoCanvas");

let lienzo= canvasEtiqueta.getContext('2d');

//console.log(lienzo)

lienzo.beginPath()
lienzo.strokeStyle="green"
// rectangulos  trazos curvas
//             x  y 
lienzo.moveTo(100,50);

//              x   y
lienzo.lineTo(300,100); 
lienzo.stroke()
lienzo.closePath();

lienzo.beginPath();
lienzo.strokeStyle="blue"
lienzo.moveTo(50,200);
lienzo.lineTo(20,50);
lienzo.stroke();
lienzo.closePath();

lienzo.beginPath();
lienzo.fillStyle="red"
lienzo.moveTo(50,50);

 lienzo.fillRect(50,50,100,50)

 lienzo.closePath();




 lienzo.beginPath();

 
 lienzo.fillStyle="black"
 lienzo.strokeStyle="black"
lienzo.moveTo(200,100);

// Math.PI = 180 grados
//Math.PI *2 = 360 grados
//Math.PI / 180 * 25 = 25 grados

//Math.PI/ 180 * 0 = 0 

let angulo =Math.PI / 180 * 90;

//direccion es un booleano = true o false

lienzo.arc(200,200 ,50 ,0 ,Math.PI *2,true )
lienzo.fill()
//bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)

//lienzo.bezierCurveTo(150,150, 300, 200, 200, 200)

//lienzo.stroke()