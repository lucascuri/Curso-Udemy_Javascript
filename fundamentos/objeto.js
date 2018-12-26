const prod1 = {};
prod1.nome = 'Camisa Polo Branca';
prod1.preco = 79.90;
prod1['Desconto Legal'] = 0.40 // evitar atributos com espaço

console.log(prod1);

const prod2 = {
	nome: 'Nike SB',
	tipo: 'Tênis',
	preco: 149.90
};

console.log(prod2);

'{"nome": "Nike SB", "tipo": "Tênis", "preco": 149.90}'; // converção de object prod2 para json. https://jsonlint.com/