//################################################################################
// Un usuario introduce su nombre y dos apellidos para el registro de ReservaYa.
// Crea un programa que extraiga e imprima las iniciales en mayúsculas para generar
// su avatar de perfil.
//################################################################################
// Escribe tu código aquí
let nombreApelidos = prompt("Dime tu nombre y tus apellidos:\n").split(" ")
let nombre = nombreApelidos[0].charAt(0)
let apellido1 = nombreApelidos[1].charAt(0)
let apellido2 = nombreApelidos[2].charAt(0)
console.log("Tus siglas son: "+nombre.toUpperCase()+apellido1.toUpperCase()+apellido2.toUpperCase())