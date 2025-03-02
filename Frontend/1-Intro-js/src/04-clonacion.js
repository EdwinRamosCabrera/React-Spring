// Clonación
const invoice = {
	id: 10,
	nombre: 'Compras de oficina',
	date: new Date(),
	client: [
		{ name: 'Jhon Doe', age: 25, amount: 250 },
		{
			name: 'Edy Cord',
			age: 20,
			amount: 350,
		},
	],
	total: 1000,
};

const invoice_1 = invoice;
const result = invoice === invoice_1;
console.log(invoice);
console.log(invoice_1);
console.log(result);
if (result) console.log('Son iguales');
else console.log('No son iguales');

const invoice_2 = { ...invoice }
console.log(invoice_2);
const result_1 = invoice === invoice_2;
if (result_1) console.log('Son iguales');
else console.log('No son iguales');
