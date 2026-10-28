//################################################################################
// El sistema de verificación de cupones simétricos de ReservaYa comprueba si el
// código promocional introducido es un palíndromo (se lee igual de izquierda a
// derecha que de derecha a izquierda).
//################################################################################
// Escribe tu código aquí
let codigo = prompt("Dime e codigo: ")
codigo = codigo.toLowerCase()
let inverso = codigo.split("").reverse().join("")

if(codigo == inverso){
    console.log("El codigo es palindromo")
}else{
    console.log("El codigo no es palindromo")
}