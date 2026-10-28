//################################################################################
// Diseña un panel de gestión para el recepcionista de ReservaYa.
// Muestra un menú por pantalla que se repita mientras el usuario no elija salir:
// 1. Ver estado de pistas
// 2. Crear nueva reserva
// 3. Cancelar reserva
// 4. Salir
//################################################################################
// Escribe tu código aquí
let i=0
while(i!=4){
    console.log("1. Ver estado de pistas")
    console.log("2. Crear nueva reserva")
    console.log("3. Cancelar reserva")
    console.log("4. Salir")
    i=parseInt(prompt("Elige una de las cuatro opciones escribiendo su número"))
    if(i==1){
        console.log("La opción elegida es ver estado de pista\n")
    }else if(i==2){
        console.log("La opción elegida es crear nueva reserva\n")
    }else if(i==3){
        console.log("La opción elegida es cancelar reserva\n")
    }else if(i==4){
        console.log("La opción elegida es salir\n cerrando...")
    }else{
        console.log("La opción que has elegido no es valida vuelve a intentarlo\n")
    }
}