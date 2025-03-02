// Desestructuración de objetos
const user = {
	username: 'Andres',
	email: 'correo@google.com',
	age: 20,
	ranking: 9
}
//--forma corta, mas usada
const {username, ranking, age} = user;
console.log(`${username} tiene ${age} años`);
console.log(ranking);
//--forma larga 
const username_1 = user.username;
const age_1 = user.age;
console.log(username_1, age_1);

// Desestructuración de objetos en funciones
const client = {
	code: 'C001',
	name: 'Juan Espinoza',
	age: 31,
	email: 'jespinoza@gmail.com'
}
const detail = (client) => {
	const {name, email} = client;
	console.log(`El detalle del cliente ${name} con correo ${email}`);
}
detail(client);
const detail_1 = (client)=>{
	console.log(`El detalle del cliente ${client.name} con email ${client.email}`);
}
detail_1(client)

const detail_2 = ({name, email}) => {
	console.log(`El detalle del cliente ${name} con correo ${email}`);
}
detail_2(client)

// Desestructuración de arreglos
const users = ['pepe', 'carlos', 'daniel', 'marcos', 'ximena', 'gabriela'];
const [user1, user2, user3] = users;
console.log(user1, user2, user3);

const [user_1, user_2, , , user_5] = users;
console.log(user_1, user_2, user_5);

const [user01, user02, ... rest] = users;
console.log(user01, user02, rest);