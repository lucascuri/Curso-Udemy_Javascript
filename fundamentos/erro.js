function tratarErroELancar (erro) {
	throw {
		nome: erro.name,
		msg: erro.message,
		date: new Date,
	}
}

function imprimirNomeGritado(obj) {
	try {
		console.log(obj.name.toUpperCase() + "!");
	} catch (e) {
		tratarErroELancar(e);
	} finally {
		console.log('Final...') // executa mesmo que o try não retorne nenhum erro
	}
}	



const obj = {
	nome: 'Roberto',
	idade: 33
}

imprimirNomeGritado(obj);