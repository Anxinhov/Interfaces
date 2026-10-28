const productos = [
  { id: 1, nombre: 'Traje Espacial', precio: 1200, categoria: 'Equipamiento', stock: 5 },
  { id: 2, nombre: 'Pistola Láser', precio: 500, categoria: 'Armas', stock: 0 },
  { id: 3, nombre: 'Módulo de Oxígeno', precio: 300, categoria: 'Equipamiento', stock: 12 },
  { id: 4, nombre: 'Ración de Comida', precio: 50, categoria: 'Suministros', stock: 50 }
];
// ----------------------------------------------------------------------------
// INSTRUCCIÓN 1: Aplicar Descuento a 'Equipamiento'
// Crea una función flecha `aplicarDescuento` que reciba un array de productos.
// Usa `.map()` para devolver un NUEVO array donde los productos de categoría 
// 'Equipamiento' tengan un 10% de descuento en el precio.
// PISTA: Usa el Spread Operator (`...`) dentro de `.map()` para no mutar los objetos originales.
// ----------------------------------------------------------------------------

// Tu código aquí:
const aplicarDescuento = productos.map((producto) => producto.categoria == "Equipamiento" ?{...producto, precio : producto.precio*0.90}:producto)
console.log(aplicarDescuento)
