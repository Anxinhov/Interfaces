//################################################################################
// EJERCICIO G
// Declarar dos vectores de 5 enteros, pedir sus valores y calcular:
// vector3 = producto elemento a elemento, y la suma total (producto escalar).
//################################################################################
const a = Array.from({length:5}).map(() => parseInt(prompt("Dime los valores del vector a")))
const b = Array.from({length:5}).map(() => parseInt(prompt("Dime los valores del vector b")))
const c = v1.map((num, i) => num * b[i])
const productoEscalar = c.reduce((acumulador, actual) => acumulador + actual, 0)
console.log("Vector 1: "+a)
console.log("Vector 2: "+b)
console.log("Vector 3 (producto elemento a elemnto): "+c)
console.log("Producto escalar (suma total): "+productoEscalar)