const productos = [
  { id: 1, nombre: 'Traje Espacial', precio: 1200, categoria: 'Equipamiento', stock: 5 },
  { id: 2, nombre: 'Pistola Láser', precio: 500, categoria: 'Armas', stock: 0 },
  { id: 3, nombre: 'Módulo de Oxígeno', precio: 300, categoria: 'Equipamiento', stock: 12 },
  { id: 4, nombre: 'Ración de Comida', precio: 50, categoria: 'Suministros', stock: 50 }
];
// ----------------------------------------------------------------------------
// INSTRUCCIÓN 3: Reorganizar Elementos de Arrays
// Dada la siguiente lista con los más vendidos:
const topVentas = ['Traje Espacial', 'Módulo de Oxígeno', 'Ración de Comida'];

// Usa DESESTRUCTURACIÓN DE ARRAYS para extraer:
// - `top1`: El primer elemento ('Traje Espacial')
// - `top3`: El tercer elemento ('Ración de Comida')
// PISTA: Omite el segundo elemento usando comas.
// ----------------------------------------------------------------------------

// Tu código aquí:
const [top1,,top3] = topVentas
console.log(`Top 1: ${top1}`)
console.log(`Top 3: ${top3}`)

