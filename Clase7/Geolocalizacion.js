//GEOLOCALIZACION
let ObjDeConfiguracion={
    enableHIghAccuracy :true,
    timeout:1000,
    maximumAge:2000
}
/* PASOS:
 -pedimos autorizacion         
 -solicitamos la ubicacion y nos devuelve un objeto SiTodoSaleBien , 
 o un objeto si SiAlgoSaleMal
 Tambien podemos configurar algunos estandares para tener control sobre la ejecucion de la busqueda con un objeto que configuramos como tercer parametro

 //IMPORTANTE///
 en la funcion getCurrentPositio() es importante el orden en que colocamos los parametros:
1ro las acciones a realizar si todo sale bien
2do las acciones a realizar si algo sale mal
3ro la configuracion de la funcion que podemos controlar y definir
 */
navigator.geolocation.getCurrentPosition(UbicarDispositivo,FuncionError,ObjDeConfiguracion)


function UbicarDispositivo(position) {
    console.log(position.coords.latitude)
}

function FuncionError(error) {
    if(error.code == 1){
        alert(" NO se piede continuar por que no accedio a dar su ubicacion")
    }
    if(error.code == 3){
        
    }
    console.log(error)
}