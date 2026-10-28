//################################################################################
// Tienes un array con los importes recaudados por cada reserva durante una jornada:
// const ingresos = [15, 20, 15, 30, 25, 15, 40];
// Utiliza un bucle para calcular la recaudación total del día y la media de ingresos.
//################################################################################
// Escribe tu código aquí
const ingresos = [15, 20, 15, 30, 25, 15, 40]
let suma = 0
for(let i=0;i<ingresos.length;i++){
    suma += ingresos[i]
}
let media = suma/ingresos.length
console.log("La recaudación total es "+suma+" y la recaudación media es "+media.toFixed(2))