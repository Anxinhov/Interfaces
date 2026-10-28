//################################################################################
// Un cliente introduce las observaciones o requisitos especiales para su reserva en una frase.
// Realiza un programa que cuente e imprima cuántas palabras contiene dicha frase.
//################################################################################
// Escribe tu código aquí
let observaciones = prompt("Dime alguna observacion o requisito especial a tener en cuenta sobre su reserva:\n")
console.log("La cantidad de palabras es: "+observaciones.split(" ").length)