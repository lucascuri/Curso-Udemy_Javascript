const imprimirResultado = nota => {
	if (nota >= 7) {
		console.log("Aprovado!");
	} else {
		console.log("Reprovado!");
	}
}

imprimirResultado(10);
imprimirResultado(6);
imprimirResultado("Epa!"); // cuidado com esse tipo de situação - deverá ser feito uma validação para que sejam digitados apenas números.