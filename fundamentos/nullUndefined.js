/* atribuição por referência = aponta para o mesmo endereço na memória
	ex: const a = {a: "texto"};
	const b = a;
	b = {a: "batata"};
	tanto a quanto b vão retornar {a: batata}, pois estão apontando para o mesmo endereço na memória.
*/

/* atribuição por valor = altera o valor em uma, mas na outra não
	ex: let a = 3;
	let b  = a;
	b++;
	//b = 4, mas a vai continuar sendo 3.
*/

let valor;
console.log(valor); // não inicializada

valor = null; // ausência de valor
console.log(valor);
// console.log(valor.toString());

const produto = {};
console.log(produto.preco);
console.log(produto);
produto.preco = 3.50;
console.log(produto);

produto.preco = undefined; // evite atribuir undefined
console.log(!!produto.preco);
// delete produto.preco
console.log(produto);

produto.preco = null; // sem preço
console.log(!!produto.preco);
console.log(produto);