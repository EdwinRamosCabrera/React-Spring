// Promise
import { invoices, invoiceByClientName } from './data/invoices';

const promise = new Promise((resolve, reject) => {
	
	setTimeout(() => {
		const result = invoiceByClientName('Mario');
		if(result){
			resolve(result)
		}else{
			reject('Error: no existe el cliente')
		}
	}, 2500);
} )

promise.then(respuesta => {
	console.log(respuesta);
	console.log('Se realizo con exito la tarea');
}).catch(error => {
	console.warn(error);
})

// Eso se puede reducir a una linea con metodo de referencia 
// promise,then(console.log).catch(console.error);

// Promesas y funciones
const findInvoiceById = (id) => {
	const result = invoices.find(i => i.id == id)
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			if(result){
				resolve(result)
			} else{
				reject('No se encontro la factura')
			}
		}, 2000);
	});
	return promise;
}
findInvoiceById(4).then(console.log).catch(console.log);