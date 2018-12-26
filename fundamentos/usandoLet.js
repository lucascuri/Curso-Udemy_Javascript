var numero = 1; // var tem os níveis de escopo: global e função
{
	let numero = 2; // let tem os níveis de escopo: global, função e bloco. Verifica se o atributo está no escopo atual, se não estiver, pega o valor do escopo maior.
	console.log(numero);
}
console.log(numero);