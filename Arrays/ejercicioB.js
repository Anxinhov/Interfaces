//################################################################################
// EJERCICIO B
// Crear un vector de 5 cadenas leídas por teclado. Copiarlas en otro vector
// pero invertidas letra a letra, y mostrar ambos vectores.
//################################################################################
const palabras = []
const sarbalap = []
let arbalap = ""
for(let i=0;i<5;i++){
    palabras.push(prompt("Dime una palabra"))
    for(let n=palabras[i].length-1;n>=0;n--){
        arbalap+=palabras[i].split("")[n]
    }
    sarbalap.push(arbalap)
    arbalap=""
}
console.log(palabras)
console.log(sarbalap)