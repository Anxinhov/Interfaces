//################################################################################
// El sistema de códigos promocionales de ReservaYa necesita sustituir un carácter
// obsoleto por uno nuevo dentro del código de cupón.
// Pide el código y dos caracteres alfabéticos (valida que sean letras únicas) y
// reemplaza todas las apariciones del primer carácter por el segundo.
//################################################################################
// Escribe tu código aquí
let codigo = prompt("Escribe el codigo: ").split("")
let caracteres = prompt("Dime dos caracteres: ").split(" ")
for(let i=0;i<codigo.length;i++){
    if(codigo[i].toLowerCase()==caracteres[0].toLowerCase()){
        codigo[i]=caracteres[1]
    }
}
console.log(codigo.join(""))