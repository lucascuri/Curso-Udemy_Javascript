const getInteiroAleatorio = (min, max) => {
	const valor = Math.random() * (max - min) + min;
	return Math.floor(valor);
}

let opcao = 0;

while (opcao != -1) {
	opcao = getInteiroAleatorio(-1, 10);
	console.log(`A opção escolhida foi ${opcao}.`);
}

console.log('Fim.');

