//################################################################################
// El sistema de taquillas automáticas de ReservaYa necesita generar N códigos
// de acceso seguros. Un código seguro es aquel número que solo se puede dividir
// exactamente por 1 y por sí mismo (números primos).
// Solicita al usuario por teclado cuántos códigos de taquilla desea mostrar.
//################################################################################
// Escribe tu código aquí
let nCodigos = parseInt(prompt("Dime el número de codigos que quieres"))
let contador = 0
let a=1
for(let i = 1;i<=nCodigos;){
    for(let n = 2;n<a;n++){
        if(a%n==0){
            contador++
        }
    }
    if(contador==0){
        console.log(a)
        i++
    }
    contador=0
    a++
}