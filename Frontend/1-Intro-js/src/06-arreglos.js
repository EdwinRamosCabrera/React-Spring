// Arreglos
const products = ['mesa', 'silla', 'teclado', 'notebook'];
products.push('LCD')
console.log(products);
products.forEach(item => console.log(item))

for (let i = 0; i < products.length; i++) {
	console.log('Producto ' + (i+1) + ' = ' + products[i]);
}

for (const element of products) {
	console.log('Producto : ' + element);
}

// Spread
const fruits = ['peras', 'manzanas', 'sandias'];

const mercado = [...products, ...fruits, 'lechuga', 'papas', 'uvas'];
console.log(mercado);

const products_2 = products.concat('pantalla LCD', 'Sony tv');
console.log(products_2);

const mercado_2 = products_2.concat(fruits).concat('Melocoton', 'Naranja');
console.log(mercado_2);

