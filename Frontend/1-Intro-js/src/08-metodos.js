// Método Map
const paper = {
	id: 4,
	product: 'paper',
	price: 15,
	quantity: 10
}

const invoices = [
	{
		id: 1,
		name: 'Compras de oficina',
		date: new Date(),
		client: { 
			id: 1,
			name: 'Jhon Doe', 
			age: 25, 
			amount: 250 
		},
		items: [
			{
				id: 1,
				product: 'lamp',
				price: 19,
				quantity: 2
			},
			{
				id: 2,
				product: 'pencil',
				price: 5,
				quantity: 5
			},
			{
				id: 3,
				product: 'paper',
				price: 100,
				quantity: 10
			},
			paper
		]
	},
	{
		id: 2,
		name: 'Compras de computación',
		date: new Date(),
		client: { 
			id: 2,
			name: 'Carl Max', 
			age: 25, 
			amount: 250 
		},
		items: [
			{
				id: 1,
				product: 'talking',
				price: 25,
				quantity: 2
			},
			{
				id: 2,
				product: 'monitor 17"',
				price: 400,
				quantity: 1
			},
			{
				id: 3,
				product: 'mouse',
				price: 15,
				quantity: 2
			},
		]
	},
	{
		id: 3,
		name: 'Compras de papeleria',
		date: new Date(),
		client: { 
			id: 3,
			name: 'Dun Braun', 
			age: 25, 
			amount: 250 
		},
		items: [
			{
				id: 1,
				product: 'books',
				price: 7,
				quantity: 5
			},
			{
				id: 2,
				product: 'colored leaves',
				price: 10,
				quantity: 7
			},
			{
				id: 3,
				product: 'paper',
				price: 15,
				quantity: 10
			},
			paper
		]
	}
]

const invoice_1 = invoices.map(i => {
	return i.name;
})
console.log(invoice_1);

const invoice_2= invoices.map(i => i.client.name)
console.log(invoice_2);

// Método Find
const invoice_3 = invoices.find(i => i.name === 'Compras de papeleria');
console.log(invoice_3);

// Método Filter
const invoice_4 = invoices.filter(i => i.id !== 2);
console.log(invoice_4);

const invoice_5 = invoices.filter(i => i.id > 1);
console.log(invoice_5);

const invoice_6 = invoices.filter(i => i.items.includes(paper));
console.log(invoice_6);

const invoice_7 = invoices.some(i => i.client.name === 'Juan')
console.log(invoice_7);
