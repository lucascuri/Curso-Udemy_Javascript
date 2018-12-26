// par chave/valor
const saudacao = 'Opa'; //contexto léxico 1

function exec() {
	const saudacao = 'Falaa' // contexto léxico 2
	return saudacao;
}

// Objetos são grupos aninhados de pares chave/valor
const cliente = {
	nome: 'Lucas',
	idade: 19,
	peso: 70,
	endereco: {
		bairro: 'São Gonçalo',
		logradouro: 'Professora Ernestina Mursa',
		numero: 74
	}
}

console.log(saudacao);
console.log(exec());
console.log(cliente);