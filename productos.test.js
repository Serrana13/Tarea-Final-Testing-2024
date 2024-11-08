const filtrarProductos = require('../js/productos');

// Escribir los tests debajo

const productos = require('../api/productos.json');
const todosLosProductos = [
    { "id": "abrigo-01", "titulo": "Campera 1", "imagen": "./img/campera-01.jpg", "categoria": "camperas", "precio": 1000 },
    { "id": "abrigo-02", "titulo": "Campera 2", "imagen": "./img/campera-02.jpg", "categoria": "camperas", "precio": 1000 }, 
    { "id": "abrigo-03", "titulo": "Campera 3", "imagen": "./img/campera-03.jpg", "categoria": "camperas", "precio": 1000 }, 
    { "id": "abrigo-04", "titulo": "Campera 4", "imagen": "./img/campera-04.jpg", "categoria": "camperas", "precio": 1000 }, 
    { "id": "abrigo-05", "titulo": "Campera 5", "imagen": "./img/campera-05.jpg", "categoria": "camperas", "precio": 1000 }, 
    { "id": "camiseta-01", "titulo": "Remera 1", "imagen": "./img/remera-01.jpg", "categoria": "remeras", "precio": 1000 }, 
    { "id": "camiseta-02", "titulo": "Remera 2", "imagen": "./img/remera-02.jpg", "categoria": "remeras", "precio": 1000 }, 
    { "id": "camiseta-03", "titulo": "Remera 3", "imagen": "./img/remera-03.jpg", "categoria": "remeras", "precio": 1000 }, 
    { "id": "camiseta-04", "titulo": "Remera 4", "imagen": "./img/remera-04.jpg", "categoria": "remeras", "precio": 1000 }, 
    { "id": "camiseta-05", "titulo": "Remera 5", "imagen": "./img/remera-05.jpg", "categoria": "remeras", "precio": 1000 }, 
    { "id": "camiseta-06", "titulo": "Remera 6", "imagen": "./img/remera-06.jpg", "categoria": "remeras", "precio": 1000 }, 
    { "id": "camiseta-07", "titulo": "Remera 7", "imagen": "./img/remera-07.jpg", "categoria": "remeras", "precio": 1000 }, 
    { "id": "camiseta-08", "titulo": "Remera 8", "imagen": "./img/remera-08.jpg", "categoria": "remeras", "precio": 1000 }, 
    { "id": "pantalon-01", "titulo": "Pantalón 01", "imagen": "./img/pantalon-01.png", "categoria": "pantalones", "precio": 1000 }, 
    { "id": "pantalon-02", "titulo": "Pantalón 02", "imagen": "./img/pantalon-02.png", "categoria": "pantalones", "precio": 1000 }, 
    { "id": "pantalon-03", "titulo": "Pantalón 03", "imagen": "./img/pantalon-03.png", "categoria": "pantalones", "precio": 1000 }, 
    { "id": "pantalon-04", "titulo": "Pantalón 04", "imagen": "./img/pantalon-04.png", "categoria": "pantalones", "precio": 1000 }, 
    { "id": "pantalon-05", "titulo": "Pantalón 05", "imagen": "./img/pantalon-05.png", "categoria": "pantalones", "precio": 1000 }
];
const camperas = [
    { "id": "abrigo-01", "titulo": "Campera 1", "imagen": "./img/campera-01.jpg", "categoria": "camperas", "precio": 1000 },
    { "id": "abrigo-02", "titulo": "Campera 2", "imagen": "./img/campera-02.jpg", "categoria": "camperas", "precio": 1000 },
    { "id": "abrigo-03", "titulo": "Campera 3", "imagen": "./img/campera-03.jpg", "categoria": "camperas", "precio": 1000 },
    { "id": "abrigo-04", "titulo": "Campera 4", "imagen": "./img/campera-04.jpg", "categoria": "camperas", "precio": 1000 },
    { "id": "abrigo-05", "titulo": "Campera 5", "imagen": "./img/campera-05.jpg", "categoria": "camperas", "precio": 1000},
  ];
