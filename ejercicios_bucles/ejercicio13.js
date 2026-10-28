//################################################################################
// El recepcionista introduce los cobros en metálico de la jornada en el TPV de ReservaYa.
// El programa pide importes en euros hasta que se introduce un 0.
// Al terminar, debe imprimir la recaudación total y el ticket medio por cobro.
//################################################################################
// Escribe tu código aquí
let suma = 0
let contador = 0
let media
let precio
while(precio!=0){
    precio=parseInt(prompt("Dime el precio de el cobro"))
    suma=suma+precio
    if(precio!=0){
        contador++
    }
}
media=suma/contador
console.log("La recaudación total es "+suma+"€ y el ticket medio es de "+media+"€")