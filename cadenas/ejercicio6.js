//################################################################################
// Para generar un token codificado de confirmación de pista, el sistema toma el
// nombre de la pista y genera una nueva cadena invirtiendo todos sus caracteres.
//################################################################################
// Escribe tu código aquí
let nombrePista = prompt("Dime el nombre de la pista:\n")
let token = ""
let contador = 0
for(let i=nombrePista.length-1;i>=0;i--){
    token += nombrePista.charAt(i)
    contador++
}
console.log("Su token codificado de confirmación es: "+token)