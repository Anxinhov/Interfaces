//################################################################################
// El equipo de mantenimiento debe pasar la máquina cepilladora solo por las pistas
// con número par ubicadas entre dos delimitadores introducidos por el usuario.
// Pide los dos números de pista e imprime todos los números pares del intervalo.
//################################################################################
// Escribe tu código aquí
let pares=0
do{
    let delimitadorInicio = parseInt(prompt("Dime el numero con el que empiezas el intervalo: "))
    let delimitadorFinal = parseInt(prompt("Dime el numero con el que acaba el intervalo: "))
    if(delimitadorInicio>delimitadorFinal){
        console.log("El inicio no puede ser mas grande que el final")
    }
}while(delimitadorInicio>delimitadorFinal)
for (let i=delimitadorInicio;i<=delimitadorFinal;i++){
    if(i%2==0){
        pares++
    }
}
console.log("La cantiadad de números pares en el intervalo és: "+pares)