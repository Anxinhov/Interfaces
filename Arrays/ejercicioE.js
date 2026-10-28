//################################################################################
// EJERCICIO E
// Vector de 7 números aleatorios (0-50). Ordenar de mayor a menor y calcular
// la mediana.
//################################################################################
const numeros = []
for(let i = 0; i < 7; i++){
numeros.push(Math.floor(Math.random() * 51))
}
let ordenar = numeros.sort(function(a, b){return b - a})
console.log(ordenar)
console.log(numeros[(Math.floor(numeros.length / 2))])

