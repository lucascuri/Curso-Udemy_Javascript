function rand([min = 0, max = 1000]) {
	if (min > max) {[min, max] = [max, min]};
	const valor = Math.random() * (max-min) + min;
	return Math.floor(valor);
}

console.log(rand([1000, 500])); // inverteu o min e o max
console.log(rand([500]));
console.log(rand([]));
console.log(rand()); // retorna erro, pois não pode acessar um undefined