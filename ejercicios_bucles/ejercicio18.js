//################################################################################
// El departamento de seguridad exige validar los límites de aforo autorizados.
// Pide el límite inferior y superior del aforo (si el inferior es mayor, vuelve a pedirlo).
// A continuación introduce el número de espectadores de cada partido hasta pulsar 0.
// El programa informará de:
//  * La suma total de espectadores dentro del intervalo abierto.
//  * Cuántos partidos quedaron fuera del rango.
//  * Si algún partido registró exactamente el aforo de los límites.
//################################################################################
// Escribe tu código aquí
let aforoMin, aforoMax, entrada, sumaTotal =0, partidoFuera = 0,registroIgual =0

do{
    aforoMin = parseInt(prompt("Introduce el aforo maximo"))
    aforoMin = parseInt(prompt("Introduce el aforo minimo"))
    if(aforoMin>aforoMax){
        console.log("El aforo minimo debe ser igual o menor que e aforo maximo")
    }
}while(aforoMin>aforoMax)
do{
    entrada = parseInt(prompt("Introduce el número de espectedores del partido:"))
    if(entrada>=aforoMin && entrada<=aforoMax){
        sumaTotal += entrada
    }
    if(entrada<aforoMin || entrada>aforoMax){
        partidoFuera++
    }
    if(entrada == aforoMin || entrada == aforoMax){
        registroIgual++
    }
}while(entrada!=0)
    console.log("La suma total de espectadores dentro del intervalo abierto es: "+sumaTotal+" la cantidad de partidos que quedaron fuera del rango es: "+partidoFuera+"Cantidad de partidos que justo tuvieron una cantidad de espectadores igual a alguno de los limites de aforo: "+registroIgual)