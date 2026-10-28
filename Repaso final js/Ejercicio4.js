const productos = [
  { id: 1, nombre: 'Traje Espacial', precio: 1200, categoria: 'Equipamiento', stock: 5 },
  { id: 2, nombre: 'Pistola Láser', precio: 500, categoria: 'Armas', stock: 0 },
  { id: 3, nombre: 'Módulo de Oxígeno', precio: 300, categoria: 'Equipamiento', stock: 12 },
  { id: 4, nombre: 'Ración de Comida', precio: 50, categoria: 'Suministros', stock: 50 }
];
// ----------------------------------------------------------------------------
// INSTRUCCIÓN 4: Combinar Listas con Spread Operator
// Llegan nuevos productos:
const nuevosProductos = [
  { id: 5, nombre: 'Batería de Plasma', precio: 800, categoria: 'Equipamiento', stock: 8 }
];

// Usa el Spread Operator (`...`) para fusionar `productos` y `nuevosProductos` 
// en una constante llamada `inventarioCompleto`.
// ----------------------------------------------------------------------------

// Tu código aquí:
const inventarioCompleto = {...productos, ...nuevosProductos}
console.log(inventarioCompleto)