const productos = [
  { id: 1, nombre: 'Traje Espacial', precio: 1200, categoria: 'Equipamiento', stock: 5 },
  { id: 2, nombre: 'Pistola Láser', precio: 500, categoria: 'Armas', stock: 0 },
  { id: 3, nombre: 'Módulo de Oxígeno', precio: 300, categoria: 'Equipamiento', stock: 12 },
  { id: 4, nombre: 'Ración de Comida', precio: 50, categoria: 'Suministros', stock: 50 }
];
// ----------------------------------------------------------------------------
// INSTRUCCIÓN 6: Filtrar Disponibles
// Crea una función flecha `obtenerDisponibles` que reciba un array de productos.
// Usa `.filter()` desestructurando la propiedad `stock` en los parámetros
// para devolver solo los productos que tengan stock disponible (stock > 0).
// ----------------------------------------------------------------------------

// Tu código aquí:
const obtnerDisponibles = productos.filter((producto) => producto.stock > 0)
console.log(obtnerDisponibles)

