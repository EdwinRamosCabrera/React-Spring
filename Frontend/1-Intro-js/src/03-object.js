// Objetos
const invoice = {
	id: 10,
	nombre: 'Compras de oficina',
	date: new Date(),
	client: 'Jhon Doe',
	total: 1000
}
console.log(invoice);
console.log(invoice.client);
invoice.client = 'Jhon Carter'
console.log(invoice.client);

const invoice_1 = {
	id: 1,
	name: 'Compras de oficina',
	date: new Date(),
	client:  {
		id: 1,
		name: 'Carlos Torres',
		quantity: 10,
		price: 2.50,
		}
}
invoice_1.total = invoice_1.client.quantity * invoice_1.client.price
console.log(invoice_1);

const invoice_2 = {
	id: 2,
	name: 'Compras de insumos',
	date: new Date(),
	items: [{
		id: 1,
		name: 'Menestras',
		quantity: 10,
		price: 5.3
		},
		{
		id: 1,
		name: 'Verduras',
		quantity: 5,
		price: 1.2
		},
		{
		id: 1,
		name: 'Carnes rojas',
		quantity: 12,
		price: 15.10
		}],
	total: function(){
		let sum = 0;
		this.items.forEach(item => {
			sum = sum + (item.quantity*item.price)
		})
		return sum;
	}
}
console.log(invoice_2);
console.log(invoice_2.total());

const gato = {
	nombre: 'Bigotes',
	edad: 1,
	caracteristicas:  {
		lenguaje: 'maullar',
		comida: ['conservas', 'galletas'],
		tipo: 'mamifero'
	},
	info: function(){
		return `Mi nombre es : ${this.nombre} y tengo ${this.edad} año`; 
	}, 
	gustos: () => {
		return gato.caracteristicas[0]
	}
}
const info_gato = gato.info();
console.log(gato);
console.log(info_gato);

function Persona(nombre, apellido) {
	this.nombre = nombre,
	this.apellido = apellido
}

class Animal {
	constructor(nombre, tipo){
		this.nombre = nombre,
		this.tipo = tipo
	}
}

const persona_1 = new Persona('Guido', 'Cahuana')
console.log(persona_1);

const perro = new Animal('Fido', 'mamifero')
console.log(perro);

const insectos = ['mosca', 'cucaracha', 'grillo']
console.log(insectos);