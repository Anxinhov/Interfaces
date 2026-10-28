//################################################################################
// Un sistema de lector óptico de tarjetas de socio lee los nombres con las mayúsculas
// y minúsculas invertidas. Realiza un programa que lea la cadena y convierta las
// mayúsculas a minúsculas y las minúsculas a mayúsculas.
//################################################################################
// Escribe tu código aquí
let codigo = prompt("Dime el codigo con mayusculas y minusculas").split("")
let codigoInvertido=""
for (let i=0;i<codigo.length;i++){
    let caracter = codigo[i]
    if(caracter===caracter.toUpperCase())
        codigoInvertido += caracter.toLowerCase()
    else
        codigoInvertido += caracter.toUpperCase()
    
}
console.log(codigoInvertido)
