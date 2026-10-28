//################################################################################
// Simula el proceso de verificación de pago de una reserva. Mediante un bucle while,
// simula una petición en la que se comprueba el estado de la reserva.
// El bucle debe continuar pidiendo confirmación hasta que el estado cambie a "confirmada".
//################################################################################
// Escribe tu código aquí
let contador = false
while( contador!= true){
    console.log("Verificando reserva")
    
    let respuesta =prompt("Quieres pagar?(S/N)")
    if(respuesta.toUpperCase() == "S"){
        contador = true
    }
}
console.log("Reserva completada")