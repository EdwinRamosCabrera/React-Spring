// Optional Chaining
const invoice = {
	id: 10,
	nombre: 'Compras de oficina',
	date: new Date(),
	client: [
		{ 
			name: 'Jhon Doe', 
			age: 25, 
			amount: 250 },
		{
			name: 'Edy Cord',
			age: 20,
			amount: 350,
		},
	],
	total: 1000,
};

console.log(invoice.company);
console.log(invoice.company?.name);
console.log(invoice.client?.addres?.street);

// Sin aplicar Optional Chaining se tendria que manejar el nulo asi:
if(invoice.company != undefined && invoice.company.name){
	console.log('perfecto!!!');
} else {
	console.log('no viene la empresa');
}

// Aplicando Optional Chaining
if(invoice.company?.name){
	console.log('perfecto!!!');
} else {
	console.log('no viene la empresa');
}

//Opeador ternario 
const average = 4.9;
const response = (average>5.5) ? 'Aprobado': 'Rechazado';
console.log(response);