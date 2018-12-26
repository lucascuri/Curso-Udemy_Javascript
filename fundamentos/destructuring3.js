function rand({min = 0, max = 1000}) {
	const valor = Math.random() * (max - min) + min;
	return Math.floor(valor);
}

const obj = {min: 0, max: 500};
console.log(rand(obj));
console.log(rand({min: 300}));
console.log(rand({})); // usa os parâmetros passados com o destructuring na função
// console.log(rand()); gera erro