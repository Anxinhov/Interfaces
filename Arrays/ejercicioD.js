//################################################################################
// EJERCICIO D
// Vector de hasta 7 elementos. Pedir números hasta llenarlo o hasta que se
// introduzca un 0. Mostrar los elementos introducidos y su suma.
//################################################################################
const numeros = []
let contador = 0
let numero
do{
    numero = parseInt(prompt("Introduce un número "))
    numeros.push(numero)
    contador++
}while(numero!=0 && contador!= 7)
let sum = numeros.reduce((total,value) => total+value);
console.log(numeros)
console.log(sum)

