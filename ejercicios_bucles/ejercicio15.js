//################################################################################
// ReservaYa audita las solicitudes de cancelación de reservas.
// Se pide por teclado la cantidad de solicitudes a revisar.
// El programa debe informar de cuántos balances son positivos (cobro de penalización),
// cuántos son negativos (devolución al cliente) y cuántos son iguales a 0 (cancelación neutra).
//################################################################################
// Escribe tu código aquí
let cantidad = parseint(prompt("Dime la cantidad de solicitudes a revisar"))
let positivos = 0
let negativos = 0
let cero = 0

for (let i = 1;i<=cantidad;i++){
    let balance = parseInt(prompt("Dime el balance: "))
    if(balance>0){
        positivos++
    }else if(balance==0){
        cero++
    }else{
        negativos++
    }
}
console.log("Hay "+positivos*" balances positivos, "+negativos+" balances negativos y "+cero+" balances neutros")