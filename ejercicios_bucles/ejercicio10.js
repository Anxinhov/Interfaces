//################################################################################
// ReservaYa necesita calcular cuántas combinaciones únicas de partidos se pueden
// formar en la fase final de un torneo con N equipos participantes (factorial de N).
// Crea un programa que pida el número de equipos (entero positivo) y calcule el total
// de combinaciones posibles.
//################################################################################
// Escribe tu código aquí
let equipos = parseInt(prompt("Dime cuantos equipos hay en total"))
let factorial = 0
for(let i=equipos-1;i>0;i--){
    factorial=factorial*i
}
console.log("La cantidad de partidos posibles es "+factorial)