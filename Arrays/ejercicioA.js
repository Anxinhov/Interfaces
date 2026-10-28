//################################################################################
// EJERCICIO A
// Generar un vector "temperaturas" de 7 valores aleatorios entre -5 y 35 grados.
// Mostrar cada temperatura junto con su equivalente en Fahrenheit y si es
// "Fría", "Templada" o "Calurosa".
//################################################################################
const temperaturasC = Array.from({length: 7}, () => Math.floor(Math.random()*41)-5)
temperaturasC.forEach(t => {
    const f = (t * 9/5 +32).toFixed(1)
    const categoria = t < 10 ? "Fria" : t < 25 ? "Templada" : "Calurosa"
    console.log(`Temperatura: ${t}ºC, Farenheit: ${f}ºF Categoria: ${categoria}`)
})

