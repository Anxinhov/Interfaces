//################################################################################
// Se solicita el código de seguridad de una taquilla y un carácter alfabético
// (debes validar que sea una única letra). El programa debe contar y mostrar
// cuántas veces aparece dicha letra dentro del código sin diferenciar mayúsculas de minúsculas.
//################################################################################
// Escribe tu código aquí
let codigo = prompt("Introduce el codigo de la taquilla")
let caracter = prompt("Introduce el caracter especial de el codigo")

let contadorLetras = 0
for (let i=0;i<codigo.length;i++){
    if(codigo[i].toUpperCase() == caracter.toUpperCase()){
        contadorLetras++
    }
}
if(contadorLetras==1){
    console.log("codigo valido")
}else{
    console.log("El codigo debe tener una unica letra y que sea la letra que se pasa cuando se pide el caracter especial")
}