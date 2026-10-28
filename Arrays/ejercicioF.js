//################################################################################
// EJERCICIO F
// Pedir un número de día (1-7) y mostrar su nombre y si es fin de semana
// o día laborable, usando un vector.
//################################################################################
const dias = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"]
let num = parseInt(prompt("Dime un número de dia"))
console.log(dias[num-1])
if(num <= 5){
    console.log("Dia laborable")
}else{
    console.log("Fin de semana")
}