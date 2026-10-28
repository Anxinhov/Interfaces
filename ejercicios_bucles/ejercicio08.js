//################################################################################
// La tarifa de penalización por cancelación en ReservaYa se calcula con un
// multiplicador progresivo B (base real) elevado a E (exponente entero positivo) tramos.
// Pide por teclado la base B y el exponente E y calcula el resultado mediante un
// bucle (sin utilizar el operador ** ni Math.pow).
//################################################################################
// Escribe tu código aquí
let B = parseInt(prompt("Escribe la base real de la tarifa de penalización"))
let E = parseInt(prompt("Y ahora el exponente"))
let A = B
for(let i=1;i<E;i++){
    A=A*B
}
console.log("La tarifa de penalización es "+A)