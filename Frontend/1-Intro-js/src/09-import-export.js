// Import
import findAmount, { paper, invoices, total, invoiceByClientName } from './data/invoices';


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

console.log(total(invoices));

console.log(invoiceByClientName('Carl Max'));

console.log(findAmount(250));