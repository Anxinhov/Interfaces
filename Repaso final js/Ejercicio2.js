const productos = [
  { id: 1, nombre: 'Traje Espacial', precio: 1200, categoria: 'Equipamiento', stock: 5 },
  { id: 2, nombre: 'Pistola Láser', precio: 500, categoria: 'Armas', stock: 0 },
  { id: 3, nombre: 'Módulo de Oxígeno', precio: 300, categoria: 'Equipamiento', stock: 12 },
  { id: 4, nombre: 'Ración de Comida', precio: 50, categoria: 'Suministros', stock: 50 }
];
// ----------------------------------------------------------------------------
// INSTRUCCIÓN 2: Formatear Mensajes
// Crea una función flecha `generarEtiquetas` que tome un array de productos.
// Usa `.map()` desestructurando los parámetros de la función flecha ({ nombre, precio })
// para devolver un array de strings con formato: "Producto: [nombre] - Precio: $[precio]"
// ----------------------------------------------------------------------------

// Tu código aquí:
const generarEtiquetas = productos.map(({nombre, precio}) => `Producto: ${nombre} - Precio: ${precio}`)
console.log(generarEtiquetas)
