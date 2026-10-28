//################################################################################
// EJERCICIO C
// Leer 6 notas (0-10). Mostrar todas, la media, la más alta, la más baja
// y cuántas son aprobado (>=5).
//################################################################################
let notas = Array.from({length: 6}, (_,i) => parseInt(prompt("Dime una nota")))
let media = (notas.reduce((x, y) => {x + y}) /notas.length).toFixed(2)
let contAprobadas = notas.filter((x) => x >= 5)
console.log(notas)
console.log(`La media es: +${media}`)
console.log(`La nota mas alta es: ${notas.sort((a,b) => b - a)[0]}`)
console.log(`La nota mas pequeña es: ${notas.sort((a,b) => a - b)[0]}`)
console.log("La cantidad de notas aprobadas es: "+contAprobadas)