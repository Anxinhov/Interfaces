const productos = [
  { id: 1, nombre: 'Traje Espacial', precio: 1200, categoria: 'Equipamiento', stock: 5 },
  { id: 2, nombre: 'Pistola Láser', precio: 500, categoria: 'Armas', stock: 0 },
  { id: 3, nombre: 'Módulo de Oxígeno', precio: 300, categoria: 'Equipamiento', stock: 12 },
  { id: 4, nombre: 'Ración de Comida', precio: 50, categoria: 'Suministros', stock: 50 }
];
// ----------------------------------------------------------------------------
// INSTRUCCIÓN 5: Propiedad Calculada (enStock)
// Crea una función flecha `agregarEstadoStock` que reciba el array de productos.
// Usa `.map()` para retornar un nuevo array de objetos agregando la propiedad `enStock: true/false`
// según si el `stock` es mayor a 0 (usa retorno implícito o explícito + spread operator).
// ----------------------------------------------------------------------------

// Tu código aquí:
const agregarEstadoStock = productos.map((producto) => producto.stock>0 ? {...producto, enStock : true} : {...producto, enStock : false})
console.log(agregarEstadoStock)

