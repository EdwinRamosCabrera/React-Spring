// Fetch API
const httpClient = fetch('https://jsonplaceholder.typicode.com/users');

/*
httpClient.then(response => {
	response.json().then(data =>{
		console.log(data);
	})
})
*/

httpClient
.then(response => response.json())
.then(data => console.log(data));

// Async - await
const findAllUsers = async() => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users');
	return await response.json();
}
const user = await findAllUsers();
console.log(user);