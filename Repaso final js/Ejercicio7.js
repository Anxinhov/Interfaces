const productos = [
  { id: 1, nombre: 'Traje Espacial', precio: 1200, categoria: 'Equipamiento', stock: 5 },
  { id: 2, nombre: 'Pistola Láser', precio: 500, categoria: 'Armas', stock: 0 },
  { id: 3, nombre: 'Módulo de Oxígeno', precio: 300, categoria: 'Equipamiento', stock: 12 },
  { id: 4, nombre: 'Ración de Comida', precio: 50, categoria: 'Suministros', stock: 50 }
];
// ----------------------------------------------------------------------------
// INSTRUCCIÓN 7: Ordenar por Precio
// Crea una función flecha `ordenarPorPrecioDesc` que ordene los productos de mayor a menor precio.
// PISTA IMPORTANTE: `.sort()` MUTA (modifica) el array original.
// Usa el Spread Operator (`[...lista]`) primero para hacer una copia y luego aplicar `.sort()`.
// ----------------------------------------------------------------------------

// Tu código aquí:
const ordenarPorPrecioDesc = (lista) => [...lista].sort((producto, producto2) => producto2.precio - producto.precio)
console.log(ordenarPorPrecioDesc(productos))

