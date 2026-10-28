//################################################################################
// Un usuario adquiere el abono "Socio VIP" de ReservaYa a pagar en 20 meses.
// El primer mes paga 10€, el segundo 20€, el tercero 30€ y así sucesivamente.
// Realizar un algoritmo para determinar cuánto debe pagar mensualmente y el total
// acumulado tras los 20 meses.
//################################################################################
// Escribe tu código aquí
let pago = 10
let suma = 0
for(let i = 1;i<=20;i++){
    console.log("El mes "+i+" Tienes que pagar "+pago+"€")
    suma += pago
    pago += 10
}
console.log("El total a pagar entre todos los meses es "+suma)