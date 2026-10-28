//################################################################################
// El módulo de subida de archivos de ReservaYa debe comprobar el tipo de documento
// adjuntado por el usuario (justificantes de pago, normas, etc.).
// Dada la extensión del archivo (reconocida tanto en mayúsculas como en minúsculas):
//  * txt -> "Archivo de texto"
//  * exe -> "Archivo ejecutable"
//  * pdf -> "Archivo PDF"
// Si no tiene extensión o es otra, mostrará "Archivo de tipo desconocido".
//################################################################################
// Escribe tu código aquí
let completo = false
do{
    let fichero = prompt("Dime el fichero:").split(".")
    if(fichero[1]=="txt"){
        console.log("Este fichero es un archivo de texto")
        completo = true
    }else if(fichero[1]=="exe"){
        console.log("Este fichero es un archivo ejecutable")
        completo = true
    }else if(fichero[1]=="pdf"){
        console.log("Este fichero es un archivo pdf")
        completo = true
    }else{
        console.log("El archivo no se puede aceptar solo se pueden aceptar:.txt, .exe y .pdf.\nVuelve a escribirlo")
    }
}while(!completo)