const remeras = [
    { "id": "camiseta-01", "titulo": "Remera 1", "imagen": "./img/remera-01.jpg", "categoria": "remeras", "precio": 1000 },
    { "id": "camiseta-02", "titulo": "Remera 2", "imagen": "./img/remera-02.jpg", "categoria": "remeras", "precio": 1000 },
    { "id": "camiseta-03", "titulo": "Remera 3", "imagen": "./img/remera-03.jpg", "categoria": "remeras", "precio": 1000 },
    { "id": "camiseta-04", "titulo": "Remera 4", "imagen": "./img/remera-04.jpg", "categoria": "remeras", "precio": 1000 },
    { "id": "camiseta-05", "titulo": "Remera 5", "imagen": "./img/remera-05.jpg", "categoria": "remeras", "precio": 1000 },
    { "id": "camiseta-06", "titulo": "Remera 6", "imagen": "./img/remera-06.jpg", "categoria": "remeras", "precio": 1000 },
    { "id": "camiseta-07", "titulo": "Remera 7", "imagen": "./img/remera-07.jpg", "categoria": "remeras", "precio": 1000 },
    { "id": "camiseta-08", "titulo": "Remera 8", "imagen": "./img/remera-08.jpg", "categoria": "remeras", "precio": 1000 },
];

const pantalones = [
    { "id": "pantalon-01", "titulo": "Pantalón 01", "imagen": "./img/pantalon-01.png", "categoria": "pantalones", "precio": 1000 },
    { "id": "pantalon-02", "titulo": "Pantalón 02", "imagen": "./img/pantalon-02.png", "categoria": "pantalones", "precio": 1000 },
    { "id": "pantalon-03", "titulo": "Pantalón 03", "imagen": "./img/pantalon-03.png", "categoria": "pantalones", "precio": 1000 },
    { "id": "pantalon-04", "titulo": "Pantalón 04", "imagen": "./img/pantalon-04.png", "categoria": "pantalones", "precio": 1000 },
    { "id": "pantalon-05", "titulo": "Pantalón 05", "imagen": "./img/pantalon-05.png", "categoria": "pantalones", "precio": 1000 }
];

test('Probar categoría "Camperas"', () => {
      const valorObtenido = filtrarProductos(productos, 'camperas');
      expect(valorObtenido).toEqual(camperas);
  });

test('Probar categoría "Remeras"', () => {
    const valorObtenido = filtrarProductos(productos, 'remeras');
    expect(valorObtenido).toEqual(remeras);
});

test('Probar categoría "Pantalones"', () => {
    const valorObtenido = filtrarProductos(productos, 'pantalones');
    expect(valorObtenido).toEqual(pantalones);
});

test('Probar categoría "Todos los productos"', () => {
    const valorObtenido = productos ;
    expect(valorObtenido).toEqual(todosLosProductos);
});

test('Probar cantidad correcta de productos en categoría "Camperas"', () => {
    const valorEsperado = 5;
    const valorObtenido = filtrarProductos(productos, 'camperas').length;
    expect(valorObtenido).toEqual(valorEsperado);
});

test('Probar cantidad correcta de productos en categoría "Remeras"', () => {
    const valorEsperado = 8;
    const valorObtenido = filtrarProductos(productos, 'remeras').length;
    expect(valorObtenido).toEqual(valorEsperado);
});

test('Probar cantidad correcta de productos en categoría "Pantalones"', () => {
    const valorEsperado = 5;
    const valorObtenido = filtrarProductos(productos, 'pantalones').length;
    expect(valorObtenido).toEqual(valorEsperado);
});

test('Probar cantidad correcta de productos en "Todos los productos"', () => {
    const valorEsperado = 18;
    const valorObtenido = todosLosProductos.length;
    expect(valorObtenido).toEqual(valorEsperado);
});

test('Probar categoria sin productos', () => {
    const valorObtenido = filtrarProductos(productos, "categoriaVacia").length;
    expect(valorObtenido).toBe(0);
});