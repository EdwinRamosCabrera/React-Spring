// funciones normales

let nombre = " Carlos"
let apellido = "Garcia"

function user(cargo, edad = 30){
	const greeting = `Hola, ${nombre} ${apellido} tengo ${edad} años y soy ${cargo}`
	return greeting
}

const result = user("Médico")

console.log(result);

// funciones flechas - arrow function 
let personas = ['Karolina', 'Diego', 'Ximena']

const invitados = function () {
	for(let i = 0; i < personas.length; i++){
		console.log(personas[i]);
	}
}
invitados()

const asistentes = () => {
	personas.forEach((person) => console.log(person))
}
asistentes()

const saludo = (nombres, ciudad = "Lima") => `Hola soy ${nombres} y vivo en ${ciudad}`
console.log(saludo("Marcos"));

const add = (num1, num2) => {
	// `${num1 + num2}`
	const result = num1 + num2
	return result
}
console.log(add(25, 50)); 


