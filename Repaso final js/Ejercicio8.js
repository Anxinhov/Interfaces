const productos = [
  { id: 1, nombre: 'Traje Espacial', precio: 1200, categoria: 'Equipamiento', stock: 5 },
  { id: 2, nombre: 'Pistola Láser', precio: 500, categoria: 'Armas', stock: 0 },
  { id: 3, nombre: 'Módulo de Oxígeno', precio: 300, categoria: 'Equipamiento', stock: 12 },
  { id: 4, nombre: 'Ración de Comida', precio: 50, categoria: 'Suministros', stock: 50 }
];
// ----------------------------------------------------------------------------
// INSTRUCCIÓN 8: Calcular Valor Total del Inventario (NUEVO)
// Crea una función flecha `calcularValorTotalInventario` que tome un array de productos.
// Usa `.reduce()` desestructurando `{ precio, stock }` en cada iteración
// para multiplicar el precio por el stock de cada producto y acumular el total general.
// PISTA: Recuerda pasar `0` como valor inicial del acumulador.
// ----------------------------------------------------------------------------

// Tu código aquí:
const calcularValorTotalInventario = productos.reduce((acumulador, {precio, stock}) =>acumulador+ (precio * stock), 0)
console.log(calcularValorTotalInventario)