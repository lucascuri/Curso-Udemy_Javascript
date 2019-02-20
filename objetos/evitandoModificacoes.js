// Object.preventExtensions (não permite adicionar novos atributos)
const produto = Object.preventExtensions({
    nome: 'Condicionador',
    preco: 59.90,
    linha: 'Banana'
});

Object.isExtensible(produto) ?
    console.log(`Extensível: verdadeiro`) : console.log(`Extensível: falso`);

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.linha;
console.log(produto);


const linha = {};
Object.preventExtensions(linha);
console.log(Object.isExtensible(linha));

// Object.seal (não deixa adicionar novos valores e nem excluir)
const pessoa = {
    nome: 'Juliana',
    idade: 35
};

Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));
pessoa.sobrenome = 'Silva';
pessoa.idade = 19;
delete pessoa.nome;
console.log(pessoa);

// Object.freeze = selado + valores constantes