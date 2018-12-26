function soBoaNoticia(nota) {
	if (nota >= 7) {
		console.log("Sua nota é " + nota);
	}
}

soBoaNoticia(8);

function seForVerdadeEuFalo(valor) {
	if (valor) {
		console.log(valor + " é verdadeiro.");
	}
}

seForVerdadeEuFalo();
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(0); // único número que resolve para falso
seForVerdadeEuFalo(-1);
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo('?');
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1, 2]);
seForVerdadeEuFalo({});

// testes com função arrow

const teste1 = nota => {
	if (nota >= 7) {
		console.log("Aprovado! Sua nota é " + nota);
	}
}

teste1(8);

const verao = (temperatura, clima) => {
	if (temperatura >= 30 && clima === 'sol') {
		console.log("A estação é verão!");
	}
}

// mesmo exemplo de função acima, mas sem o arrow

const naoVerao = function(temperatura, clima) {
	if (temperatura <= 15) {
		console.log("A estação não é verão!");
	}
}

verao(25, 'chuva');
verao(33, 'sol')
naoVerao(10);