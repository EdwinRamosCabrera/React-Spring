export const paper = {
	id: 4,
	product: 'paper',
	price: 15,
	quantity: 10
}

export const invoices = [
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

export const total = (invoices) => {
    let sum = 0;
    invoices.forEach(i => {
        sum = sum + i.client.amount;
    });
    return sum;    
}

export const invoiceByClientName = (clientName) => {
    return invoices.find(i => i.client.name === clientName);
}

// Exportación por defecto
export default (amount) => {
    return invoices.find(i => i.client.amount == amount)
}

// export { invoices, total, invoiceByClientName as default}