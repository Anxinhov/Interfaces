//################################################################################
// El sistema de filtrado de ReservaYa debe comprobar si un código de reserva
// introducido por el usuario comienza por el prefijo de la zona correspondiente
// (por ejemplo, comprobar si "PAD-1023" empieza por "PAD").
// Usa el método startsWith para verificarlo e imprimir el resultado.
//################################################################################
// Escribe tu código aquí
let codigoReserva = prompt("Muestrame el codigo de la reserva")
const prefijo = "ABC"
if(codigoReserva.startsWith(prefijo)){
    console.log("Codigo valido")
}else{
    console.log("Codigo no valido")
}