//################################################################################
// ¡Promoción ReservaYa! Si adivinas el número de la Pista Mágica (del 1 al 100)
// obtienes una reserva gratuita. Tienes un máximo de 10 intentos.
// Tras cada intento, el sistema te indicará si el número buscado es mayor o menor.
// El programa termina cuando acertaste o al agotar los 10 intentos.
//################################################################################
// Escribe tu código aquí
const numeroMagico =Math.floor(Math.random()*100)+1
let contador=0
let n
console.log("Intentos: 10")
while(contador!=10 && numeroMagico!=n){
    n=parseInt(prompt("Adivina el número"))
    contador++
    if(n<numeroMagico){
        console.log("Error, el número es mayor")
        console.log("Intentos: "+(10-contador))
    }else if(n>numeroMagico){
        console.log("Error, el número es menor")
        console.log("Intentos: "+(10-contador))
    }else{
        console.log("Correcto has acertado el número")
    }
}
if(n!=numeroMagico){
    console.log("Se acabaron los intentos.")
    console.log("El número correcto era: "+numeroMagico)
}