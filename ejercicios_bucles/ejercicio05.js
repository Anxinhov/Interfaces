//################################################################################
// En ReservaYa se quiere mostrar la asignación de pistas de forma gráfica.
// Pide al usuario el número total de pistas N (entre 1 y 20).
// Muestra en consola las pistas desde la 1 hasta la N, imprimiendo el número de 
// pista repetido tantas veces como su propio valor (ej: Pista 1 una vez, Pista 2 dos veces...).
//################################################################################
// Escribe tu código aquí
let npista = parseInt(prompt("Dime el número de pistas que quieres "))
for(let i=1;i<=npista;i++){
    for(let n=0;n<i;n++){
        console.log("Pista "+i)
    }
}